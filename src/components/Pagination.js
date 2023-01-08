import React, { useState } from "react";
import {FaChevronLeft,FaChevronRight} from 'react-icons/fa'

//https://www.youtube.com/watch?v=IYCa1F-OWmk&t=174s
export default function Pagination({postsPerPage, totalPosts, paginate, currentPage}){
    const pageNumbers = [];
    const [numbr, setNumbr] = useState(1);

    for(let i= 1; i<= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }
    return (
            <div className="flex gap-4 justify-center py-8 sm:pt-20">
                <button 
                className="p-1.5 py-2 rounded-full hover:bg-blue-200 hover:text-white text-gray-400"
                onClick={() => {
                    if(numbr != 1){
                        paginate(numbr - 1)
                        setNumbr(numbr - 1)
                    }
                }}>
                    <FaChevronLeft size={24} className="mr-1"/>
                </button>
                
                {pageNumbers.map((number) => (
                        <button 
                        key={number}
                        onClick={() => {paginate(number); setNumbr(number)}}
                        className={`${currentPage == number ? "bg-blue-300 text-white" : "bg-none text-gray-400"}  font-bold px-4 py-2  rounded-full hover:bg-blue-200 hover:text-white focus:bg-blue-300`}
                        >{number}</button>
                ))}
                <button 
                className="p-1.5 py-2 rounded-full hover:bg-blue-200 hover:text-white text-gray-400"
                onClick={() => {
                    if(numbr != pageNumbers.length){
                        paginate(numbr+1)
                        setNumbr(numbr+1)
                    }
                }}>
                    <FaChevronRight size={24} className="ml-1"/>
                </button>
            </div>
    )
}