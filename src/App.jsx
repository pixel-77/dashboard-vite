import React from 'react'
import ProfileBox from './components/profilebox'
import Navbar from './components/navbar'
import Schedule from './components/schedule'


const App=()=>{
    return(
        <div>
        <Navbar/>
        <ProfileBox/>
        <Schedule/>
        </div>
    )
}
export default App