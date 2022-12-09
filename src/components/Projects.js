import {FaPython,FaJava,FaRegFile, FaReact} from "react-icons/fa"
import {SiCsharp} from "react-icons/si"
import {SiJavascript} from "react-icons/si"
import {GrStackOverflow} from "react-icons/gr"
import { Link} from "react-router-dom";
export default function Projects(){
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
                                    <p>{project.descrip}</p> 
                                </div>
                                <div className="border-t-2 "></div>

                                <div className="flex justify-between">
                                    <div className="my-2">
                                        <p className="font-semibold text-base mb-2">Collaborator(s)</p>
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
        )
            </>
        )
    }

    function AllCards(){
        return(
            <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 pt-10 justify-items-center">
                {allProjects.map((project) => (
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
                                    <p>{project.descrip}</p> 
                                </div>
                                <div className="border-t-2 "></div>

                                <div className="flex justify-between">
                                    <div className="my-2">
                                        <p className="font-semibold text-base mb-2">Collaborator(s)</p>
                                        <div className="flex space-x-2">
                                            {project.collaborators.map((person) => (
                                                <a 
                                                key={person.url}
                                                href={person.url}
                                                target="_blank"
                                                rel="noreferrer">
                                                    <img src={person.img}
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
    
    
    return(
        <div>
            <div className="hidden sm:block">{Header("Featured")}</div>
            <div className="hidden sm:block">{Featured()}</div>
            <div>{Header("View All")}</div>
            <div>{AllCards()}</div>
            
        </div>
    )
}