import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import MainLayout from '../components/layout/MainLayout';

const AnalyticsPage: React.FC = () => {
  // Dummy data for monthly attendance
  const monthlyAttendanceData = [
    { month: 'Jan', percentage: 95 },
    { month: 'Feb', percentage: 98 },
    { month: 'Mar', percentage: 92 },
    { month: 'Apr', percentage: 96 },
    { month: 'May', percentage: 90 },
    { month: 'Jun', percentage: 94 },
    { month: 'Jul', percentage: 97 },
    { month: 'Aug', percentage: 91 },
    { month: 'Sep', percentage: 93 },
    { month: 'Oct', percentage: 89 },
  ];

  // Dummy data for leave distribution
  const leaveDistributionData = [
    { name: 'Sick Leave', value: 5 },
    { name: 'Casual Leave', value: 3 },
    { name: 'Vacation', value: 7 },
    { name: 'Other', value: 2 },
  ];

  // Dummy data for attendance streaks
  const attendanceStreakData = [
    { day: 'Mon', streak: 12 },
    { day: 'Tue', streak: 15 },
    { day: 'Wed', streak: 10 },
    { day: 'Thu', streak: 8 },
    { day: 'Fri', streak: 14 },
  ];

  // Colors for pie chart
  const COLORS = ['#6366f1', '#8b5cf6', '#ec4899', '#f43f5e'];

  return (
    <MainLayout>
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.h1 
            className="text-2xl font-semibold text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Attendance Analytics
          </motion.h1>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="py-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Monthly Attendance Chart */}
              <motion.div 
                className="card p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Monthly Attendance Percentage</h2>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={monthlyAttendanceData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.2} />
                      <XAxis dataKey="month" stroke="#6B7280" />
                      <YAxis stroke="#6B7280" domain={[0, 100]} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                          borderRadius: '0.5rem',
                          border: 'none',
                          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                        }} 
                      />
                      <Legend />
                      <Bar 
                        dataKey="percentage" 
                        name="Attendance %" 
                        fill="url(#colorGradient)" 
                        radius={[4, 4, 0, 0]}
                        animationDuration={1500}
                      />
                      <defs>
                        <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                        </linearGradient>
                      </defs>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
              
              {/* Leave Distribution Chart */}
              <motion.div 
                className="card p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Leave Distribution</h2>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={leaveDistributionData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={(entry) => `${entry.name}: ${(((entry.value as number) / leaveDistributionData.reduce((sum, item) => sum + item.value, 0)) * 100).toFixed(0)}%`}
                        animationDuration={1500}
                      >
                        {leaveDistributionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip 
                        formatter={(value) => [`${value} days`, 'Duration']}
                        contentStyle={{ 
                          backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                          borderRadius: '0.5rem',
                          border: 'none',
                          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                        }} 
                      />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
              
              {/* Attendance Streak Chart */}
              <motion.div 
                className="card p-6 lg:col-span-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Attendance Streaks</h2>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={attendanceStreakData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.2} />
                      <XAxis dataKey="day" stroke="#6B7280" />
                      <YAxis stroke="#6B7280" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                          borderRadius: '0.5rem',
                          border: 'none',
                          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                        }} 
                      />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="streak" 
                        name="Consecutive Days" 
                        stroke="#ec4899" 
                        strokeWidth={3}
                        dot={{ r: 6, strokeWidth: 2, fill: '#fff' }}
                        activeDot={{ r: 8, strokeWidth: 0, fill: '#ec4899' }}
                        animationDuration={1500}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>
            
            {/* Summary Cards */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="card p-6 bg-gradient-to-br from-primary-500/10 to-primary-600/20 dark:from-primary-500/20 dark:to-primary-600/30">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Average Attendance</h3>
                    <p className="mt-1 text-3xl font-semibold text-primary-600 dark:text-primary-400">93.5%</p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Target: 95%</span>
                    <span className="text-gray-700 dark:text-gray-300">93.5%</span>
                  </div>
                  <div className="mt-1 h-2 w-full bg-primary-200 dark:bg-primary-700 rounded-full overflow-hidden">
                    <div className="bg-primary-600 dark:bg-primary-400 h-2 rounded-full" style={{ width: '93.5%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="card p-6 bg-gradient-to-br from-secondary-500/10 to-secondary-600/20 dark:from-secondary-500/20 dark:to-secondary-600/30">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-secondary-100 dark:bg-secondary-900 text-secondary-600 dark:text-secondary-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Total Leave Days</h3>
                    <p className="mt-1 text-3xl font-semibold text-secondary-600 dark:text-secondary-400">17</p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Allocation: 30 days</span>
                    <span className="text-gray-700 dark:text-gray-300">56.7% used</span>
                  </div>
                  <div className="mt-1 h-2 w-full bg-secondary-200 dark:bg-secondary-700 rounded-full overflow-hidden">
                    <div className="bg-secondary-600 dark:bg-secondary-400 h-2 rounded-full" style={{ width: '56.7%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="card p-6 bg-gradient-to-br from-purple-500/10 to-pink-600/20 dark:from-purple-500/20 dark:to-pink-600/30">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Best Streak</h3>
                    <p className="mt-1 text-3xl font-semibold text-purple-600 dark:text-purple-400">21 days</p>
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span>15% improvement from last semester</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AnalyticsPage;