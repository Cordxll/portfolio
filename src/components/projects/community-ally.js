import GoBack from './buttons/GoBack'
import {Toggle} from "./Toggle"

export default function CommunityAlly(){
    return(
        <>
        <div className='sm:px-32 md:px-40 lg:px-52'>
            <GoBack/>
            <h1 className='font-bold text-4xl pt-4 pb-2'>CommunityAlly Website</h1>
            <p className='py-2'>Community Ally is the mobile friendly Community Web Application designed with your community development and Progress in mind.
                <span>
                    <a href="https://www.communityallyonline.com/" target="_blank" rel="noreferrer" className='text-blue-600'> Check out the site!</a>
                </span>
            </p>
            
            <video height="270" controls autoplay loop playsinline>
                <source src="" type="video/mp4"/>
            </video>
            {Toggle("/projects/text-to-speech","/projects/this-portfolio", "Text to speech","This portfolio")}
        </div>
        </>
    )
}