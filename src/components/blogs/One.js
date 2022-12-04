export default function One(){
    var d2 = new Date("2022/12/01")
    var d1= new Date()
    let imageUrl = "https://static01.nyt.com/images/2021/10/26/arts/26succession-item/26succession-item-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
    let blogOneP1 = "Questions. Ask them, please! One of the most useful methods"+
    "of learning mathematics is to repeat the following steps: realize you don’t understand some- thing,"+
    " work to formulate a precise question about it (this is sometimes difficult!), ask it, and then think"+ 
    "about the response. You are all welcome to do this as often as you like in section, in office hours, or"+
    "via email. But even if you can’t formulate your question precisely (or it’s a meta-mathematical question,"+
    " like “why is Concept X relevant”), ask anyway!"
    let quote = "'Journal writing, when it becomes a ritual for transformation, is not only life-changing but life-expanding.' Jen Williamson"

    return(
        <>
        <div class="px-60">
        <div class="text-gray-500"></div>
        </div>
        <div class="px-40 pt-6">
        <h1 class="pt-4 text-4xl font-serif"><div>My First Blog:</div> What are my goals for this blog?</h1>
        <p class="pt-2 text-sm">Dec 1, 2022</p>
        <p class="pb-4 text-sm">{Math.floor(Math.abs(d1-d2)/86400000)} days ago</p>
        <p class="text-sm italic text-gray-500 px-40 py-4">{quote}</p>
        <h1 class="py-4 text-2xl font-extrabold">Reasoning</h1>
        <div class="">{blogOneP1}</div>
        <img src={imageUrl} alt="NYC" class="py-8 block"/>
        <h1 class="py-4 text-2xl font-extrabold">Proof</h1>
        <video class="py-4" width="640" height="480" controls>
            <source src="https://arabesques.s3.us-east-2.amazonaws.com/IMG_5598.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
        <div class="">{blogOneP1}</div>
        <h1 class="py-4 text-2xl font-extrabold">Some More Gibberish</h1>
        <div class="">{blogOneP1}</div>
        <iframe class="py-4" width="720" height="480"src="https://www.youtube.com/embed/nA9UZF-SZoQ" title="Potato Party"></iframe>
        <h1 class="py-4 text-2xl font-extrabold">In Conclusion</h1>
        <div class="">{blogOneP1}</div>
        </div>
        </>
    )
}