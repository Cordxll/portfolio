import { Link} from "react-router-dom";
import GoBack from './buttons/GoBack'
import { Toggle } from "./Toggle";

export default function TextToSpeech(){
    return(
        <>
        <div className='sm:px-32 md:px-40 lg:px-52'>
            <GoBack/>
            <h1 className='font-bold text-4xl pt-4 pb-2'>Text To Speech In React App</h1>
            <p className='py-2'>This feature is used on the articles in my blog section. It will read
             the plain text of the article to the user via Javascript's speechSynthesis package. It was
             inspired medium's text to speech software (Second video below).
                <span>
                    <Link to="/blog" className='text-blue-600'> Check out my article on this project, </Link>
                </span>
                also <span className="font-bold underline"> VOLUME WARNING</span> on first video
            </p>
            
            <video height="270" onloadstart="this.volume=0.5" controls loop playsinline>
                <source src="https://cordell-portfolio.s3.amazonaws.com/assets/v1-t2s.mp4" type="video/mp4"/>
            </video>
            <p className="py-3">The video below shows the inspiration and where I aim to take the software visually.</p>
            <video height="270" controls loop playsinline>
                <source src="https://cordell-portfolio.s3.amazonaws.com/assets/medium.mp4" type="video/mp4"/>
            </video>
            {Toggle("/projects/dev-10-capstone","/projects/community-ally", "Dev-10 Capstone","Community Ally")}
        </div>
        </>
    )
}