import {FaLongArrowAltRight} from 'react-icons/fa'
import { Link} from "react-router-dom";

export function Next(link,name){
    return (
        <>
        <Link to={link} className='grid grid-cols-2  text-blue-600'>
            <FaLongArrowAltRight className='mt-1'/>
            <span className='pr-1'>{name}</span>
        </Link>
        </>
    )
}