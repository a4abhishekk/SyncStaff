import React, { useContext, useEffect } from 'react';
import Header from '../../other/Header';
import TaskListNumbers from '../../other/TaskListNumbers';
import TaskList from '../TaskList/TaskList';
import { AuthContext } from '../../context/AuthProvider';

const EmployeeDashboard = ({ data, changeUser }) => {
  const [userData, setUserData] = useContext(AuthContext);

  useEffect(() => {
    if (userData) {
      const updatedEmployee = userData.find(emp => emp.id === data.id);
      if (updatedEmployee) {
        const updatedData = { role: 'employee', data: updatedEmployee };
        localStorage.setItem('loggedInUser', JSON.stringify(updatedData));
      }
    }
  }, [userData, data.id]);

  const currentEmployeeData = userData?.find(emp => emp.id === data.id) || data;

  return (
    <div className='min-h-screen bg-gradient-to-r from-teal-600 to-teal-500 p-6 md:p-10'>
      <div className='bg-white shadow-2xl rounded-3xl p-8 md:p-10'>
        <Header data={currentEmployeeData} changeUser={changeUser} />
        <div className='mt-8'>
          <TaskListNumbers data={currentEmployeeData} />
        </div>
        <div className='mt-8'>
          <TaskList data={currentEmployeeData} />
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
