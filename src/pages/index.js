import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import LandingSection from '../components/LandingSection';
import InfoSection from '../components/InfoSection';
import { homeObjone, homeObjtwo, homeObjthree } from '../components/InfoSection/Data';
import People from '../components/PeopleSection';


const Home = () => {

    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
    }



  return (

    <>
    <Sidebar open={open} toggle = {toggle}/>
    <Navbar toggle = {toggle} />
    <LandingSection/>
    <InfoSection {...homeObjone} />
    <InfoSection {...homeObjtwo} />
    <People/>
    <InfoSection {...homeObjthree} />
    </>
    
  );
}

export default Home