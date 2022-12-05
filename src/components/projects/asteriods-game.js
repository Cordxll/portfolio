import vid from '../../assets/asteriods.mp4'
export default function AsteriodsGame(){
    return(
        <>
        <div className='sm:px-32 md:px-40 lg:px-52'>
            <h1 className='font-bold text-4xl pt-4 pb-2'>Asteriods Game</h1>
            <p className='py-2'>It's bassically the atari version of asteriods built with html css and javascript.
                The noticable feature that I implemented was the ability for the asteriods to get smarter
                as the game persistent via recurrent neural network. 
                <span>
                    <a href="https://cordxll.github.io/asteriods/" target="_blank" rel="noreferrer" className='text-blue-600'> Check It Out!</a>
                </span>
            </p>
            
            <video className='h-4/6' controls>
                <source src={vid} type="video/mp4"/>
            </video>
        </div>
        </>
    )
}