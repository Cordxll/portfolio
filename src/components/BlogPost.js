
import { useParams } from "react-router-dom"
import One from "./blogs/One"
import Two from "./blogs/Two"
import Three from "./blogs/Three";


export default function BlogPost(){
    
    const { title } = useParams()

    switch(title){
        case "machine-learning-potato-salad-recipes":
            return <Three/>

        case "how-to-web-scrape-with-python":
            return <Two/>
    
        case "text-to-speech-v1":
            return <One/>

        default:
            return `<div>Can't find article... </div>`

    }
}