import { Link} from "react-router-dom";
import {FaSearch} from "react-icons/fa"
import { useState } from "react";

export default function NavBar(){
    const [isHidden, setIsHidden] = useState(true);
    return(
        <div className="bg-white px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-gray-200">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link to="/" className="flex items-center">
                    <span className="hidden sm:flex self-center text-xl font-semibold whitespace-nowrap order-1">Cordell's Portfolio</span>
                </Link>
                <div className="justify-between items-center w-auto flex order-2 mr-24" id="navbar-sticky">
                    <ul className="flex p-4   rounded-lg  flex-row space-x-8 mt-0 text-sm font-medium border-0">
                        <li>
                        <Link to="/" className="block sm:py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Home</Link>
                        </li>
                        <li>
                        <Link to="/projects" className="block sm:py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Projects</Link>
                        </li>
                        <li>
                        <Link to="/blog" className="block sm:py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Blog</Link>
                        </li>
                    </ul>
                </div>
                <button 
                className={`order-3 hidden md:flex hover:text-blue-600 rounded-full transition-all ease-in-out duration-1000 justify-between
                ${!isHidden ? "text-blue-600 animate-pulse border border-gray-500 p-3 w-2/6 " : ""}`}
                onFocus={() => {setIsHidden(false)}}
                >
                    <input className={`${!isHidden ? "" : "hidden"} border-l w-5/6 focus:outline-none`} 
                    onBlur={() => {setIsHidden(true)}}
                    placeholder="Not Functional"
                    />
                    <FaSearch type="button" className="focus:animate-pulse m-1" />
                </button>
            </div>
        </div>
    )
}