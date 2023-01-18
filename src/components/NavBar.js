import { Link} from "react-router-dom";

export default function NavBar(){
    return(
        <div className="bg-white px-2 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-gray-200 bg-opacity-90 shadow">
            <div className="flex flex-wrap justify-between mx-auto">
                <Link to="/" className="flex items-center">
                    <span className="hidden sm:flex self-center text-3xl font-semibold whitespace-nowrap order-1 font-nabla">Cordell</span>
                </Link>
                <div className="justify-between items-center w-auto flex" id="navbar-sticky">
                    <ul className="flex p-4  space-x-4 mt-0 text-sm font-medium border-0 font-changa">
                        <li>
                            <Link to="/" className="block sm:py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Home</Link>
                        </li>
                        <li>
                            <Link to="/projects" className="block sm:py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Projects</Link>
                        </li>
                        <li>
                            <Link to="/blog" className="block sm:py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Blog</Link>
                        </li>
                        <li>
                            <Link className="px-4 py-1 bg-black text-white hover:bg-gray-700 rounded-full" to='/Contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}