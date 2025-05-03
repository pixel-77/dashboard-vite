// Dashboard.jsx
import React from 'react';
import ProfileBox from './profilebox';
import Schedule from './schedule';
import Goalanalyis from './goal';
import Swp from './SubProf';

const Dashboard = () => {
  return (
    <div className="flex flex-row gap-10">
      <ProfileBox />
      <div className="flex flex-col">
        <Schedule />
        <div className="flex flex-row gap-10  w-auto h-[80rem] mt-5">
          <Swp />
          <Goalanalyis />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
