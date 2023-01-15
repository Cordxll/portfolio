import { useEffect, useState } from 'react';
import {FaPlayCircle, FaUndoAlt, FaPauseCircle} from 'react-icons/fa'
import { useLocation, useParams } from 'react-router-dom';

export default function TextToSpeech({text}){
    const { title } = useParams();
    const [playing, isPlaying] = useState(false);
    const [rate, setRate] = useState(0.9);
    let flag = false;
    
    
    const utterance = new SpeechSynthesisUtterance(text);
    const synth = window.speechSynthesis;
    synth.cancel();
    
    utterance.lang ="en"
    utterance.voice = synth.getVoices()[0];
    utterance.rate = rate;

    function handleChange(event){
        if(event){
            setRate(event.target.value);
            if(!flag || synth.paused){
                utterance.rate = event.target.value;
                console.log("Hit section 1")
            }
            if(synth.speaking){
                synth.pause();
                utterance.rate = event.target.value;
                synth.speak(utterance);
                console.log("Hit section 2")
            }

        }
      }
    
    function Play(){ 
        
        if(!flag){
            flag = true;
            utterance.onend = function(){
                flag = false;
            };
            synth.speak(utterance)
            
          }
          if(synth.paused){
            synth.resume();
          }
          if(!playing){
            isPlaying(true) 
          }
    }

    function Pause(){
        if(synth.speaking && !synth.paused){
            synth.pause();
            
        }
        
        
    }

    function End(){
        if(synth.speaking){
            flag= false;
            synth.cancel();
        }
    }
    
    return(
            <>
                <button onClick={playing ? Pause : Play} className='text-green-500 pl-1'>
                    {
                    !playing ? 
                    <>
                        <FaPlayCircle className='inline-block'/>
                        <p className='inline-block pl-2'>Listen</p>
                    </> 
                    : 
                    <>
                        <FaPauseCircle className='inline-block'/>
                    </>
                    }
                </button>
                {
                playing
                && 
                <div className='fixed bg-gray-100 p-6 rounded-2xl bottom-10 right-20 grid grid-cols-4 opacity-70'>
                    <button onClick={Play} className='px-2'><FaPlayCircle size={28}/></button>
                    <button onClick={Pause} className='px-2'><FaPauseCircle size={28}/></button>
                    <button onClick={End} className='px-2'><FaUndoAlt size={28}/></button>
                    <form >
                        <select value={rate} onChange={handleChange} className='rounded-xl bg-gray-100 px-2'>
                            <option value="0.5">0.5x</option>
                            <option value="0.9">1.0x</option>
                            <option value="1.5">1.5x</option>
                            <option value="2.0">2.0x</option>
                        </select>
                    </form>
                </div>
                }
            </>
    )
}
            