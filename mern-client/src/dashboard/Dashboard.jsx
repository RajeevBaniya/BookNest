// import React from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const data = [
//   { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
//   { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
//   { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
//   { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
//   { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
//   { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
//   { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
// ];



// const DashboardChart = () => {
//   return (
//     <ResponsiveContainer className='bg-gradient-to-r from-gray-100 to-gray-300' width="100%" height={700}>
//       <LineChart
//         data={data}
//         margin={{
//           top: 5, right: 30, left: 20, bottom: 5,
//         }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="name" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
//         <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
//       </LineChart>
//     </ResponsiveContainer>

//   );
// }

// export default DashboardChart;
import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen min-h-screen bg-gradient-to-r from-orange-400 to-teal-500 text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Your Dashboard</h1>
      <p className="text-lg md:text-xl mb-8">Here you can add your custom components and data visualizations.</p>
      <div className="flex items-center justify-center md:flex-row md:space-x-8">
        <svg className="w-12 h-12 md:w-16 md:h-16 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.728A10.955 10.955 0 0112 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a10.955 10.955 0 01-3.882-8.454Z"></path>
        </svg>
        <svg className="w-12 h-12 md:w-16 md:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C12 2.732 14.733 0 18 0s6 2.732 6 6-2.733 6-6 6-6-2.732-6-6zm0 9c-4.335 0-8-3.665-8-8s3.665-8 8-8 8 3.665 8 8-3.665 8-8z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Dashboard;
// import React from 'react'

// const Dashboard = () => {
//   return (
//     <div>Dashboard</div>
//   )
// }

// export default Dashboard