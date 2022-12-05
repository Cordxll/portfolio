import React, { useRef, useState} from 'react';
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import gif from "../assets/thumbs-up-double-thumbs-up.gif"

export default function Contact(){
    
    const form = useRef();
    const {success , setSuccess}= useState();
    const navigate = useNavigate()
    

    function sendEmail (e){
        //setTimeout
        e.preventDefault()
        
        emailjs.sendForm('service_x39w29p', 'template_5t9w5np', form.current, 'lxs3R5L9FisLh4kRM')
        .then(
            (result) => {console.log(result.text);},
            // (error) => {console.log(error.text);}
            );
            setSuccess("Email Sent");
            e.stopPropagation();                             
            navigate('/')

            
            
  };


    
    return(
    <>
    <section class="bg-white">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">Contact Me</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Thanks for checking out my site. Want to send feedback about site appearance? What to know more about me? Let me know.</p>
      <img className="shadow-xl p-1 absolute" src={gif} alt="hi"/>
      <form  ref={form} onSubmit={sendEmail} action="#" class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input 
              type="email" 
              id="email" 
              name='sender'
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" 
              placeholder="name@whatever.com" required/>
          </div>
          
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject or Name</label>
              <input 
              type="text" 
              id="subject"
              name='subject' 
              class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" 
              placeholder="How's the weather?" required/>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" name="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          
          <button type="submit" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Send message</button>
          {success && (<span>Email Sent</span>)}
          
      </form>
  </div>
</section>
    </>
    )
}