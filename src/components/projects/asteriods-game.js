import vid from '../../assets/asteriods.mp4'
import GoBack from './buttons/GoBack'
import {Toggle} from './Toggle'

export default function AsteriodsGame(){
    return(
        <>
        <div className='sm:px-32 md:px-40 lg:px-52'>
            <GoBack/>
            <h1 className='font-bold text-4xl pt-4 pb-2'>Asteriods Game</h1>
            <p className='py-2'>It's bassically the atari version of asteriods built with html css and javascript.
                The noticable feature that I implemented was the ability for the asteriods to get smarter
                as the game persistent via recurrent neural network. 
                <span>
                    <a href="https://cordxll.github.io/asteriods/" target="_blank" rel="noreferrer" className='text-blue-600'> Check It Out!</a>
                </span>
            </p>
            
            <video  height="270" controls autoplay loop >
                <source src={vid} type="video/mp4"/>
            </video>
            {Toggle("/projects/this-portfolio","/projects/market-predictor", "This Portfolio","Market Forecasting")}
            
        </div>
        </>
    )
}