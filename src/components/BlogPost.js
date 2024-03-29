
import { useParams } from "react-router-dom"
import headshot from '../assets/IMG_1783.jpeg'
import {FaShare} from 'react-icons/fa'
import { useEffect, useState } from "react";
import { browserName } from "react-device-detect";

import TTS from "./TTS";




export default function BlogPost(){
    
    const { title } = useParams();
    const [post, setPost] = useState({
        post_id:"",
        date:"",
        description:"",
        title:"",
        preview_img:"",
        body: [],
        text:""
    });

    const url = `https://5p61nj9kc8.execute-api.us-east-1.amazonaws.com/blogs/getById?post_id=${title}`;

    useEffect(() => {
        
        function getPost(){
            fetch(url)
            .then(response => response.json())
            .then(x => setPost(x.Item))
        };
        
        getPost();

    },[url]);

    function setHTML(body){
        switch(body.tag){
            case "title":
                return(
                    <div>
                       <h1 className="pt-4 text-4xl font-bondoni">{body.value}</h1>
                    </div>
                )
            case "head":
                return(    
                    <div className="flex text-black">
                        <img src={headshot} alt="" className="flex-shrink-0 w-12 h-12 border rounded-full" />
                        
                        <div className="p-2">
                            <h4 className="text-sm font-semibold text-left">Cordell Browne</h4>
                            <div className="text-xs">{post.date} · {estimatedReadTime()}  · { browserName !== "Safari" ? <TTS text={post.text}/> : `TTS is Disabled on ${browserName}` }</div>
                        </div>

                        <div className='ml-auto mt-2'>
                            <button className='p-2  border border-gray-300 rounded-full hover:bg-gray-100'><FaShare/></button>
                        </div>
                    </div>
                    )
            case "img":
                return(
                    <div>
                        <img 
                        src={body.value}
                        className="py-4 block w-full"
                        alt="idk"
                        />
                    </div>
                )
            case "video":
                return(
                    <div>
                        <video height="270"  controls loop playsinline>
                            <source src={body.value} type="video/mp4"/>
                        </video>
                    </div>
                )
            case "youtube":
                    return(
                        <div>
                           <iframe className="py-4 w-full"  height="480"src={body.value}  title="Potato Party"></iframe>
                        </div>
                    )
            case "h1":
                return(
                    <div className="w-full border-b-2 border-gray-700 text-gray-700">
                        <h1 className="py-4 text-2xl font-bold">{body.value}</h1>
                    </div>
                )
            case "p":
                return(
                    <div>
                        <p className="py-4 font-thin font-bondoni">{body.value}</p>
                    </div>
                )
            case "code":
                return(
                    <>
                        {renderCode(body.values)}
                    </>
                )
                    
            case "link":
                return(
                    <div>
                        <a 
                        href={body.value.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 hover:underline text-sm"
                        >{body.value.text}</a>
                    </div>
                )
            default:
                return(
                    <div>
                        {body.value} : "default"
                    </div>
                )
        }
    }
    
    function renderCode(x){
        
        function logic (y){
            switch(y.type){
                case 'comment':
                    return(
                        <div class="text-green-600 whitespace-nowrap"># {y.value}</div>
                    )
                case 'line':
                    return(
                        <div  className="text-gray-700 whitespace-nowrap">{y.value}</div>
                    )
                case 'indent1':
                    return(
                        <div  className="text-gray-700 pl-8 whitespace-nowrap">{y.value}</div>
                    )
                case 'indent2':
                    return(
                        <div  className="text-gray-700 pl-16 whitespace-nowrap">{y.value}</div>
                    )
                case 'indent3':
                    return(
                        <div  className="text-gray-700 pl-24 whitespace-nowrap">{y.value}</div>
                    )
                case 'indent4':
                    return(
                        <div  className="text-gray-700 pl-28 whitespace-nowrap">{y.value}</div>
                    )
                default : 
                        return(
                            <div>
                                Default
                            </div>
                        )
            }
        }

        return(
            <div className="rounded-lg bg-gray-100 p-4 overflow-x-auto font-changa">
                {x.map(z => logic(z))}
            </div>
        )  
    } 

    function estimatedReadTime(){
        const wordCount = post.text.split(' ').length;
        const num = Math.round(wordCount / 200); 

        return(
            <>
                {num === 0 ?
                    <> &#60; 1 min read</>
                : 
                    <> {num} min read</>
                }
            </>
        )
    }


    return(
        <div className="flex  justify-center pt-4">
            <div className="w-full sm:w-3/5">
                {post.body.map(x => (
                    <div>
                        {setHTML(x)}
                    </div>
                ))}
            </div>
        </div>
    )
}