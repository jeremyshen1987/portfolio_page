import { useRef } from 'react'
import './Portfolio.css'

import album_page from './images/album.png'
import search_result from './images/search.png'
import shopping_page from './images/fortnite.png'
import cart_page from './images/cart.png'


function Portfolio(){

    const name = useRef()
    const email = useRef()
    const message = useRef()
    const receiveCopy = useRef()


    return(
        <>

        <section className='intro_section' id='intro'>

            <div className='intro_one'>
                <span></span><h1>Hi, I'm Jeremy,</h1>
            </div>

            <div className='intro_two'>
                <span></span><h1>I am a web developer</h1>
            </div>

        </section>

        <section className='about_section'>
            <div>
                <h1 className='section_title' id='about'>About me:</h1>    
            </div>

            <div className='about'>
                <p>My programming journey started in late 2021, I taught myself Python and built two web scrappers for Canadian E-Commerce sites as a result.</p>
                <p>In early 2022, I dedicate my full atention to web development since I enjoy solving technical challenges to build interactive website.</p>
                <p>I'm constantly learning as a web developer, I will be learning typescript next!</p>
            </div>
        </section>

        <section className='project_section'>
            <div >
                <h1 className='section_title' id='project'>Projects:</h1>    
            </div>



            <div className='projects'>

                <div className='single_project'>
                    <span className='project_snapshots_2'><img src={album_page} onMouseEnter={e => e.currentTarget.src = search_result} onMouseLeave = {e => e.currentTarget.src= album_page}></img></span>
                        <div className='project_detail_2'>
                            <div className='project_title'>Music App<span></span></div>
                            <div className='project_description'>
                                <p>Build on NextJS. You can search for albums, artists, get personalized song recommendations. </p> 
                                <p>Responsive design.</p>
                            </div>
                            <div className='project_stack'>End to end tested with Jest, React testing library and MSW.</div>
                            <div className='project_link'>
                                <a href='https://after-work.vercel.app/' className='live_view'>Live View</a>
                                <a href='https://github.com/jeremyshen1987/AfterWork' className='source_code'>Source Code</a>
                            </div>
                        </div>
                </div>

                <div className='single_project'>
                    <span className='project_snapshots'><img src={shopping_page} onMouseEnter={e => e.currentTarget.src=cart_page} onMouseLeave = {e => e.currentTarget.src=shopping_page}></img></span>
                    <div className='project_detail'>
                    
                        <div className='project_title'>Shopping site <span></span></div>
                        <div className='project_description'>
                            <p>Built on 3rd party API. User can Register/Sign-in, use search bar and various filter, get order history and shopping cart preview.</p> 
                            <p>Frontend and Backend are hosted on Vercel and Cyclic, respectively. </p>
                        </div>
                        <div className='project_stack'>Framework: React, ExpressJS, MongoDB</div>
                        <div className='project_link'>
                            <a href='https://mern-alpha-lac.vercel.app/' className='live_view'>Live View</a>
                            <a href='https://github.com/jeremyshen1987/Web_Dev/tree/main/MERN_Frontend' className='source_code'>Source Code</a>
                        </div>
                    </div>
                </div>



            </div>

        </section>
        

        <section className='contact_section'>
            <div >
                <h1 className='section_title' id='contact'>Contact:</h1>    
            </div>
            
            <div className='contact_container'>
                
                <div className='contact_description'>
                    <p>There are always room for improvement.</p>
                    <p>Advices? Questions? Let me know!</p>
                </div>

                <div className='contact_form'>
                    <form method='post' onSubmit={send}>
                        <fieldset>
                            <legend>Contact Me</legend>
                            
                            <div className='labelAndInput'>
                                <label htmlFor='name'>Name: </label>
                                <input type='text' id='name' ref={name} required></input>
                            </div>

                            <div className='labelAndInput'>
                                <label htmlFor='email'>Email: </label>
                                <input type='email' id='email' ref={email} required></input>
                            </div>

                            <div className='labelAndInput'>
                                <label htmlFor='message'>Message: </label>
                                <textarea type='text' id='message' ref={message} placeholder='Powered by AWS SES' required></textarea>
                            </div>

                            <div className='checkbox'>
                                <input type='checkbox' id='checkbox_email_copy' ref={receiveCopy} defaultChecked></input>
                                <label htmlFor='checkbox_email_copy'>Send me a copy of the message </label>
                            </div>

                            <div className='submit'>
                            
                                <button>Submit</button>
                            </div>

                        </fieldset>
                        
                    </form>
                </div>
            </div>
        </section>

        <footer>
            
            <div className='icons'>

                <a href='mailto: jeremyshen1987@gmail.com'><svg class="fill-gray-800 dark:fill-white group-hover:fill-green dark:group-hover:fill-mustard" stroke="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><title>Email</title><path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z"></path></svg></a>
                <a href='https://github.com/jeremyshen1987/Web_Dev'><svg class="fill-gray-800 dark:fill-white group-hover:fill-green dark:group-hover:fill-mustard" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.3em" height="1.3em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><title>GitHub</title><path fill-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" clip-rule="evenodd"></path></svg></a>
                <a href='https://www.linkedin.com/in/jeremy-shen-b708853b/'><svg class="fill-gray-800 dark:fill-white group-hover:fill-green dark:group-hover:fill-mustard" stroke="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><title>Linkedin</title><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg></a>
            </div>
            <p>Build by Jeremy Shen with &#10084; &nbsp; 2023</p>

        </footer>

        

        <div id='overlay'>
            <div id='please_wait'>Please Wait...</div>
        </div>

        </>
    )

    async function send(e){

        const overlay = document.getElementById('overlay')
        overlay.style.display = 'block'
        e.preventDefault()

        const form = {
            name: name.current.value,
            email: email.current.value,
            message: message.current.value,
            receiveCopy: receiveCopy.current.checked
        }

        const data = await fetch('https://cyan-frog-hose.cyclic.app/email', {

            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form)
          
        })

        const result = await data.json()

        alert(result.msg)

        overlay.style.display = 'none'
        
    }


}


export default Portfolio;