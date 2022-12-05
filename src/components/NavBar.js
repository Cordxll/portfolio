import { Link} from "react-router-dom";

export default function NavBar(){
    return(
        <div className="bg-white px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-gray-200">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link to="/" className="flex items-center">
                    <span className="self-center text-xl font-semibold whitespace-nowrap">Cordell's Portfolio</span>
                </Link>
                <div className="flex md:order-2">
                    
                </div>
                <div className="justify-between items-center w-full flex w-auto order-1 mr-24" id="navbar-sticky">
                    <ul className="flex p-4   rounded-lg  flex-row space-x-8 mt-0 text-sm font-medium border-0">
                        <li>
                        <Link to="/" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Home</Link>
                        </li>
                        <li>
                        <Link to="/projects" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Projects</Link>
                        </li>
                        <li>
                        <Link to="/blog" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Blog</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}