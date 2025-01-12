import React from 'react';
import Header from '../../other/Header';
import CreateTask from '../../other/CreateTask';
import AllTask from '../../other/AllTask';

const AdminDashboard = ({ changeUser }) => {
    return (
        <div className='min-h-screen bg-gradient-to-r from-teal-600 to-teal-500 p-6 md:p-10'>
            <div className='bg-white shadow-2xl rounded-3xl p-8 md:p-10'>
                <Header changeUser={changeUser} />
                <div className='mt-8'>
                    <CreateTask />
                </div>
                <div className='mt-8'>
                    <AllTask />
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
