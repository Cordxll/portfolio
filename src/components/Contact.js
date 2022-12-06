import React, { useRef, useState} from 'react';
import { useNavigate } from "react-router-dom";

import emailjs from '@emailjs/browser';
import gif from "../assets/thumbs-up-double-thumbs-up.gif"

export default function Contact(){
    
    const form = useRef();
    const [success , setSuccess] = useState(false);
    const navigate = useNavigate();
    
    

    function sendEmail (e){
        //setTimeout
        e.preventDefault()
        
        emailjs.sendForm('service_x39w29p', 'template_5t9w5np', form.current, 'lxs3R5L9FisLh4kRM')
        .then(
            (result) => {console.log(result.text);},
            // (error) => {console.log(error.text);}
            );     
        if(e){
            setSuccess(true)
            setTimeout(() => {navigate("/");}, 3000);
        }     
        
        } 
    
    return(
    <>
    <section className="bg-white">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">Contact Me</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Thanks htmlFor checking out my site. Want to send feedback about site appearance? What to know more about me? Let me know.</p> 
      <form  ref={form} onSubmit={sendEmail} action="#" className="space-y-8">
          <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input 
              type="email" 
              id="email" 
              name='sender'
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" 
              placeholder="name@whatever.com" required/>
          </div>
          {success && (<img className="shadow-xl p-1 absolute inset-x-0 bottom-0" src={gif} alt="hi"/>)}
          <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject or Name</label>
              <input 
              type="text" 
              id="subject"
              name='subject' 
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" 
              placeholder="How's the weather?" required/>
          </div>
          <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" name="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          {success ? "" : <button type="submit" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Send message</button>}    
      </form>
  </div>
</section>
    </>
    )
}