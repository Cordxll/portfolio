import {FaKaggle, FaLinkedin, FaGithub, FaExternalLinkAlt} from 'react-icons/fa'
import {MdOutlineIosShare} from 'react-icons/md'
import {HiArrowRight} from 'react-icons/hi'
import headshot from '../assets/IMG_1783.jpeg'
import myGif from '../assets/man-technologist-dark-skin-tone_1f468-1f3ff-200d-1f4bb.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'


export default function Home(){

    const [hovering, isHovering] = useState("");
    
    function Bouncy(word){
        return(
            <div className=''>
                {word.split('').map((x) => (
                    <span className='animate-text bg-gradient-to-r from-violet-400 via-blue-200 to-sky-500 bg-clip-text text-transparent transition-opacity hover:opacity-0 ease-out duration-300 font-serif'>{x}</span>
                ))}
            </div>
        )
    }

    function left(){
        return(
            <div className='order-1 text-center sm:text-left'>
                <div className=''>
                    <div className='text-2xl sm:text-5xl font-semibold py-1'>{Bouncy("Cordell Browne")}</div>
                    <div className='text-gray-600 text-lg sm:text-4xl font-light py-1'>Full Stack Developer</div>
                </div>
                <p className='text-slate-600 font-normal sm:font-thin text-md sm:text-xl py-2 max-w-lg'>
                    I am a creative developer with interest in many aspects of software engineering. 
                </p>
                <div className='flex py-8 gap-6 text-xl'>
                    <Link className='flex p-1 px-4 bg-black text-white rounded-full shadow hover:ring ring-offset-2 ring-black' to="/projects">Projects<HiArrowRight className='mt-1 ml-1'/></Link>
                    <a className='flex p-1 px-4 border rounded-full shadow hover:ring ring-offset-2' href="https://docs.google.com/document/d/e/2PACX-1vTMuGMryFF2kDofdF5HclP26gF9PQuk1OpEJ4-S7tDfvn7muP9q6msRlH9qdAm6Wg/pub" target="_blank" rel="noreferrer">Resume<FaExternalLinkAlt className='mt-1 ml-2 text-lg'/></a>
                </div>
            </div>
        )
    }

    function right(){
        return(
            <div className='mx-auto order-2 w-full sm:w-auto'>
                <img 
                src={myGif}
                className='w-3/5 sm:w-full mx-auto'
                alt='Handsome Young Man'
                />
            </div>
        )
    }

    function scroll(){
        return(
            <div className='w-fit absolute mx-auto bottom-0 inset-x-0 sm:block hidden'>
                <div className='animate-bounce text-gray-300 font-changa'>scroll</div>
                <div className='h-40 w-0.5 mx-auto bg-gray-300 rounded-full'></div>
            </div>
        )
    }

    function chooseIcon(name){
        switch(name){
            case "Github" :
                return(<FaGithub/>)
            case "Linkedin":
                return(<FaLinkedin/>)
            case "Kaggle":
                return(<FaKaggle/>)
            default:
                return(<>???</>)
        }
    }

    function myLinks(){
        return(
            <div className='w-5/6 sm:w-3/5 my-auto'>
                <div className='flex justify-center w-full text-center content-center'>
                    <div className='m-4 text-xl font-semibold'>
                    <img className="rounded-full shadow-xl p-2 w-40 m-4" src={headshot}  alt="Handsome Young Man"/>
                    My Links
                    </div>
                </div>
                {[
                    {name:"Github",link:"https://github.com/Cordxll"},
                    {name:"Linkedin",link:"https://www.linkedin.com/in/cordell-browne-b51429184/"},
                    {name:"Kaggle",link:"https://www.kaggle.com/cordellbrowne"}
                ].map(x => (
                    <a className='w-full py-4 border-4 border-white rounded-full flex justify-center my-4 bg-gradient-to-r from-violet-400 via-sky-300 to-blue-200 text-lg text-white font-bold shadow hover:scale-110 transition duration-150 ease-in-out relative' 
                    onMouseEnter={() => {isHovering(x.name)}} 
                    onMouseLeave={() => {isHovering("")}}
                    href={x.link} target="_blank" rel="noreferrer"
                    >
                        {x.name}
                        {hovering === x.name ? <div className='absolute right-10 bottom-5'><MdOutlineIosShare size={24}/></div> : ""}
                        <div className='absolute bottom-5 left-10'>{chooseIcon(x.name)}</div>
                    </a>
                ))}

            </div>
        )
    }

    function test(){
        return(
            <div className='w-screen bg-no-repeat bg-cover bg-fixed transition-opacity duration-1000 ease-in animate-fade' style={{backgroundImage: `url(https://tailwindcss.com/_next/static/media/docs@tinypng.d9e4dcdc.png)`}}>
                <div className="h-screen flex justify-center items-center">
                    <div className='block sm:flex w-5/6 sm:w-3/5 justify-between gap-4'>
                        {right()}
                        {left()}
                        <div className='mx-auto'>{scroll()}</div>
                    </div>
                </div>
                <div className='h-screen flex justify-center w-full '>
                    {myLinks()}    
                </div>
            </div>
        )
    }


     
    return(
        <>
            {test()}
        </>
    )
}