import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import { Outlet } from 'react-router-dom'
import Leftsidebar from '../../components/sidebar/leftsidebar'
import Rightsidebar from '../../components/sidebar/rightsidebar'

const Primarylayout = () => {
  return (
    <>
      <Header/>
      <div className='flex w-full'>
        <Leftsidebar/>
        <div className="grow h-[calc(100vh-65px)] overflow-auto flex w-[80%]">
          <Outlet/>
          <Rightsidebar/>
        </div>
      </div>
      {/* <Footer/> */}
    </>
  )
}

export default Primarylayout
