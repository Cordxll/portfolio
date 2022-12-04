import { Link } from "react-router-dom";

let blogPosts = [
    {
        date:"December 15 ,2022",
        title:"AI: Machine Learning, Potato Salad Recipes",
        description:
        "Get access to over 20+ pages including a dashboard layout, charts,"+
        " kanban board, calendar, and pre-order E-commerce & Marketing pages.",
        link:"/blog/machine-learning-potato-salad-recipes"
    },
    {
        date:"November 15 ,2022",
        title:"Beautiful Soup: How to web scrape with python.",
        description:
        "Sometimes an api isn't available for the data you want and you have"+
        " to take action into your own hands.",
        link:'/blog/how-to-web-scrape-with-python'
    },
    {
        date:"December 1 ,2022",
        title:"My First Blog: What are my goals for this blog?",
        description:"I've been told that a blog is a good way to illustrate my"+
        "capabilities as a programmer in the article a will discuss more the direction"+
        " that I will take this blog and ideas for projects that I am sitting on as of now",
        link:'/blog/what-are-my-goals-for-this-blog'
    }
]

export default function Blog(){
    return(
        <div>
            <div class="px-10 inline-flex ">
                <ol class="relative border-l border-gray-700 ">
                    {blogPosts.map((post) => (
                        <li class="mb-6 ml-4">
                            <div class="absolute w-3 h-3 bg-gray-00 rounded-full mt-1.5 -left-1.5 border-gray-900 bg-gray-700"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-sky-700 italic ">{post.date}</time>
                            <h3 class="text-lg font-semibold font-mono">{post.title}</h3>
                            <p class="mb-1 text-base font-normal font-mono" style={{inlineSize: '600px'}}>{post.description}</p>
                            <Link to={post.link} class="font-mono inline-flex items-center py-2 text-sm font-medium hover:text-blue-600">Read more <svg class="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></Link>
                        </li>
                    ))}                
                </ol>
            </div>
        </div>
    )
}