import { Link} from "react-router-dom";

export default function Footer(){
    return(
        <>
            <footer className="mt-auto p-4 bg-white sm:p-6">
                <div className="md:flex md:justify-between"></div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-400 hidden sm:block sm:text-center font-thin font-cedarville">
                        I made this w/ React
                    </span>
                
                </div>
            </footer>
        </>
    )
}