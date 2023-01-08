import { Link } from "react-router-dom";
import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {FaTwitter, FaFacebook, FaLink, FaTimes, FaShareAlt, FaReddit} from 'react-icons/fa'
import {
  FacebookShareButton,
  RedditShareButton,
  TwitterShareButton,
} from "react-share";

export default function Blog(){
    const cancelButtonRef = useRef(null);
    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState([]);
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [image, setImg] = useState("https://helios-i.mashable.com/imagery/articles/05vBXJ1bDUunSpOX6pCSxgm/hero-image.fill.size_1248x702.v1638327907.jpg");
    const [postLink, setPostLink] = useState("blank");
    const [feat,setFeat] = useState({
      title:"",
      description:"",
      date:"",
      post_id:"",
      preview_img:""
    });

    const url = "https://5p61nj9kc8.execute-api.us-east-1.amazonaws.com/blogs/getAll";
    useEffect(() => {

        function showAll(){
            fetch(url)
            .then(response => response.json())
            .then(x => {
                setPosts(x.Items.slice(1,x.length));
                setFeat(x.Items[0])
            })
            .then(() => setLoading(false))
        }
        
        showAll();
        
    },[])

    function handleUpdate(post){
        (setOpen(true));
        (setTitle(post.title));
        setPostLink("cordell.in"+post.post_id)
        setImg(post.preview_img);
    }
    function ShowPost(){
      return(
        <div>
            <div className=" flex items-center justify-center min-h-full">
                <div className="max-w-sm sm:max-w-xl">
                    {posts.map((post) => (
                        <div className="flex justify-start p-3 hover:bg-gray-100 rounded-lg">
                        <img 
                        src={post.preview_img}
                        className="h-28 w-28 object-cover hidden sm:block"
                        alt=""
                        />
                        <div className="px-4 flex flex-col space-y-1 font-serif rounded-lg ">
                            <Link to={post.post_id} className='font-bold text-gray-700'>{post.title}</Link>
                            <p className='text-gray-500'>{post.description}</p>
                            <div className="flex font-sm">
                                <img src="https://avatars.githubusercontent.com/u/88411627?v=4" 
                                    className="mr-2 mt-1 w-4 h-4 rounded-full"
                                    alt="idk"/>
                                <p className="pr-2 text-gray-600 text-xs sm:text-sm py-1">Cordell Browne</p>
                                <p className="px-2 text-gray-600 text-xs sm:text-sm py-1">{post.date}</p>
                                <FaShareAlt size={20} onClick={() => handleUpdate(post)} className='mx-2 m-1 cursor-pointer hover:border border-gray-600 p-1 rounded-lg'/>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <>{BlogModal()}</>
        </div>
      )
    }
    function ShowPostSkeleton(){
      return(
        <div>
            <div className=" flex items-center justify-center min-h-full animate-pulse">
                <div className="max-w-sm sm:max-w-xl">
                    {[0,1,2,3,4,5,6,7,8].map((post) => (
                        <div className="flex justify-start p-3 hover:bg-gray-100 rounded-lg">
                        <div class="sm:flex items-center justify-center w-28 h-28 bg-gray-300 rounded dark:bg-gray-700 hidden ">
                          <svg class="w-12 h-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
                        </div>
                        <div className="px-4 flex flex-col space-y-1 font-serif rounded-lg ">
                            <div className="h-8 w-80 sm:w-96 bg-gray-400 rounded-full"/>
                            <div className="h-8 w-4/6 bg-gray-400 rounded-full"/>
                            <div className="flex font-sm">
                            <div className="mr-2 mt-1 w-4 h-4 bg-gray-400 rounded-full"/>
                            <div className="h-4 w-2/6  my-autobg-gray-400 rounded-full"/>
                            <div className="h-4 my-auto w-2/6 bg-gray-400 rounded-full"/>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
      )
    }

    function Featured(){
      return(
        <div className="flex justify-center">
          <div className="max-w-3xl block sm:flex sm:justify-center p-0 sm:p-5 hover:bg-gray-100 rounded-xl">
            <Link to={feat.post_id}>
              <img src={feat.preview_img} className="w-full sm:w-96 sm:h-64 object-cover"/>
            </Link>
            <div className="p-4">
              <Link to={feat.post_id} className='font-bold text-2xl text-gray-700'>{feat.title}</Link>
              <p className='text-gray-700'>{feat.description}</p>
              <div className="flex font-sm">
                <img src="https://avatars.githubusercontent.com/u/88411627?v=4" className="mr-2 mt-1 w-4 h-4 rounded-full" alt="idk"/>
                <p className="pr-2 text-gray-600 text-xs sm:text-sm py-1">Cordell Browne</p>
                <p className="px-2 text-gray-600 text-xs sm:text-sm py-1">{feat.date}</p>
                <FaShareAlt size={20} onClick={() => handleUpdate(feat)} className='mx-2 m-1 cursor-pointer hover:border border-gray-600 p-1 rounded-lg'/>
              </div>
            </div>
          </div>
        </div>
      )
    }

    function FeaturedSkeleton(){
      return(
        <div className="flex justify-center animate-pulse">
          <div className="max-w-3xl block sm:flex sm:justify-center p-0 sm:p-5 hover:bg-gray-100 rounded-xl">
            <div class="sm:flex items-center justify-center w-full sm:w-96 sm:h-64 bg-gray-300 rounded dark:bg-gray-700 hidden ">
                <svg class="w-12 h-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
            </div>
            <div className="p-4">
              <div className="w-full bg-gray-200 rounded-full h-8"/>
              <div className='font-bold text-2xl text-white'>Text To Speech, How To Get It On Your Webpages w/ React.</div>
              <div className="w-5/6 bg-gray-200 rounded-full h-2 my-1"/>
              <div className="w-5/6 bg-gray-200 rounded-full h-2 my-1"/>
              <div className="w-3/6 bg-gray-200 rounded-full h-2 my-1"/>
              <div className="flex font-sm">
                <div className="mr-2 mt-1 w-4 h-4 rounded-full bg-gray-200"/>
                <div className="w-2/6 bg-gray-200 rounded-full h-2 my-1 mx-3"/>
                <div className="w-2/6 bg-gray-200 rounded-full h-2 my-1 mx-3"/>
              </div>
            </div>
          </div>
        </div>
      )
    }
    function BlogModal() {
        return (
          <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>
      
              <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  >
                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg  shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm">
                      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="">
                
                          <div className="mt-3 text-center sm:mt-0 sm:ml-4">
                            <Dialog.Title as="h3" className="flex space-x-64 sm:space-x-36 text-lg font-medium leading-6 text-gray-900 pb-3">
                              <p className="text-left pt-2">Share This Post</p>
                              <button onClick={() => setOpen(false)} className="p-2 hover:bg-gray-300 rounded-full"><FaTimes/></button>
                            </Dialog.Title>

                            <div className="mt-2 border border-gray-300 rounded-lg px-4 py-4 text-left flex  whitespace-nowrap ">
                                <img 
                                src={image}
                                className="object-fill rounded-lg h-12 w-12"
                                alt="pops"
                                />
                                <p className="text-ellipsis overflow-hidden py-3 p-2 font-serif">{title}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 px-4 py-3 sm:flex justify-center sm:flex-row sm:px-6">
                        <TwitterShareButton url="google.com">
                        <button
                          type="button"
                          className="inline-flex w-full justify-center rounded-full border border-gray-300 bg-white p-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                
                          ref={cancelButtonRef}
                        >
                        <FaTwitter/>
                        </button>
                        </TwitterShareButton>
                        <FacebookShareButton url="google.com">
                        <button
                          type="button"
                          className="inline-flex w-full justify-center rounded-full border border-gray-300 bg-white p-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                          ref={cancelButtonRef}
                        >
                        <FaFacebook/>
                        </button>
                        </FacebookShareButton>
                        <RedditShareButton url="google.com">
                        <button
                          type="button"
                          className="inline-flex w-full justify-center rounded-full border border-gray-300 bg-white p-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                 
                          ref={cancelButtonRef}
                        >
                        <FaReddit/>
                        </button>
                        </RedditShareButton>
                        <button
                          type="button"
                          className="inline-flex w-full justify-center rounded-full border border-gray-300 bg-white p-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                          onClick={() => {setOpen(false);navigator.clipboard.writeText(postLink)}}
                          ref={cancelButtonRef}
                        >
                        <FaLink/>
                        </button>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition.Root>
        )
      }
      function Line(){
        return(
          <div className="py-3 flex justify-center p-7 sm:p-0 sm:pb-7 ">
            <div className="border border-gray-200 max-w-xl w-full"></div>
          </div>
        )
      }

    return(
      <>
        {loading ?  FeaturedSkeleton() : Featured()}
        {Line()}
        {loading ? ShowPostSkeleton() : ShowPost()}
      </>
    )
}