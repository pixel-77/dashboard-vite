import React from 'react'
import ProfileBox from './components/profilebox'
import Navbar from './components/navbar'
import Schedule from './components/schedule'
import Goalanalyis from './components/goal'
import Swp from './components/SubProf'


const App=()=>{
    return(
        <div class="">
        <Navbar/>
            <div class="flex flex-row gap-20">
                <ProfileBox/>
                <div class="flex flex-col">
                    <Schedule/>
                    <div class="flex flex-row gap-36 outline rounded-md w-5xl h-80px mt-5">
                        <Swp/>
                        <Goalanalyis/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default App