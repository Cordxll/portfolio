import headshot from '../../assets/IMG_1783.jpeg'
import {FaShare} from 'react-icons/fa'
import { TextToSpeech } from './TextToSpeech'



export default function One(){
    var d2 = new Date("2022/12/01")
    var d1= new Date()
    let title = "(V1) Text To Speech, How To Get It On Your Webpages w/ React."
    let imageUrl = "https://static01.nyt.com/images/2021/10/26/arts/26succession-item/26succession-item-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
    let blogOneP1 = "Questions. Ask them, please! One of the most useful methods"+
    "of learning mathematics is to repeat the following steps: realize you don’t understand some- thing,"+
    " work to formulate a precise question about it (this is sometimes difficult!), ask it, and then think"+ 
    "about the response. You are all welcome to do this as often as you like in section, in office hours, or"+
    "via email. But even if you can’t formulate your question precisely (or it’s a meta-mathematical question,"+
    " like “why is Concept X relevant”), ask anyway!"
    let quote = "'Journal writing, when it becomes a ritual for transformation, is not only life-changing but life-expanding.' Jen Williamson"
    //let text = "Question, Can I get to the yams? Sweet yams Show me the way Cause I got bills to pay Can I get to the yams? Sweet yams Show me the way' Cause I got bills to pay I ain't tryna be broke for the rest of my life (broke for the rest of my life) Tryna get my bankroll swole no matter the price So I gotta shoot shots, gotta make my layups Gotta get my pay stubs up, you better pay up 'Cause I moved to L.A. to get away from Uncle Sam So tell me how can I get to the yams? (Yams) Sweet yams (sweet yams) Show me the way (show me the way) 'Cause I got bills to pay ('cause I got bills to pay) Can I get to the yams? (Hey) Sweet yams (now won't show me what's real, yeah, yeah, yeah) Show me the way (oh, oh) 'Cause I got bills to pay"

    function Header(){
        return(
            <>
                <div className="flex text-black">
                    <img src={headshot} alt="" className="flex-shrink-0 w-12 h-12 border rounded-full" />
                    <div className="flex flex-col p-2">
                        <h4 className="text-sm font-semibold text-center md:text-left">Cordell Browne</h4>
                        <div className="text-xs">Dec 1, 2022 · 3 min read · {TextToSpeech(blogOneP1)}</div>
                        
                    </div>
                    <div className='ml-auto mt-2'>
                        <button className='p-2  border border-gray-300 rounded-full hover:bg-gray-100'><FaShare/></button>
                    </div>
                </div>
            </>
        )
    }
    function SectionHeader(section){
        return(
            <>
                <h1 className="py-4 text-xl font-extrabold">{section}</h1>
                <div className='w-full border border-gray-300 mb-6'></div>
            </>
        )
    }

    return(
        <div className='flex justify-center items-center font-serif'>
            <div className="max-w-3xl pt-6">
                <div className="text-gray-500">{Header()}</div>
                <h1 className="pt-4 text-4xl font-serif">{title}</h1>
                <p className="pb-4 text-sm">{Math.floor(Math.abs(d1-d2)/86400000)} days ago</p>
                <p className="text-sm italic text-gray-500 px-40 py-4">{quote}</p>
                {SectionHeader("Section One")}
                <div className="font-thin">{blogOneP1}</div>
                <img src="https://i.pinimg.com/originals/a9/4a/ee/a94aee835e16cff4f14c83dac8ffbe10.gif" alt="NYC" className="py-8 block w-full"/>
                {SectionHeader("Section Two")}
                <div className="pb-2">{blogOneP1}</div>
                <div className="">{blogOneP1}</div>
                <iframe className="py-4 w-full"  height="480"src="https://www.youtube.com/embed/nA9UZF-SZoQ" title="Potato Party"></iframe>
                {SectionHeader("Section Three")}
                <div className="">{blogOneP1}</div>
            </div>
        </div>
    )
}

