import React from "react";
import { Link } from "react-router-dom";
// import { GlobalContext } from "../../context/GlobalState";
import { SlSocialSpotify } from "react-icons/sl";
import { AiOutlineSearch } from "react-icons/ai";
import { BiHomeCircle, BiMessageSquareDetail } from "react-icons/bi";
import { LuHome } from "react-icons/lu";
import { IoIosContacts } from "react-icons/io";
import { IoNotificationsOffCircleOutline } from "react-icons/io5";


const Header = () => {
  return (
    <nav class="bg-white-500 p-4 h-[65px]">
    <div class="container ms-auto flex justify-between items-center text-black pb-2">
        <div class="text-black text-xl font-header-family flex items-center">
            <Link to="/home" className="flex text-black">
                <SlSocialSpotify className="text-3xl pe-1 text-black" />
                Connectify
            </Link>
            <div className="relative inline-block">
                <input
                    className="px-2 pl-8 rounded-lg text-sm focus:outline-none ms-2 w-[300px] focus:w-[400px] transition-all duration-300 h-8 bg-slate-100"
                    placeholder="Search people here"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <AiOutlineSearch className="h-5 w-5 text-gray-500" />
                </div>
            </div>
        </div>
        <ul class="flex space-x-4 font-header-family text-sm items-center text-gray-700">
            <li>
                <Link to="/home" class="hover:text-black transition duration-300 flex flex-col items-center">
                    <LuHome className="text-lg" />
                    <span>Home</span>
                </Link>
            </li>
            <li>
                <Link to="about" class="hover:text-black transition duration-300 flex flex-col items-center">
                    <IoIosContacts className="text-xl" />
                    <span>Friends</span>
                </Link>
            </li>
            <li>
                <Link to="about" class="hover:text-black transition duration-300 flex flex-col items-center">
                    <BiMessageSquareDetail className="text-xl" />
                    <span>Messages</span>
                </Link>
            </li>
            <li>
                <Link to="about" class="hover:text-black transition duration-300 flex flex-col items-center">
                    <IoNotificationsOffCircleOutline className="text-xl" />
                    <span>Notifications</span>
                </Link>
            </li>
            <li>
                <Link to="about" class="hover:text-black transition duration-300 flex flex-col items-center">
                    <img
                        src="https://images.unsplash.com/photo-1617077644557-64be144aa306?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                        class="object-cover bg-yellow-500 rounded-full w-8 h-8"
                    />
                </Link>
            </li>
        </ul>
    </div>
</nav>

  )
}

export default Header
