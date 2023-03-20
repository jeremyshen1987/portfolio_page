import './Portfolio.css'


function Portfolio(){

    return(
        <>

        <div className='intro'>

            <div className='intro_one'>
                <span></span><h1>Hi, I'm Jeremy,</h1>
                
            </div>

            <div className='intro_two'>
                <span></span><h1>I want to be a web developer</h1>
            </div>

        </div>

        <div >
            <h1 className='section_title'>Projects:</h1>
        </div>
        <div className='projects'>

            <div className='single_project'>
                <span className='project_snapshots'></span>
                <div className='project_detail'>
                    <span className='test'>test</span>
                    <div className='project_title'>Shopping site <span></span></div>
                    <div className='project_description'>
                        <p>Built on 3rd party API. Features include Register/Sign-in; Search bar; Display order history, Various filters, Shopping cart preview.</p> 
                        <p>Frontend is on Vercel. Backend is hosted on Cyclic. I was planning on using AWS EC2 with a self signed certificate. However it doesn't work out since Vercel blocked the insecure connection</p>
                    </div>
                    <div className='project_stack'>Framework: React, ExpressJS, MongoDB</div>
                    <div className='project_link'>
                        <a href='https://mern-alpha-lac.vercel.app/' className='live_view'>Live View</a>
                        <a href='https://github.com/jeremyshen1987/Web_Dev/tree/main/MERN_Frontend' className='source_code'>Source Code</a>
                    </div>
                </div>
            </div>

            <div className='single_project'>

            </div>

        </div>

        <div className='section_title'><h1>Contact:</h1></div>
        </>
    )
}

export default Portfolio;