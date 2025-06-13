// Home.jsx
import React from 'react';
import ProfileBox from '../components/profilebox';
import Schedule from '../components/schedule';
import Goalanalyis from '../components/goal';
import Swp from '../components/SubProf';
import Onemoreday from '../components/oneMoreday'
import Encouragement from '../components/encourage'

const Home = () => {
  return (
    <>
    <div className="flex flex-row justify-end">
       <Onemoreday/>
   <Encouragement/>
  
   </div>
    <div className="flex flex-row gap-10">
      <ProfileBox />
      <div className="flex flex-col">
        <Schedule />
        <div className="flex flex-row gap-10  w-auto h-[80rem] mt-5">
          {/* subject profeciency  */}
          <Swp />     
          <Goalanalyis />
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
