import { Link} from "react-router-dom";
import vid from "../../assets/medium.mp4"

export default function TextToSpeech(){
    return(
        <>
        <div className='sm:px-32 md:px-40 lg:px-52'>
            <h1 className='font-bold text-4xl pt-4 pb-2'>Text To Speech In React App</h1>
            <p className='py-2'>This feature is used on the articles in my blog section. It will read
            the plain text to the user through something something. It was inspired medium's version of this (First video below)
                <span>
                    <Link to="/blog" className='text-blue-600'>Check out one of my articles</Link>
                </span>
            </p>
            
            <video className='h-4/6' controls autoplay loop playsinline>
                <source src="https://photos.google.com/photo/AF1QipMohXvtt-uNGMIv7zplK4EN7ql6NKKvTID_WHv4" type="video/mp4"/>
            </video>
        </div>
        </>
    )
}