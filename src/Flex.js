import './Flex.css';


function Flex(){

    return(
        <>
            <nav className='navbar'>

                <div className='header_title'>Jeremy Shen</div>

                <a className='mobile_toggle_menu' onClick={toggle}>
                    <span className='mobile_bar'></span>
                    <span className='mobile_bar'></span>
                    <span className='mobile_bar'></span>
                </a>

                <div className='nav_tabs'>
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a onClick={() => scroll('project')}>Projects</a></li>
                        <li><a onClick={() => scroll('contact')}>Contact</a></li>
    
                    </ul>
                </div>
    
            </nav>
    
        </>
    )

    function toggle(){

        const nav_buttons = document.getElementsByClassName('nav_tabs')[0]
        nav_buttons.classList.toggle('active')

    }

    function scroll(id){

        document.getElementById(id).scrollIntoView()

        if(window.innerWidth < 1000){
            toggle()
        }
        
    }

}

export default Flex;


