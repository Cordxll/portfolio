import {FaPython,FaJava,FaRegFile, FaReact} from "react-icons/fa"
import {SiCsharp} from "react-icons/si"
import {SiJavascript} from "react-icons/si"
import {GrStackOverflow} from "react-icons/gr"
import { Link} from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";
import { useEffect,useState } from "react";
import Pagination from "./Pagination";

export default function Projects(){
    const [projects,setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;
    const [feat, setFeat] = useState([]);
    
    const url = "https://5p61nj9kc8.execute-api.us-east-1.amazonaws.com/getAll";
    useEffect(() => {

        function showAll(){
            fetch(url)
            .then(response => response.json())
            .then(x => {
                setProjects(x.Items);
                setFeat(x.Items.slice(2,5))
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
            <div className="mx-20 py-6 border-b-2 ">
                <h1 className="border-zinc-500 text-2xl font-serif">{name}</h1>
            </div>
            </>
        )
    }
    
    function Featured(){
        return(
            <>
            <div className="grid grid-cols-3 justify-items-center">
                {feat.map((project) => (
                    <>
                        <div key={project.name} className="relative bg-white mt-12 py-6 px-6 rounded-3xl md:w-5/6 lg:w-96 my-4 shadow-xl">
                            <div className="flex items-center absolute rounded-full py-4 px-4 shadow-xl left-4 -top-6">
                                {getIcon(project.language)}
                            </div>
                            <div className="mt-8">
                                <p className="text-xl font-semibold my-2">{project.name}</p>
                                <div className="flex space-x-2 text-gray-400 text-sm">
                                    <GrStackOverflow className=""/> 
                                    <p>{project.stack}</p> 
                                </div>
                                <div className="flex space-x-2 text-gray-400 text-sm my-3">
                                    <FaRegFile className=""/>
                                    <p>{project.description}</p> 
                                </div>
                                <div className="border-t-2 "></div>

                                <div className="flex justify-between sm:block md:block lg:flex">
                                    <div className="my-2">
                                        <p className="font-semibold text-sm mb-2">Collaborator(s)</p>
                                        <div className="flex space-x-2">
                                            {project.collaborators.map((person) => (
                                                <a 
                                                key={person.link} 
                                                href={person.link}
                                                target="_blank"
                                                rel="noreferrer"><img src={person.image}
                                                className="w-6 h-6 rounded-full"
                                                alt="idk"
                                                
                                                /></a>
                                            ))} 
                                        </div>
                                    </div>
                                    <div className="mt-8">
                                    <Link to={project.project_id} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">See More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ))}
            </div>
            </>
        )
    }

    function AllCards(){
        return(
            <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 pt-10 justify-items-center">
                {currentPosts.map((project) => (
                    <>
                        <div key={project.name} className="relative bg-white mt-12 py-6 px-6 rounded-3xl w-96 my-4 shadow-xl">
                            <div className="flex items-center absolute rounded-full py-4 px-4 shadow-xl left-4 -top-6">
                                {getIcon(project.language)}
                            </div>
                            <div className="mt-8">
                                <p className="text-xl font-semibold my-2">{project.name}</p>
                                <div className="flex space-x-2 text-gray-400 text-sm">
                                    <GrStackOverflow className=""/> 
                                    <p>{project.stack}</p> 
                                </div>
                                <div className="flex space-x-2 text-gray-400 text-sm my-3">
                                    <FaRegFile className=""/>
                                    <p>{project.description}</p> 
                                </div>
                                <div className="border-t-2 "></div>

                                <div className="flex justify-between sm:block md:block lg:flex">
                                    <div className="my-2">
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
                                    <div className="mt-8">
                                    <Link to={project.project_id} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">See More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        )

    }
    function BodySkeleton(arrLength){
        let arr = [];
        
        for(let i = 0; i < arrLength; i++){
            arr.push(1);
        }

        return(
            <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 pt-10 justify-items-center">
            {arr.map((x) => (
                <>
                    <div className="relative bg-white mt-12 py-6 px-6 rounded-3xl w-96 my-4 shadow-xl">
                        <div className="flex items-center absolute rounded-full py-4 px-4 shadow-xl left-4 -top-6">
                            <div className="h-3 w-3 bg-gray-500 rounded-full animate-pulse"/>
                        </div>
                        <div className="mt-8">
                            <div className="w-4/6 h-4 bg-gray-500 font-semibold my-2 rounded-full animate-pulse"/>
                            <div className="flex space-x-2 text-gray-400 text-sm">
                                <GrStackOverflow className=""/> 
                                <div className="w-3/6 bg-gray-500 rounded-full h-4 animate-pulse"/>
                            </div>
                            <div className="flex space-x-2 text-gray-400 text-sm my-3">
                                <FaRegFile className=""/>
                                <div className="w-3/6 bg-gray-500 rounded-full h-4 animate-pulse"/> 
                            </div>
                            <div className="border-t-2 "/>
                            <div className="flex justify-between sm:block md:block lg:flex">
                                <div className="my-2">
                                    <div className="bg-gray-500 rounded-full h-4 animate-pulse w-48 my-1"/> 
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
        )
    }

    function filterProjects(){
        return(
            <div className="mx-4 sm:mx-20 py-6  p-1">
                <div className="w-4/6 md:w-3/6 lg:w-3/6 ">
                <Multiselect
                    isObject={false}
                    onKeyPressFn={function noRefCheck(){}}
                    onRemove={function noRefCheck(){}}
                    onSearch={function noRefCheck(){}}
                    onSelect={function noRefCheck(){}}
                    placeholder="Filter by Language"
                    options={[
                        'Python',
                        'Java',
                        'C#',
                        'React/Javascript',
                        'C++'
                    ]}
                    className="bg-gray-100 rounded-xl"
                    style={{
                        searchBox: {
                          'padding':'3%',
                          'borderRadius':'0.7rem'
                        }
                      }}
                />
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

    const paginate = pageNumber => setCurrentPage(pageNumber);
    
    return(
        <div>
            <div className="hidden sm:block">{Header("Featured")}</div>
            <div className="hidden sm:block">{loading ? BodySkeleton(3): Featured()}</div>
            <div>{Header("View All")}</div>
            <div>{filterProjects}</div>
            <div>{loading ? BodySkeleton(6): AllCards()}</div>
            <Pagination postsPerPage={postsPerPage} totalPosts={projects.length} paginate={paginate} currentPage={currentPage}/>      
        </div>
    )
}