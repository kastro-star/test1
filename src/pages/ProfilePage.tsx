import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MainLayout from '../components/layout/MainLayout';

const ProfilePage: React.FC = () => {
  // Dummy user data
  const [userData, setUserData] = useState({
    name: 'Alex Johnson',
    email: 'alex.johnson@university.edu',
    studentId: 'ST12345',
    department: 'Computer Science',
    year: '3rd Year',
    phone: '+1 (555) 123-4567',
    address: '123 Campus Drive, University City, CA 94720',
    bio: 'Computer Science student with interests in AI and web development. Active member of the coding club and hackathon participant.',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(userData);
  const [isSaving, setIsSaving] = useState(false);

  // Dummy attendance stats
  const attendanceStats = {
    totalDays: 145,
    presentDays: 135,
    absentDays: 3,
    leaveDays: 7,
    attendancePercentage: 93.1,
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      setUserData(formData);
      setIsEditing(false);
      setIsSaving(false);
    }, 1500);
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
            My Profile
          </motion.h1>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="py-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Profile Card */}
              <motion.div 
                className="lg:col-span-1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="card p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative">
                      <div className="h-32 w-32 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white text-4xl font-bold">
                        {userData.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-green-500 border-4 border-white dark:border-gray-800"></div>
                    </div>
                    
                    <h2 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">{userData.name}</h2>
                    <p className="text-gray-500 dark:text-gray-400">{userData.studentId}</p>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{userData.department} • {userData.year}</p>
                    
                    <div className="mt-6 w-full">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Attendance Rate</span>
                        <span className="text-sm font-medium text-primary-600 dark:text-primary-400">{attendanceStats.attendancePercentage}%</span>
                      </div>
                      <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full" 
                          style={{ width: `${attendanceStats.attendancePercentage}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="mt-6 grid grid-cols-3 gap-3 w-full">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">{attendanceStats.totalDays}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Total Days</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600 dark:text-green-400">{attendanceStats.presentDays}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Present</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-red-600 dark:text-red-400">{attendanceStats.absentDays}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Absent</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Profile Form */}
              <motion.div 
                className="lg:col-span-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="card p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                      {isEditing ? 'Edit Profile Information' : 'Profile Information'}
                    </h2>
                    {!isEditing && (
                      <button 
                        onClick={() => setIsEditing(true)}
                        className="btn-secondary text-sm px-4 py-2"
                      >
                        Edit Profile
                      </button>
                    )}
                  </div>
                  
                  {isEditing ? (
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Full Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50 transition-all duration-200"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50 transition-all duration-200"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="studentId" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Student ID
                          </label>
                          <input
                            type="text"
                            id="studentId"
                            name="studentId"
                            value={formData.studentId}
                            onChange={handleChange}
                            className="w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50 transition-all duration-200"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="department" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Department
                          </label>
                          <input
                            type="text"
                            id="department"
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            className="w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50 transition-all duration-200"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="year" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Year
                          </label>
                          <input
                            type="text"
                            id="year"
                            name="year"
                            value={formData.year}
                            onChange={handleChange}
                            className="w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50 transition-all duration-200"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Phone Number
                          </label>
                          <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50 transition-all duration-200"
                          />
                        </div>
                        
                        <div className="md:col-span-2">
                          <label htmlFor="address" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Address
                          </label>
                          <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50 transition-all duration-200"
                          />
                        </div>
                        
                        <div className="md:col-span-2">
                          <label htmlFor="bio" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Bio
                          </label>
                          <textarea
                            id="bio"
                            name="bio"
                            rows={4}
                            value={formData.bio}
                            onChange={handleChange}
                            className="w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50 transition-all duration-200"
                          />
                        </div>
                      </div>
                      
                      <div className="mt-6 flex justify-end space-x-3">
                        <button
                          type="button"
                          onClick={() => {
                            setFormData(userData);
                            setIsEditing(false);
                          }}
                          className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-200"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          disabled={isSaving}
                          className="btn-primary px-4 py-2"
                        >
                          {isSaving ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Saving...
                            </>
                          ) : 'Save Changes'}
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Full Name</h3>
                          <p className="mt-1 text-sm text-gray-900 dark:text-white">{userData.name}</p>
                        </div>
                        
                        <div>
                          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Email Address</h3>
                          <p className="mt-1 text-sm text-gray-900 dark:text-white">{userData.email}</p>
                        </div>
                        
                        <div>
                          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Student ID</h3>
                          <p className="mt-1 text-sm text-gray-900 dark:text-white">{userData.studentId}</p>
                        </div>
                        
                        <div>
                          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Department</h3>
                          <p className="mt-1 text-sm text-gray-900 dark:text-white">{userData.department}</p>
                        </div>
                        
                        <div>
                          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Year</h3>
                          <p className="mt-1 text-sm text-gray-900 dark:text-white">{userData.year}</p>
                        </div>
                        
                        <div>
                          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Phone Number</h3>
                          <p className="mt-1 text-sm text-gray-900 dark:text-white">{userData.phone}</p>
                        </div>
                        
                        <div className="md:col-span-2">
                          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Address</h3>
                          <p className="mt-1 text-sm text-gray-900 dark:text-white">{userData.address}</p>
                        </div>
                        
                        <div className="md:col-span-2">
                          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Bio</h3>
                          <p className="mt-1 text-sm text-gray-900 dark:text-white">{userData.bio}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* QR Code Card */}
                <motion.div 
                  className="card p-6 mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-white">Attendance QR Code</h2>
                    <button className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 transition-colors duration-200">
                      Download
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-center py-4">
                    <div className="h-48 w-48 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm flex items-center justify-center">
                      <div className="h-40 w-40 bg-[repeating-linear-gradient(45deg,#6366f1_25%,transparent_25%,transparent_75%,#6366f1_75%,#6366f1),repeating-linear-gradient(45deg,#6366f1_25%,#ffffff_25%,#ffffff_75%,#6366f1_75%,#6366f1)] bg-[length:20px_20px] bg-[position:0_0,10px_10px] rounded-md relative">
                        <div className="absolute inset-4 bg-white flex items-center justify-center">
                          <div className="text-xs text-center text-gray-500">Scan for attendance</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-center text-gray-500 dark:text-gray-400 mt-2">
                    Use this QR code to quickly mark your attendance
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProfilePage;