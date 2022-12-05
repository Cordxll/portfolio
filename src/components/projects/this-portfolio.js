import pic from "../../assets/portfolio-code.png"

export default function ThisPortfolio(){
    return(
        <>
        <div className='sm:px-32 md:px-40 lg:px-52'>
            <h1 className='font-bold text-4xl pt-4 pb-2'>This Portfolio</h1>
            <p className='py-2'>Source code for this website. It was built with react, go check the
                <span>
                    <a href="https://github.com/Cordxll/portfolio" target="_blank" rel="noreferrer" className='text-blue-600'> GitHub Repo</a>
                </span>
            </p>
            
           <img src={pic} alt="whats good?"/>
        </div>
        </>
    )
}