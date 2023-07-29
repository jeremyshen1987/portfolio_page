import { useEffect } from "react";

export default function ProgressBar(){

    // position progress bar next to nav bar
    useEffect(() => {


      
      }, [])

    useEffect(() => {

        const nav = document.querySelector('nav')
        const nav_height = getComputedStyle(nav).height
      

        const progress_bar = document.querySelector('.progress_bar')

        progress_bar.style.top = nav_height
        console.log('p bar', progress_bar)


        function position(){
            console.log('position')
            

            let positionY = window.scrollY
            const height = document.body.scrollHeight - window.innerHeight

            let progress_percentage = parseInt((positionY / height) * 100)

            if(progress_percentage <= 3){
                progress_percentage = 0
            }

            if(progress_percentage >= 96){
                progress_percentage = 100
            }

            progress_bar.style.width = `${progress_percentage}%`

            console.log('percentage', progress_percentage)
        }

        let pastTime = 0


        function throttle(){
            
            
            const timeNow = (new Date()).getTime()



            if(timeNow - pastTime > 50){

                pastTime = timeNow
                position()

            }else
                return

        }

        window.addEventListener('scroll', throttle)

        return () => {window.removeEventListener('scroll', throttle)}

    }, [])


    return(
        <div className="progress_bar"></div>
    )
}