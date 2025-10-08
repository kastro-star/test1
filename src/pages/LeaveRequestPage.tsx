import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MainLayout from '../components/layout/MainLayout';

const LeaveRequestPage: React.FC = () => {
  const [formData, setFormData] = useState({
    startDate: '',
    endDate: '',
    leaveType: 'sick',
    reason: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Dummy leave request data
  const leaveRequests = [
    {
      id: 1,
      startDate: '2025-10-15',
      endDate: '2025-10-16',
      leaveType: 'Sick Leave',
      reason: 'Fever and cold',
      status: 'approved',
      appliedOn: '2025-10-10',
    },
    {
      id: 2,
      startDate: '2025-11-05',
      endDate: '2025-11-07',
      leaveType: 'Casual Leave',
      reason: 'Family function',
      status: 'pending',
      appliedOn: '2025-10-20',
    },
    {
      id: 3,
      startDate: '2025-09-25',
      endDate: '2025-09-25',
      leaveType: 'Half Day',
      reason: 'Doctor appointment',
      status: 'rejected',
      appliedOn: '2025-09-20',
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      
      // Reset form
      setFormData({
        startDate: '',
        endDate: '',
        leaveType: 'sick',
        reason: '',
      });
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }, 1500);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return (
          <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
            Approved 🟢
          </span>
        );
      case 'pending':
        return (
          <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
            Pending 🟡
          </span>
        );
      case 'rejected':
        return (
          <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">
            Rejected 🔴
          </span>
        );
      default:
        return null;
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
            Leave Request
          </motion.h1>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="py-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Leave Request Form */}
              <motion.div 
                className="lg:col-span-1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="card p-6">
                  <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Submit Leave Request</h2>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Start Date
                        </label>
                        <input
                          type="date"
                          id="startDate"
                          name="startDate"
                          value={formData.startDate}
                          onChange={handleChange}
                          required
                          className="w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50 transition-all duration-200"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          End Date
                        </label>
                        <input
                          type="date"
                          id="endDate"
                          name="endDate"
                          value={formData.endDate}
                          onChange={handleChange}
                          required
                          className="w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50 transition-all duration-200"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="leaveType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Leave Type
                        </label>
                        <select
                          id="leaveType"
                          name="leaveType"
                          value={formData.leaveType}
                          onChange={handleChange}
                          required
                          className="w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50 transition-all duration-200"
                        >
                          <option value="sick">Sick Leave</option>
                          <option value="casual">Casual Leave</option>
                          <option value="vacation">Vacation</option>
                          <option value="half-day">Half Day</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="reason" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Reason
                        </label>
                        <textarea
                          id="reason"
                          name="reason"
                          rows={4}
                          value={formData.reason}
                          onChange={handleChange}
                          required
                          className="w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50 transition-all duration-200"
                          placeholder="Please provide a detailed reason for your leave request..."
                        />
                      </div>
                      
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full btn-primary flex items-center justify-center"
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Processing...
                            </>
                          ) : 'Submit Request'}
                        </button>
                      </div>
                    </div>
                  </form>
                  
                  {/* Success Message */}
                  {showSuccess && (
                    <motion.div 
                      className="mt-4 p-3 bg-green-100 dark:bg-green-900 rounded-md flex items-center"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    >
                      <svg className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm font-medium text-green-800 dark:text-green-200">Request Sent ✅</span>
                    </motion.div>
                  )}
                </div>
              </motion.div>
              
              {/* Leave Requests List */}
              <motion.div 
                className="lg:col-span-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="card p-6">
                  <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Recent Leave Requests</h2>
                  
                  <div className="overflow-hidden">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700">
                          <thead>
                            <tr>
                              <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-white sm:pl-0">
                                Date
                              </th>
                              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white">
                                Type
                              </th>
                              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white">
                                Reason
                              </th>
                              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white">
                                Status
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                            {leaveRequests.map((request) => (
                              <motion.tr 
                                key={request.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3, delay: 0.1 * request.id }}
                                whileHover={{ backgroundColor: 'rgba(var(--color-primary-500), 0.05)' }}
                                className="cursor-pointer"
                              >
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
                                  <div className="font-medium text-gray-900 dark:text-white">
                                    {request.startDate === request.endDate 
                                      ? request.startDate
                                      : `${request.startDate} - ${request.endDate}`}
                                  </div>
                                  <div className="text-gray-500 dark:text-gray-400 text-xs">Applied: {request.appliedOn}</div>
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 dark:text-gray-300">
                                  {request.leaveType}
                                </td>
                                <td className="px-3 py-4 text-sm text-gray-700 dark:text-gray-300 max-w-xs truncate">
                                  {request.reason}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm">
                                  {getStatusBadge(request.status)}
                                </td>
                              </motion.tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Leave Balance Card */}
                <motion.div 
                  className="card p-6 mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Leave Balance</h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-primary-50 dark:bg-primary-900/30 rounded-lg p-4">
                      <div className="text-primary-700 dark:text-primary-300 text-sm font-medium">Sick Leave</div>
                      <div className="mt-1 flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900 dark:text-white">8</div>
                        <div className="ml-1 text-sm text-gray-500 dark:text-gray-400">/ 12 days</div>
                      </div>
                      <div className="mt-2 h-1.5 w-full bg-primary-200 dark:bg-primary-700 rounded-full overflow-hidden">
                        <div className="bg-primary-600 dark:bg-primary-400 h-1.5 rounded-full" style={{ width: '66.7%' }}></div>
                      </div>
                    </div>
                    
                    <div className="bg-secondary-50 dark:bg-secondary-900/30 rounded-lg p-4">
                      <div className="text-secondary-700 dark:text-secondary-300 text-sm font-medium">Casual Leave</div>
                      <div className="mt-1 flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900 dark:text-white">5</div>
                        <div className="ml-1 text-sm text-gray-500 dark:text-gray-400">/ 6 days</div>
                      </div>
                      <div className="mt-2 h-1.5 w-full bg-secondary-200 dark:bg-secondary-700 rounded-full overflow-hidden">
                        <div className="bg-secondary-600 dark:bg-secondary-400 h-1.5 rounded-full" style={{ width: '83.3%' }}></div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                      <div className="text-gray-700 dark:text-gray-300 text-sm font-medium">Vacation</div>
                      <div className="mt-1 flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900 dark:text-white">15</div>
                        <div className="ml-1 text-sm text-gray-500 dark:text-gray-400">/ 15 days</div>
                      </div>
                      <div className="mt-2 h-1.5 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div className="bg-gray-600 dark:bg-gray-400 h-1.5 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default LeaveRequestPage;