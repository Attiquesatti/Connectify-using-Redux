import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import { Outlet } from 'react-router-dom'
// import Leftsidebar from '../../components/sidebar/leftsidebar'
import Rightsidebar from '../../components/sidebar/rightsidebar'

const Secondarylayout = () => {
  return (
    <>
      <Header/>
      <div className='flex'>
        {/* <Leftsidebar/> */}
        <Outlet/>
        <Rightsidebar/>
      </div>
      <Footer/>
    </>
  )
}

export default Secondarylayout
