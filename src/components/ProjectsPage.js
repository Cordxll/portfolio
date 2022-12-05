import { useParams } from "react-router-dom"

import AsteriodsGame from "./projects/asteriods-game"
import CommunityAlly from "./projects/community-ally"
import Dev10Capstone from "./projects/dev-10-capstone"
import MarketPredictor from "./projects/market-predictor"
import ThisPortfolio from "./projects/this-portfolio"
import TextToSpeech from "./projects/text-to-speech"

export default function ProjectsPage(){
    const { title } = useParams()

    switch(title){
        case "asteriods-game":
            return <AsteriodsGame/>

        case "community-ally":
            return <CommunityAlly/>
    
        case "dev-10-capstone":
            return <Dev10Capstone/>

        case "market-predictor":
            return <MarketPredictor/>

        case "this-portfolio":
            return <ThisPortfolio/>
            
        case "text-to-speech":
            return <TextToSpeech/>

        default:
            return `<div>Can't find article... </div>`

    }
}