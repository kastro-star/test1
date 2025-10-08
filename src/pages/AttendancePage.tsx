import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MainLayout from '../components/layout/MainLayout';

const AttendancePage: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showAttendanceModal, setShowAttendanceModal] = useState(false);
  
  // Dummy attendance data
  const attendanceData = {
    '2023-10-01': 'present',
    '2023-10-02': 'present',
    '2023-10-03': 'present',
    '2023-10-04': 'weekend',
    '2023-10-05': 'weekend',
    '2023-10-06': 'present',
    '2023-10-07': 'present',
    '2023-10-08': 'absent',
    '2023-10-09': 'present',
    '2023-10-10': 'present',
    '2023-10-11': 'weekend',
    '2023-10-12': 'weekend',
    '2023-10-13': 'leave',
    '2023-10-14': 'leave',
    '2023-10-15': 'present',
  };

  const renderCalendarHeader = () => {
    const monthYear = currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' });
    
    return (
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{monthYear}</h2>
        <div className="flex space-x-2">
          <button
            onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 dark:text-gray-300" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentMonth(new Date())}
            className="px-3 py-1 text-sm rounded-md bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300 hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors duration-200"
          >
            Today
          </button>
          <button
            onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 dark:text-gray-300" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    );
  };

  const renderDaysOfWeek = () => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    return (
      <div className="grid grid-cols-7 gap-1 mb-2">
        {days.map((day) => (
          <div key={day} className="text-center text-sm font-medium text-gray-500 dark:text-gray-400 py-2">
            {day}
          </div>
        ))}
      </div>
    );
  };

  const renderCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    // First day of the month
    const firstDay = new Date(year, month, 1);
    const firstDayOfWeek = firstDay.getDay();
    
    // Last day of the month
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    
    // Create array of calendar days including empty cells for previous month days
    const calendarDays = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfWeek; i++) {
      calendarDays.push(null);
    }
    
    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      calendarDays.push(new Date(year, month, day));
    }
    
    return (
      <div className="grid grid-cols-7 gap-1">
        {calendarDays.map((date, index) => {
          if (!date) {
            return <div key={`empty-${index}`} className="h-24 bg-gray-50 dark:bg-gray-800/30 rounded-lg"></div>;
          }
          
          const dateString = date.toISOString().split('T')[0];
          const status = attendanceData[dateString as keyof typeof attendanceData] || '';
          const isWeekend = date.getDay() === 0 || date.getDay() === 6;
          const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
          
          let statusClass = '';
          let statusText = '';
          
          switch (status) {
            case 'present':
              statusClass = 'bg-green-100 dark:bg-green-900/30 border-green-300 dark:border-green-700';
              statusText = 'Present';
              break;
            case 'absent':
              statusClass = 'bg-red-100 dark:bg-red-900/30 border-red-300 dark:border-red-700';
              statusText = 'Absent';
              break;
            case 'leave':
              statusClass = 'bg-yellow-100 dark:bg-yellow-900/30 border-yellow-300 dark:border-yellow-700';
              statusText = 'Leave';
              break;
            case 'weekend':
              statusClass = 'bg-gray-100 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700';
              statusText = 'Weekend';
              break;
            default:
              statusClass = isWeekend ? 'bg-gray-100 dark:bg-gray-800/50' : 'bg-white dark:bg-gray-800';
              statusText = '';
          }
          
          if (isSelected) {
            statusClass += ' ring-2 ring-primary-500 dark:ring-primary-400';
          }
          
          return (
            <div
              key={date.toString()}
              className={`h-24 p-2 rounded-lg border ${statusClass} transition-all duration-300 hover:shadow-md cursor-pointer group`}
              onClick={() => setSelectedDate(date)}
            >
              <div className="flex justify-between items-start">
                <span className={`text-sm font-medium ${isWeekend ? 'text-gray-400 dark:text-gray-500' : 'text-gray-700 dark:text-gray-300'}`}>
                  {date.getDate()}
                </span>
                {status && (
                  <span className="text-xs px-1.5 py-0.5 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                    {status === 'present' && '✅'}
                    {status === 'absent' && '❌'}
                    {status === 'leave' && '🌴'}
                  </span>
                )}
              </div>
              {status && (
                <div className="mt-2 text-xs font-medium text-gray-600 dark:text-gray-400">
                  {statusText}
                </div>
              )}
              <div className="absolute inset-0 bg-primary-500/10 dark:bg-primary-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          );
        })}
      </div>
    );
  };

  const handleMarkAttendance = () => {
    setShowAttendanceModal(true);
    
    // Simulate attendance marking with animation
    setTimeout(() => {
      setShowAttendanceModal(false);
    }, 2000);
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
            Attendance Calendar
          </motion.h1>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="py-4">
            <motion.div 
              className="card p-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {renderCalendarHeader()}
              {renderDaysOfWeek()}
              {renderCalendarDays()}
            </motion.div>
            
            <motion.div 
              className="mt-6 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <button 
                onClick={handleMarkAttendance}
                className="btn-primary animate-glow flex items-center space-x-2"
              >
                <span>📅 Mark Attendance</span>
              </button>
            </motion.div>
            
            {/* Attendance Summary */}
            <motion.div 
              className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="card p-4 flex items-center">
                <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                  <span className="text-green-600 dark:text-green-400 text-lg">✅</span>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Present Days</p>
                  <p className="text-lg font-semibold text-green-600 dark:text-green-400">12</p>
                </div>
              </div>
              <div className="card p-4 flex items-center">
                <div className="h-10 w-10 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center">
                  <span className="text-red-600 dark:text-red-400 text-lg">❌</span>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Absent Days</p>
                  <p className="text-lg font-semibold text-red-600 dark:text-red-400">1</p>
                </div>
              </div>
              <div className="card p-4 flex items-center">
                <div className="h-10 w-10 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center">
                  <span className="text-yellow-600 dark:text-yellow-400 text-lg">🌴</span>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Leave Days</p>
                  <p className="text-lg font-semibold text-yellow-600 dark:text-yellow-400">2</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Attendance Marking Modal */}
      {showAttendanceModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
          <motion.div 
            className="card-glass p-6 max-w-sm w-full relative z-10"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 dark:bg-primary-900">
                <svg className="h-10 w-10 text-primary-600 dark:text-primary-400 animate-pulse" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">Marking Attendance...</h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Please wait while we process your attendance for today.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </MainLayout>
  );
};

export default AttendancePage;