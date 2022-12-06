import { Link} from "react-router-dom";
import GoBack from './buttons/GoBack';
import {Prev} from './buttons/Prev'

export default function Dev10Capstone(){
    return(
        <>
        <div className='sm:px-32 md:px-40 lg:px-52'>
            <GoBack/>
            <h1 className='font-bold text-4xl pt-4 pb-2'>Dev-10 Capstone: Ven-u The Wedding Venue App</h1>
            <p className='py-2'>Currently In Progress.
                <span>
                    <Link to="/blog" className='text-blue-600'> Check out one of my articles</Link>
                </span>
            </p>
            
            <video height="270" controls autoplay loop playsinline>
                <source src="" type="video/mp4"/>
            </video>
            {Prev('/projects/market-predictor', "Market Forecasting")}
        </div>
        </>
    )
}