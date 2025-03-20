import React, { useEffect, useState } from 'react';
import { FiBook, FiDollarSign, FiUsers, FiClock, FiTrendingUp, FiGrid, FiPieChart } from 'react-icons/fi';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
import { Pie, Line } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement);

const Dashboard = () => {
    const [stats, setStats] = useState({
        totalBooks: 0,
        // totalSales: 0,
        activeUsers: 0,
        recentBooks: [],
        categoryDistribution: {},
        salesTrend: []
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        fetchDashboardData();
        const interval = setInterval(fetchDashboardData, 30000);
        const timeInterval = setInterval(() => setCurrentTime(new Date()), 1000);
        
        return () => {
            clearInterval(interval);
            clearInterval(timeInterval);
        };
    }, []);

    const fetchDashboardData = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await fetch('http://localhost:5000/all-books');
            if (!response.ok) throw new Error('Failed to fetch data');
            const books = await response.json();
            
            // Calculate stats
            const totalBooks = books.length;
            const totalSales = books.reduce((acc, book) => acc + (book.price || 0), 0);
            const recentBooks = books.slice(-5);

            // Calculate category distribution
            const categoryDistribution = books.reduce((acc, book) => {
                acc[book.category] = (acc[book.category] || 0) + 1;
                return acc;
            }, {});

            // Generate mock sales trend data (last 7 days)
            const salesTrend = Array.from({ length: 7 }, (_, i) => ({
                date: new Date(Date.now() - (6 - i) * 24 * 60 * 60 * 1000).toLocaleDateString(),
                sales: Math.floor(Math.random() * 5000) + 1000
            }));

            setStats({
                totalBooks,
                totalSales,
                activeUsers: Math.floor(Math.random() * 10) + 5, // Mock active users
                recentBooks,
                categoryDistribution,
                salesTrend
            });
        } catch (error) {
            console.error('Error fetching dashboard data:', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const pieChartData = {
        labels: Object.keys(stats.categoryDistribution),
        datasets: [{
            data: Object.values(stats.categoryDistribution),
            backgroundColor: [
                '#0ea5e9',
                '#10b981',
                '#8b5cf6',
                '#f59e0b',
                '#ef4444',
                '#ec4899'
            ],
            borderWidth: 0
        }]
    };

    const lineChartData = {
        labels: stats.salesTrend.map(item => item.date),
        datasets: [{
            label: 'Daily Sales (Rs.)',
            data: stats.salesTrend.map(item => item.sales),
            borderColor: '#0ea5e9',
            tension: 0.4,
            fill: false
        }]
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-50">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan-600"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-50">
                <div className="text-red-600 text-center">
                    <p className="text-xl font-semibold mb-2">Error loading dashboard</p>
                    <p className="text-sm">{error}</p>
                    <button 
                        onClick={fetchDashboardData} 
                        className="mt-4 px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full min-h-screen bg-gray-50 p-8">
            {/* Welcome Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">Welcome to BookNest</h1>
                        <p className="text-gray-600 mt-2">
                            {currentTime.toLocaleString('en-US', { 
                                weekday: 'long', 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit',
                                second: '2-digit'
                            })}
                        </p>
                    </div>
                    <div className="flex items-center space-x-2 text-cyan-600">
                        <FiTrendingUp className="text-xl animate-pulse" />
                        <span className="text-sm font-semibold">Live Updates</span>
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                {/* Total Books */}
                <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-white text-sm opacity-80">Total Books</p>
                            <p className="text-3xl font-bold text-white mt-2">{stats.totalBooks}</p>
                        </div>
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                            <FiBook className="text-2xl text-white" />
                        </div>
                    </div>
                </div>

                {/* Total Sales */}
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-white text-sm opacity-80">Total Sales</p>
                            <p className="text-3xl font-bold text-white mt-2">Rs.{stats.totalSales.toLocaleString()}</p>
                        </div>
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                            <FiDollarSign className="text-2xl text-white" />
                        </div>
                    </div>
                </div>

                {/* Active Users */}
                <div className="bg-gradient-to-br from-violet-500 to-violet-600 rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-white text-sm opacity-80">Active Users</p>
                            <p className="text-3xl font-bold text-white mt-2">{stats.activeUsers}</p>
                        </div>
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                            <FiUsers className="text-2xl text-white" />
                        </div>
                    </div>
                </div>

                {/* Recent Updates */}
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-white text-sm opacity-80">Recent Updates</p>
                            <p className="text-3xl font-bold text-white mt-2">{stats.recentBooks.length}</p>
                        </div>
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                            <FiClock className="text-2xl text-white" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Category Distribution */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                            <FiPieChart className="mr-2" />
                            Category Distribution
                        </h2>
                    </div>
                    <div className="h-64">
                        <Pie data={pieChartData} options={{ maintainAspectRatio: false }} />
                    </div>
                </div>

                {/* Sales Trend */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                            <FiTrendingUp className="mr-2" />
                            Sales Trend
                        </h2>
                    </div>
                    <div className="h-64">
                        <Line data={lineChartData} options={{ 
                            maintainAspectRatio: false,
                            scales: {
                                y: { beginAtZero: true }
                            }
                        }} />
                    </div>
                </div>
            </div>

            {/* Recent Books */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                        <FiGrid className="mr-2" />
                        Recent Books
                    </h2>
                    <p className="text-sm text-gray-500">Last {stats.recentBooks.length} books added</p>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full">
                        <thead>
                            <tr className="border-b border-gray-200">
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Book</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Author</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Category</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Price</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {stats.recentBooks.map((book, index) => (
                                <tr key={book._id || index} className="hover:bg-gray-50 transition-colors duration-200">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <img
                                                src={book.imageURL || 'https://via.placeholder.com/40'}
                                                alt={book.bookTitle}
                                                className="w-10 h-10 rounded-lg object-cover"
                                            />
                                            <span className="ml-3 font-medium text-gray-900">{book.bookTitle}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{book.authorName}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-cyan-100 text-cyan-800">
                                            {book.category}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Rs.{(book.price || 899).toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
