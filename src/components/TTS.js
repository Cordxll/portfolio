import { useEffect, useState } from 'react';
import {FaPlayCircle, FaPauseCircle} from 'react-icons/fa';

export default function TTS({text}){
     
    const [playing, isPlaying] = useState(false);
    const [paused, isPaused] = useState(false);
    
    const wordCount = text.split(' ').filter(function(n) { return n !== '' }).length;
    const SYNTH_WORDS_PER_SEC = 3.03;
    const duration = Math.round(wordCount / SYNTH_WORDS_PER_SEC);
    const minutes = ~~((duration % 3600) / 60);
    const seconds = ~~duration % 60; 
    const displayDuration = "0" + minutes + ":"  + ( seconds < 10 ? "0" + seconds : + seconds );
    
    const [timer, setTimer] = useState(duration);
    const [clock, setClock] = useState(displayDuration);

    const [initialize, initialized] = useState(0);
   
    let utterance = new SpeechSynthesisUtterance(text);
    const synth = window.speechSynthesis;
    utterance.lang ="en";
    let voices = synth.getVoices();
    voices = voices.filter(x => x.name === 'Samantha');
    utterance.voice = voices[0];
    utterance.rate = 0.9;
    
    utterance.onstart = (event) => {
          initialized(1);
      };

    
    utterance.onend = (event) => {
        synth.cancel();
        isPlaying(false);
        setTimer(duration);
        initialized(0);
        setClock(displayDuration);
        
    };

    useEffect(() => {
        return () => {
          synth.cancel();
        };
      }, [synth]);
      
    useEffect(() => {
        if(playing && initialize){
            
            let time = setInterval(() => {
                let i = timer - 1;
                let mins = ~~((i % 3600) / 60);
                let secs = ~~i % 60;
            
                setClock("0" + mins + ":" + (secs < 10 ? "0" + secs : + secs));
                setTimer(i);

            },1000);
            return () => clearInterval(time);
        }
      })
    

    function Play(){
         
        if(paused){
            synth.resume(utterance);
            isPaused(false);
        }
        if(!paused){
            synth.cancel();
            synth.speak(utterance);
        }
        
    }

    function Pause(){
        isPaused(true);
        synth.pause();
    }

    
    function header(){
        return(
            <div className='inline text-green-500'>
                {
                playing ? 
                    <div className='inline-block'>
                        <button className='inline-block px-2' onClick={() => {isPlaying(false); Pause()}}>
                            <FaPauseCircle type='button' className=''/>
                        </button>
                    </div>
                :
                    <button className='inline-block px-2' onClick={() => {isPlaying(true); Play()}}>
                        <FaPlayCircle type='button' className='' />
                    </button>
                }
                <div className='inline my-auto'>{initialize ? clock : "Listen"}</div>
            </div>
        )
    }
    
    return(
        <>
            {header()}
        </>
    )
}