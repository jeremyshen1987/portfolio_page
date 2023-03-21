import './Portfolio.css'
import shopping_page from './images/fortnite.png'
import cart_page from './images/cart.png'
import weather from './images/weather.png'



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
            <h1 className='section_title' id='project'>Projects:</h1>    
        </div>
        <div className='projects'>

            <div className='single_project'>
                <span className='project_snapshots'><img src={shopping_page} onMouseEnter={e => e.currentTarget.src=cart_page} onMouseLeave = {e => e.currentTarget.src=shopping_page}></img></span>
                <div className='project_detail'>
                
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
            <span className='project_snapshots_2'><img src={weather}></img></span>
                <div className='project_detail_2'>
                    <div className='project_title'>Weather Forecast<span></span></div>
                    <div className='project_description'>
                        <p>Features: Preserve/load search result using localstorage; Display/remove search history; Slider bar on hourly forecast; Celcius fahrenheit conversion.</p> 
                        <p>Layout is clone of Government of Canada Weather page. </p>
                    </div>
                    <div className='project_stack'>JavaScript Only</div>
                    <div className='project_link'>
                        <a href='https://weatherapp-nine-brown.vercel.app/' className='live_view'>Live View</a>
                        <a href='https://github.com/jeremyshen1987/Web_Dev/tree/main/11%20Weather%20App' className='source_code'>Source Code</a>
                    </div>
                </div>
            </div>

        </div>

        

        <div >
            <h1 className='section_title' id='contact'>Contact:</h1>    
        </div>
        <div className='contact'>

        </div>


        </>
    )
}

function newSource(e, src){
    console.log(e)
    e.currentTarget.src = src
}

export default Portfolio;