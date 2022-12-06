import {FaLongArrowAltLeft} from 'react-icons/fa'
import { Link} from "react-router-dom";

export function Prev(link,name){
    return (
        <>
        <Link to={link} className='grid grid-cols-2 gap-0 text-blue-600 w-40'>
            <div className='mt-1'>
                <FaLongArrowAltLeft />
            </div>
            <div>
            <span className='whitespace-nowrap'>{name}</span>
            </div>
        </Link>
        </>
    )
}