import {FaLongArrowAltLeft} from 'react-icons/fa'
import {FaLongArrowAltRight} from 'react-icons/fa'
import { Link} from "react-router-dom";

export function Toggle(prevRoute, nextRoute, prevName, nextName){
    return(
        <>
            <div className='py-4 m-1 h-12 text-blue-600'>
                <div className='float-left'><FaLongArrowAltLeft className='float-left m-1'/> <Link className='float-right' to={prevRoute}>{prevName}</Link></div>
                <div className='float-right'><Link className='float-left' to={nextRoute}>{nextName}</Link> <FaLongArrowAltRight className='float-right m-1'/></div>
                
            </div>
        </>
    )
}