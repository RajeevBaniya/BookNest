import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { FiGrid, FiUpload, FiList, FiUsers, FiLogOut } from 'react-icons/fi';

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-4 border-b">
          <Link to="/" className="flex items-center space-x-2">
            <img src="your-logo.png" alt="Logo" className="w-8 h-8" />
            <span className="text-xl font-semibold text-gray-800">BookNest</span>
          </Link>
        </div>
        
        <nav className="p-4 space-y-2">
          <Link to="/admin/dashboard" className="flex items-center space-x-2 p-3 rounded-lg hover:bg-indigo-50 text-gray-700 hover:text-indigo-600 transition-colors duration-200">
            <FiGrid className="text-xl" />
            <span>Dashboard</span>
          </Link>
          
          <Link to="/admin/dashboard/upload" className="flex items-center space-x-2 p-3 rounded-lg hover:bg-indigo-50 text-gray-700 hover:text-indigo-600 transition-colors duration-200">
            <FiUpload className="text-xl" />
            <span>Upload Book</span>
          </Link>
          
          <Link to="/admin/dashboard/manage" className="flex items-center space-x-2 p-3 rounded-lg hover:bg-indigo-50 text-gray-700 hover:text-indigo-600 transition-colors duration-200">
            <FiList className="text-xl" />
            <span>Manage Books</span>
          </Link>
          
          {/* <Link to="/admin/dashboard/users" className="flex items-center space-x-2 p-3 rounded-lg hover:bg-indigo-50 text-gray-700 hover:text-indigo-600 transition-colors duration-200">
            <FiUsers className="text-xl" />
            <span>Users</span>
          </Link> */}

          <div className="border-t my-4"></div>
          
          <Link to="/logout" className="flex items-center space-x-2 p-3 rounded-lg hover:bg-red-50 text-gray-700 hover:text-red-600 transition-colors duration-200">
            <FiLogOut className="text-xl" />
            <span>Log Out</span>
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-50">
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardLayout
