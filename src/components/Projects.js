import {FaPython,FaJava,FaRegFile, FaReact, FaAngleDoubleDown} from "react-icons/fa"
import {SiCsharp} from "react-icons/si"
import {SiJavascript} from "react-icons/si"
import {GrStackOverflow} from "react-icons/gr"
import { Link} from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";
import { useEffect,useState } from "react";
import Pagination from "./Pagination";

export default function Projects(){
    const [posts, setPosts] = useState([]);
    const [projects,setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const[postsPerPage, setPostPerPage] = useState(6);
    
    const url = "https://5p61nj9kc8.execute-api.us-east-1.amazonaws.com/getAll";
    useEffect(() => {

        function showAll(){
            fetch(url)
            .then(response => response.json())
            .then(x => {setProjects(x.Items)})
            .then(() => setLoading(false))
        }

        showAll();
        
    },[])

    

    const allProjects = [
        {
            language:"react",
            name:"Text To Speech In React App",
            descrip:"Building a text to speech func for blogs",
            stack:"JSX, NPM libraries...",
            link:"text-to-speech",
            collaborators:[
                {
                    url:"https://github.com/Cordxll",
                    name:"Cordell Browne",
                    img:"https://avatars.githubusercontent.com/u/88411627?v=4" 
                }
            ]
        },
        {
            language:"csharp",
            name:"CommunityAlly",
            descrip:"Jamacia based community advertisment website",
            stack:".NET, React, Other...",
            link:"community-ally",
            collaborators: [
                {
                    url:"https://github.com/Cordxll",
                    name:"Cordell Browne",
                    img:"https://avatars.githubusercontent.com/u/88411627?v=4" 
                },
                {
                    url:"https://www.communityallyonline.com/About",
                    name:"Dain Taft",
                    img:"http://static1.squarespace.com/static/545172c0e4b0a0a12cc1f0e8/56ab0b514bf11837b0fc79ce/56cd7396d51cd4fb9a8e8d29/1486186549139/?format=1500w"
                }
            ]
        },
        {
            language:"react",
            name:"This Portfolio",
            descrip:"Source code for portfolio",
            stack:"React & React Modules",
            link:"this-portfolio",
            collaborators: [
                {
                    url:"https://github.com/Cordxll",
                    name:"Cordell Browne",
                    img:"https://avatars.githubusercontent.com/u/88411627?v=4" 
                }
            ]
        },
        {
            language:"js",
            name:"Asteriods Game",
            descrip:"Atari style asteriod game",
            stack:"HTML, CSS, JS...",
            link:"asteriods-game",
            collaborators: [
                {
                    url:"https://github.com/Cordxll",
                    name:"Cordell Browne",
                    img:"https://avatars.githubusercontent.com/u/88411627?v=4" 
                }
            ]
        },
        {
            language:"python",
            name:"Market Predictor",
            descrip:"Atempt to gather useful market data",
            stack:"TensorFlow, Pandas, NLTK...",
            link:"market-predictor",
            collaborators: [
                {
                    url:"https://github.com/Cordxll",
                    name:"Cordell Browne",
                    img:"https://avatars.githubusercontent.com/u/88411627?v=4" 
                }
            ]
        },
        {
            language:"java",
            name:"Dev10 Capstone Venue Finder",
            descrip:"Wedding venue lookup app",
            stack:"SpringBoot, React, MySQL...",
            link:"dev-10-capstone",
            collaborators: [
                {
                    url:"https://github.com/Samuel-en",
                    name:"Samuel Endrias",
                    img:"https://avatars.githubusercontent.com/u/66279751?v=4" 
                },
                {
                    url:"https://github.com/YuliiaButenko",
                    name:"Yuliia Butenko",
                    img:"https://avatars.githubusercontent.com/u/111092439?v=4"
                },
                {
                    url:"https://github.com/Cordxll",
                    name:"Cordell Browne",
                    img:"https://avatars.githubusercontent.com/u/88411627?v=4" 
                }
            ]
        } 
    ]
    let featured = [
        {
            language:"java",
            name:"Dev10 Capstone Venue Finder",
            descrip:"Wedding venue lookup app",
            stack:"SpringBoot, React, MySQL...",
            link:"dev-10-capstone",
            collaborators: [
                {
                    url:"https://github.com/Samuel-en",
                    name:"Samuel Endrias",
                    img:"https://avatars.githubusercontent.com/u/66279751?v=4" 
                },
                {
                    url:"https://github.com/YuliiaButenko",
                    name:"Yuliia Butenko",
                    img:"https://avatars.githubusercontent.com/u/111092439?v=4"
                },
                {
                    url:"https://github.com/Cordxll",
                    name:"Cordell Browne",
                    img:"https://avatars.githubusercontent.com/u/88411627?v=4" 
                }
            ]
        },
        {
            language:"react",
            name:"Text To Speech In React App",
            descrip:"Building a text to speech func for blogs",
            stack:"JSX, NPM libraries...",
            link:"text-to-speech",
            collaborators:[
                {
                    url:"https://github.com/Cordxll",
                    name:"Cordell Browne",
                    img:"https://avatars.githubusercontent.com/u/88411627?v=4" 
                }
            ]
        },
        {
            language:"js",
            name:"Asteriods Game",
            descrip:"Atari style asteriod game",
            stack:"HTML, CSS, JS...",
            link:"asteriods-game",
            collaborators: [
                {
                    url:"https://github.com/Cordxll",
                    name:"Cordell Browne",
                    img:"https://avatars.githubusercontent.com/u/88411627?v=4" 
                }
            ]
        }
    ]

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = allProjects.slice(indexOfFirstPost,indexOfLastPost)


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
                {featured.map((project) => (
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
                                    <p>{project.descrip}</p> 
                                </div>
                                <div className="border-t-2 "></div>

                                <div className="flex justify-between sm:block md:block lg:flex">
                                    <div className="my-2">
                                        <p className="font-semibold text-sm mb-2">Collaborator(s)</p>
                                        <div className="flex space-x-2">
                                            {project.collaborators.map((person) => (
                                                <a 
                                                key={person.url} 
                                                href={person.url}
                                                target="_blank"
                                                rel="noreferrer"><img src={person.img}
                                                className="w-6 h-6 rounded-full"
                                                alt="idk"
                                                
                                                /></a>
                                            ))} 
                                        </div>
                                    </div>
                                    <div className="mt-8">
                                    <Link to={project.link} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">See More</Link>
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
                {projects.map((project) => (
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
    function BodySkeleton(){
        return(
            <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 pt-10 justify-items-center">
            {[1,2,3,4,5,6].map((x) => (
                <>
                <div className="relative bg-white mt-12 py-6 px-6 rounded-3xl w-96 my-4 shadow-xl">
                            <div className="flex items-center absolute rounded-full py-4 px-4 shadow-xl left-4 -top-6">
                            <div className="h-3 w-3 bg-gray-500 rounded-full animate-pulse"></div>
                            </div>
                            <div className="mt-8">
                                <div className="w-4/6 h-4 bg-gray-500 font-semibold my-2 rounded-full animate-pulse"></div>
                                <div className="flex space-x-2 text-gray-400 text-sm">
                                    <GrStackOverflow className=""/> 
                                    <div className="w-3/6 bg-gray-500 rounded-full h-4 animate-pulse"></div> 
                                </div>
                                <div className="flex space-x-2 text-gray-400 text-sm my-3">
                                    <FaRegFile className=""/>
                                    <div className="w-3/6 bg-gray-500 rounded-full h-4 animate-pulse"></div> 
                                </div>
                                <div className="border-t-2 "></div>

                                <div className="flex justify-between sm:block md:block lg:flex">
                                    <div className="my-2">
                                        <div className="bg-gray-500 rounded-full h-4 animate-pulse w-48 my-1"></div> 
                                        <div className="flex space-x-2">
                                            <div className="w-6 h-6 rounded-full bg-gray-500 animate-pulse"></div>
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
            <div className="hidden sm:block">{Featured()}</div>
            <div>{Header("View All")}</div>
            <div>{filterProjects}</div>
            <div>{loading ? BodySkeleton(): AllCards()}</div>
            <Pagination postsPerPage={postsPerPage} totalPosts={projects.length} paginate={paginate} currentPage={currentPage}/>
            
        </div>
    )
}