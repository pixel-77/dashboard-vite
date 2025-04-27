// Dashboard.jsx
import React from 'react';
import ProfileBox from './profilebox';
import Schedule from './schedule';
import Goalanalyis from './goal';
import Swp from './SubProf';

const Dashboard = () => {
  return (
    <div className="flex flex-row gap-20">
      <ProfileBox />
      <div className="flex flex-col">
        <Schedule />
        <div className="flex flex-row gap-36 outline rounded-md w-[80rem] h-[80rem] mt-5">
          <Swp />
          <Goalanalyis />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
