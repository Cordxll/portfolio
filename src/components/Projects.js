import {FaPython,FaJava,FaRegFile, FaReact} from "react-icons/fa"
import {SiCsharp} from "react-icons/si"
import {SiJavascript} from "react-icons/si"
import {GrStackOverflow} from "react-icons/gr"
import { Link} from "react-router-dom";

import { useEffect,useState } from "react";
import Pagination from "./Pagination";

export default function Projects(){
    const [projects,setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;
    
    const url = "https://5p61nj9kc8.execute-api.us-east-1.amazonaws.com/getAll";
    useEffect(() => {

        function showAll(){
            fetch(url)
            .then(response => response.json())
            .then(x => {
                setProjects(x.Items);
            })
            .then(() => setLoading(false))
        }
        
        showAll();
        
    },[])

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = projects.slice(indexOfFirstPost,indexOfLastPost)


    function Header(name){
        return(
            <>
            <div className="w-full flex justify-center items-center">
                <div className="border-b-2 py-4 text-left w-4/5">
                    <h1 className="font-changa">{name}</h1>
                </div>
                
            </div>
            </>
        )
    }

    function AllCards(){
        return(
            <div className="w-screen flex justify-center items-center">
                <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4">
                    {currentPosts.map((project) => (
                        <>
                            <div key={project.name} className="relative bg-white mt-12 py-6 px-6 rounded-3xl  my-4 shadow-xl border" style={{width: '22rem'}}>
                                <div className="flex items-center absolute rounded-full py-4 px-4 shadow-xl left-4 -top-6 bg-white">
                                    {getIcon(project.language)}
                                </div>
                                <div className="mt-8">
                                    <div className="">
                                        <p className="text-xl font-semibold my-2">{project.name}</p>
                                        <div className="flex space-x-2 text-gray-400 text-sm ">
                                            <GrStackOverflow className=""/> 
                                            <p>{project.stack}</p> 
                                        </div>
                                        <div className="flex space-x-2 text-gray-400 text-sm my-3">
                                            <FaRegFile className=""/>
                                            <p>{project.description}</p> 
                                        </div>
                                    </div>
                                    <div className="border-t-2 "></div>

                                    <div className="relative h-16">
                                        <div className="absolute left-0  bottom-0">
                                            <p className="font-semibold text-base mb-2">Collaborator(s)</p>
                                            <div className="flex space-x-2">
                                                {project.collaborators.map((person) => (
                                                    <a 
                                                    key={person.link}
                                                    href={person.link}
                                                    target="_blank"
                                                    rel="noreferrer">
                                                        <img src={person.image}
                                                    className="w-6 h-6 rounded-full"
                                                    alt="idk"
                                                    /></a>
                                                ))} 
                                            </div>
                                        </div>
                                        <div className="absolute right-0 bottom-0">
                                            <Link to={project.project_id} className="bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow hover:ring">See More</Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        )

    }
    function BodySkeleton(arrLength){
        let arr = [];
        
        for(let i = 0; i < arrLength; i++){
            arr.push(1);
        }

        return(
            <div className="w-screen flex justify-center items-center">
            <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4">
            {arr.map((x) => (
                <>
                    <div className="relative bg-white mt-12 py-6 px-6 rounded-3xl my-4 shadow-xl" style={{width:'22rem'}}>
                        <div className="flex items-center absolute rounded-full py-4 px-4 shadow-xl left-4 -top-6 animate-pulse bg-gray-50">
                            <div className="h-3 w-3 rounded-full"/>
                        </div>
                        <div className="mt-8">
                            <div className="w-5/6 h-2 bg-gray-500 font-semibold my-2 animate-pulse"/>
                            <div className="flex space-x-2 text-gray-400 text-sm">
                                <GrStackOverflow className=""/> 
                                <div className="w-4/6 bg-gray-500 h-2 animate-pulse"/>
                            </div>
                            <div className="flex space-x-2 text-gray-400 text-sm my-3">
                                <FaRegFile className=""/>
                                <div className="w-4/6 bg-gray-500 h-2 animate-pulse"/> 
                            </div>
                            <div className="border-t-2 "/>
                            <div className="flex justify-between sm:block md:block lg:flex">
                                <div className="my-2">
                                    <div className="bg-gray-500 h-2 animate-pulse w-60 my-1"/> 
                                    <div className="flex space-x-2">
                                        <div className="w-6 h-6 rounded-full bg-gray-500 animate-pulse"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ))}
            </div>
            </div>
        )
    }
    function getIcon(lang){
        switch(lang){                                 
            case "python":
                return <FaPython className="h-8 w-8 fill-blue-600"/>
                 
            case "java":
                return <FaJava className="h-8 w-8 fill-red-400"/>
                 
            case "js":
                return  <SiJavascript className="h-8 w-8 fill-yellow-400"/>
                
            case "react":
                return <FaReact className="h-8 w-8 fill-blue-200"/>
            
            case "csharp":
                return <SiCsharp className="h-8 w-8 fill-violet-200"/>
                
            default:
                return <FaReact className="h-8 w-8 fill-blue-200"/>
        }
    }

    function header(){
        
        return(
            <div className="w-screen flex items-center justify-center p-4">
                <div className="text-center font-changa">
                    <p className="text-2xl font-bold py-4">My Recent Projects</p>
                    <p className="font-thin">Here are a few projects I have worked on. If you would like to know more feel free to <Link to="/contact" className="inline hover:underline text-blue-400">contact me!</Link></p>
                </div>   
            </div>
        )
    }

    const paginate = pageNumber => setCurrentPage(pageNumber);
    
    return(
        <div>
            <div className="h-6"></div>
            <div className="">{header()}</div>
            <div>{Header("View All")}</div>
            <div>{loading ? BodySkeleton(6): AllCards()}</div>
            <Pagination postsPerPage={postsPerPage} totalPosts={projects.length} paginate={paginate} currentPage={currentPage}/>      
        </div>
    )
}