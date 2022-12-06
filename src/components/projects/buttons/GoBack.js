import {FaLongArrowAltLeft} from 'react-icons/fa'
import { Link} from "react-router-dom";

export default function GoBack(){
    return (
        <>
        <Link to="/projects"className='grid grid-cols-2 w-12 text-blue-600'>
            <FaLongArrowAltLeft className='mt-1'/>
            <span className=''>Projects</span>
        </Link>
        </>
    )
}