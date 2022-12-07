import { Link } from "react-router-dom";
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {FaTwitter, FaFacebook, FaLink, FaTimes, FaShareAlt, FaReddit} from 'react-icons/fa'
import {
  FacebookShareButton,
  RedditShareButton,
  TwitterShareButton,
} from "react-share";

let blogPosts = [
    {
        date:"December 15 ,2022",
        title:"AI: Machine Learning, Potato Salad Recipes",
        description:
        "Get access to over 20+ pages including a dashboard layout, charts,",
        link:"/blog/machine-learning-potato-salad-recipes",
        img:"https://upload.wikimedia.org/wikipedia/en/e/e0/J.A.R.V.I.S._%28MCU%29.png"
    },
    {
        date:"November 15 ,2022",
        title:"Beautiful Soup: How to web scrape with python.",
        description:
        "Sometimes an api isn't available for the data you want and you have",
        link:'/blog/how-to-web-scrape-with-python',
        img:"https://scribbleghost.net/wp-content/uploads/2020/07/Beautiful-Soup-4-Pot-1.svg"
    },
    {
        date:"December 1 ,2022",
        title:"Text To Speech, How To Get It On Your Webpages w/ React.",
        description:"I've been told that a blog is a good way to illustrate my",
        link:'/blog/text-to-speech-v1',
        img:"https://helios-i.mashable.com/imagery/articles/05vBXJ1bDUunSpOX6pCSxgm/hero-image.fill.size_1248x702.v1638327907.jpg"
    }
]

export default function Blog(){
    const cancelButtonRef = useRef(null);
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [image, setImg] = useState("https://helios-i.mashable.com/imagery/articles/05vBXJ1bDUunSpOX6pCSxgm/hero-image.fill.size_1248x702.v1638327907.jpg")
    const [postLink, setPostLink] = useState("blank");

    function handleUpdate(post){
        (setOpen(true));
        (setTitle(post.title));
        setPostLink("cordell.in"+post.link)
        setImg(post.img);
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

      function Post(post){
        return(
            <>
            <div className="flex justify-start py-3">
                    <img 
                    src={post.img}
                    className="h-28 w-28 object-cover"
                    alt=""
                    />
                    <div className="px-4 flex flex-col space-y-1 font-serif rounded-lg hover:bg-gray-100">
                        <Link to={post.link} className='font-bold'>{post.title}</Link>
                        <p className='text-gray-500'>{post.description}</p>
                        <div className="flex font-sm">
                            <img src="https://avatars.githubusercontent.com/u/88411627?v=4" 
                                className="mr-2 mt-1 w-4 h-4 rounded-full"
                                alt="idk"/>
                            <p className="pr-2 text-gray-600">Cordell Browne</p>
                            <p className="px-2 text-gray-600">{post.date}</p>
                            <FaShareAlt size={20} onClick={() => handleUpdate(post)} className='mx-2 m-1 cursor-pointer hover:border border-gray-600 p-1 rounded-lg'/>
                        </div>
                    </div>
                </div>
                <></>
            </>
        )

    }

    return(
        <div>
            <div className=" flex items-center justify-center min-h-full">
                <div className="max-w-sm sm:max-w-xl">
                    <div className="border border-gray-500  my-4"></div>
                    {blogPosts.map((post) => (
                        Post(post)
                    ))}
                </div>
            </div>
            <>{BlogModal()}</>
        </div>
    )
}