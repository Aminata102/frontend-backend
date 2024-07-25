import React from "react";
import { FaHome, FaRegFile } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import y2 from '../images/y2.png';
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
    return (
        <div className="w-64 bg-gray-800 fixed h-full">
            <div className="my-2 mb-4">
                <h1 className="text-2xl text-white font-bold">RED PRODUCT</h1>
            </div>
            <p  className=" text-white ">Principal</p>

            <ul className="mt-3 text-blue-800 font-bold">
                <li className="mb-2 rounded hover:shadow hover:bg-white py-2">
                    <NavLink to="/" className="px-3" activeClassName="text-yellow-500">
                        <FaHome className='inline-block w-6 h-6 mr-2 -mt-1 text-white'></FaHome>
                        Dashboard
                    </NavLink>
                </li>
                <li className="mb-2 rounded hover:shadow hover:bg-white py-2">
                    <NavLink to="/hotels" className="px-3" activeClassName="text-yellow-500">
                        <FaRegFile className='inline-block w-6 h-6 mr-2 -mt-1 text-black'></FaRegFile>
                        Listes des Hôtels
                    </NavLink>
                </li>
            </ul>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <hr className="mt-10"/>
            <div className="flex">
                <div>
                    <img src={y2} className='w-6 h-6 mt-1 '/>
                </div>
                <div>
                <h3 className=" text-white  ml-2">Mouhamed Badiane</h3>
                <div className="flex items-center  ml-2">
                <FontAwesomeIcon className="w-2" icon={faCircle} style={{color: "#63E6BE",}} />
                <h5 className=" mb-1 ml-2 text-white">en ligne</h5>
                </div>
                </div>
          
          </div>
        </div>
    )
}

export default Sidebar;
