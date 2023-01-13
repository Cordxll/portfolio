import {FaEnvelope, FaKaggle, FaLinkedin, FaGithub} from 'react-icons/fa'
import headshot from '../assets/IMG_1783.jpeg'
import { Link } from 'react-router-dom'


export default function Home(){

    

    function Pics(){
        return(
            
            <div className="hidden sm:block">
                    <div className='flex justify-center relative'>
                        <div className='absolute top-0 left-0 text-sm text-gray-300 font-thin font-cedarville -rotate-45 my-auto'>&#60;img/&#62;</div>
                        <img className="rounded-full shadow-xl p-4" src={headshot}  alt="Handsome Young Man"/>    
                    </div>
                    <div className="relative flex justify-center gap-10 py-4">
                        <span className='absolute left-0 top-0 text-sm text-gray-300 font-thin font-cedarville rotate-12'>&#60;a&#62;</span>
                        <span className='absolute bottom-0 right-0 text-sm text-gray-300 font-thin font-cedarville -rotate-12'>&#60;/a&#62;</span>
                        <Link to="/contact" className="hover:text-blue-200"><FaEnvelope size={24}/></Link>
                        <a href="https://www.linkedin.com/in/cordell-browne-b51429184/" target="_blank" rel="noreferrer"className="hover:text-blue-200"><FaLinkedin size={22}/></a>
                        <a href="https://github.com/Cordxll" target="_blank" rel="noreferrer" className="hover:text-blue-200"> <FaGithub size={22}/></a>
                        <a href='https://www.kaggle.com/cordellbrowne'target="_blank" rel="noreferrer"  className="hover:text-sky-300"><FaKaggle size={20}/></a>
                    </div>
                </div> 
            
        )
    }
    
    function Bouncy(word){
        return(
            <div className='p-0 sm:p-3 sm:pl-8'>
                {word.split('').map((x) => (
                    <span className='animate-text bg-gradient-to-r from-blue-400 via-violet-500 to-red-400 bg-clip-text text-transparent text-2xl sm:text-5xl transition-opacity hover:opacity-0 ease-out duration-300'>{x}</span>
                ))}
            </div>
        )
    }

    
    function AboutMe(){
        return(
        <>
        <div>  
            <div className="font-mono text-4xl font-bold p-8 ">
                <div className='text-sm text-gray-300 font-thin font-cedarville'>&#60;h1&#62;</div>
                {Bouncy("Hello 👋")}
                {Bouncy("I'm Cordell,")}
                {Bouncy("A Software Engineer.")}
                <div className='text-sm text-gray-300 font-thin font-cedarville'>&#60;/h1&#62;</div>
                <div className='relative m-0 sm:ml-4 p-2 sm:p-4 w-fit'>
                    <span className='absolute right-0 text-sm text-gray-300 font-thin font-cedarville -rotate-12'>&#60;/p&#62;</span>
                    <span className='text-gray-500 font-light text-xs sm:text-lg p-1 '>Full Stack Developer/ Biomed Grad</span>
                    <span className='absolute  left-0 bottom-2 text-xs text-gray-300 font-thin font-cedarville rotate-12'>&#60;p&#62;</span>
                </div>   
            </div>
        </div>
        </>
        )
    }
     
    return(
        <div className='relative'>
            <div className='absolute top-0 left-4 text-sm text-gray-300 font-cedarville font-alex-brush'>&#60;html/&#62;</div>
            <div className='h-4 sm:h-16'/>
            <div className='p-2 flex justify-center transition-opacity duration-1000 ease-in animate-fade'>
                <div className='relative '>
                    <div>{AboutMe()}</div>
                    <div className='absolute top-0 left-0 text-sm text-gray-300 font-thin font-cedarville '>&#60;body&#62;</div>
                    <div className='absolute bottom-0 left-0 text-sm text-gray-300 font-cedarville'>&#60;body&#62;</div>
                </div>
                {Pics()}
            </div>
        </div>
    )
}