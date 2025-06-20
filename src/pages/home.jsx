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

  
 <div >
    <div className='absolute w-screen h-52 bg-blue-200 z-[0]'></div>

    {/* <div className='relative hidden xl:flex justify-between z-[2]'>
        <Onemoreday />
        <Encouragement />
  </div> */}
 </div>




  <div className="relative top-0 flex flex-row gap-10 z-[1]">
      <ProfileBox />
      <div className="relative flex flex-col z[1]">
        <Schedule />
        <div className="flex flex-row gap-10 w-auto h-[80rem] mt-5">
          {/* subject proficiency */}
          <Swp />
          <Goalanalyis />
        </div>
      </div>
  </div>
</>
  );
};

export default Home;
