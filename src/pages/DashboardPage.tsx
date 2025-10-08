import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '../components/layout/MainLayout';

const DashboardPage: React.FC = () => {
  // Dummy data for dashboard
  const attendanceData = {
    present: 85,
    absent: 5,
    leave: 10,
  };

  const leaveRequests = [
    { id: 1, type: 'Sick Leave', date: '2025-10-15', status: 'approved' },
    { id: 2, type: 'Personal Leave', date: '2025-10-20', status: 'pending' },
    { id: 3, type: 'Casual Leave', date: '2025-11-05', status: 'rejected' },
  ];

  const upcomingEvents = [
    { id: 1, title: 'Mid-term Examination', date: '2025-10-25' },
    { id: 2, title: 'Annual Sports Day', date: '2025-11-10' },
    { id: 3, title: 'Project Submission', date: '2025-11-15' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'rejected':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getStatusEmoji = (status: string) => {
    switch (status) {
      case 'approved':
        return '🟢';
      case 'pending':
        return '🟡';
      case 'rejected':
        return '🔴';
      default:
        return '⚪';
    }
  };

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
            Dashboard
          </motion.h1>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="py-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {/* Attendance Summary Card */}
              <motion.div 
                className="card p-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">Attendance Summary</h2>
                <div className="mt-4 flex items-center justify-center">
                  <div className="relative inline-flex">
                    <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                      <svg className="w-full h-full" viewBox="0 0 36 36">
                        {/* Background circle */}
                        <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200 dark:text-gray-700" strokeWidth="2"></circle>
                        
                        {/* Present percentage */}
                        <circle 
                          cx="18" 
                          cy="18" 
                          r="16" 
                          fill="none" 
                          className="stroke-current text-primary-500" 
                          strokeWidth="2" 
                          strokeDasharray={`${attendanceData.present} 100`} 
                          strokeLinecap="round" 
                          transform="rotate(-90 18 18)"
                        ></circle>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">{attendanceData.present}%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2 text-center text-sm">
                  <div>
                    <div className="text-primary-600 dark:text-primary-400 font-medium">{attendanceData.present}%</div>
                    <div className="text-gray-500 dark:text-gray-400">Present</div>
                  </div>
                  <div>
                    <div className="text-red-600 dark:text-red-400 font-medium">{attendanceData.absent}%</div>
                    <div className="text-gray-500 dark:text-gray-400">Absent</div>
                  </div>
                  <div>
                    <div className="text-yellow-600 dark:text-yellow-400 font-medium">{attendanceData.leave}%</div>
                    <div className="text-gray-500 dark:text-gray-400">Leave</div>
                  </div>
                </div>
              </motion.div>

              {/* Leave Requests Card */}
              <motion.div 
                className="card p-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">Leave Requests</h2>
                <div className="mt-4 space-y-3">
                  {leaveRequests.map((request) => (
                    <div key={request.id} className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{request.type}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{request.date}</p>
                      </div>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(request.status)}`}>
                        {getStatusEmoji(request.status)} {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <button className="btn-secondary w-full text-sm">View All Requests</button>
                </div>
              </motion.div>

              {/* Upcoming Events Card */}
              <motion.div 
                className="card p-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">Upcoming Events</h2>
                <div className="mt-4 space-y-3">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-md bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
                        <span className="text-primary-600 dark:text-primary-400 text-lg">📅</span>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{event.title}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{event.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Attendance Tips */}
            <motion.div 
              className="mt-6 card-glass p-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">Attendance Tips</h2>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white/50 dark:bg-gray-800/50">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
                      <span className="text-primary-600 dark:text-primary-400 text-lg">⏰</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white">Be Punctual</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Arrive 5 minutes before class starts</p>
                    </div>
                  </div>
                </div>
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white/50 dark:bg-gray-800/50">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
                      <span className="text-primary-600 dark:text-primary-400 text-lg">📱</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white">Use the App</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Mark attendance using the mobile app</p>
                    </div>
                  </div>
                </div>
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white/50 dark:bg-gray-800/50">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
                      <span className="text-primary-600 dark:text-primary-400 text-lg">📝</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white">Plan Ahead</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Request leaves at least 3 days in advance</p>
                    </div>
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

export default DashboardPage;