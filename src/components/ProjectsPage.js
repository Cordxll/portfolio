import { useParams } from "react-router-dom"
import { useEffect,useState } from "react";

import GoBack from "./GoBack";


export default function ProjectsPage(){
    
    const [project, setProject] = useState("");
    const { title } = useParams();

    const url = `https://5p61nj9kc8.execute-api.us-east-1.amazonaws.com/getById?project_id=${title}`;
    const tag = "";
    useEffect(() => {
        function show(){
            console.log(url)
            fetch(url)
            .then(response => response.json())
            .then(x => setProject(x.Item))

            
        }

        show();
        
    },[])

    function InnerHTML(body){
        switch(body.tag){
            case "div":
                return(
                    <div>
                        {body.value} : "div"
                    </div>
                )
            case "img":
                return(
                    <div>
                        <img 
                        src={body.value}
                        className="w-full"
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
            case "p":
                return(
                    <div>
                        <p className="py-2">{body.value}</p>
                    </div>
                )
            case "h1":
                return(
                    <div>
                        <h1 className='font-bold text-4xl pt-4 pb-2'>
                            {body.value}
                        </h1>
                    </div>
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

    return(
        <>
            <div className="sm:px-32 md:px-40 lg:px-52">
                <GoBack/>
                    {(project.body)?.map((x) => (
                        <>
                            {InnerHTML(x)}
                        </>
                    ))}
            </div>
        </>
    )
}