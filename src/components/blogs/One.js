import headshot from '../../assets/IMG_1783.jpeg'

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

    function Header(){
        return(
            <>
                <div className="flex text-black">
                    <img src={headshot} alt="" className="flex-shrink-0 w-12 h-12 border rounded-full" />
                    <div className="flex flex-col p-2">
                        <h4 className="text-sm font-semibold text-center md:text-left">Cordell Browne</h4>
                        <div className="text-xs">Dec 1, 2022 · 3 min read · {TextToSpeech(blogOneP1)}</div>
                    </div>
                </div>
            </>
        )
    }

    return(
        <>
        <div className="px-40 pt-6">
        <div className="text-gray-500">{Header()}</div>
        <h1 className="pt-4 text-4xl font-serif">{title}</h1>
        <p className="pb-4 text-sm">{Math.floor(Math.abs(d1-d2)/86400000)} days ago</p>
        <p className="text-sm italic text-gray-500 px-40 py-4">{quote}</p>
        <h1 className="py-4 text-2xl font-extrabold">Reasoning</h1>
        <div className="">{blogOneP1}</div>
        <img src={imageUrl} alt="NYC" className="py-8 block"/>
        <h1 className="py-4 text-2xl font-extrabold">Proof</h1>
        <video className="py-4" width="640" height="480" controls>
            <source src="" type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
        <div className="">{blogOneP1}</div>
        <h1 className="py-4 text-2xl font-extrabold">Some More Gibberish</h1>
        <div className="">{blogOneP1}</div>
        <iframe className="py-4" width="720" height="480"src="https://www.youtube.com/embed/nA9UZF-SZoQ" title="Potato Party"></iframe>
        <h1 className="py-4 text-2xl font-extrabold">In Conclusion</h1>
        <div className="">{blogOneP1}</div>
        </div>
        </>
    )
}