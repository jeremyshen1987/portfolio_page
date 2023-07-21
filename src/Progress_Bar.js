import { useEffect } from "react";

export default function ProgressBar(){

    useEffect(() => {

        function position(){
            console.log('position')
            

            let positionY = window.scrollY
            const height = document.body.scrollHeight - window.innerHeight

            const progress = positionY / height


            console.log('percentage', progress)
        }

        let pastTime = 0


        function throttle(){
            
            
            const timeNow = (new Date()).getTime()



            if(timeNow - pastTime > 200){

                pastTime = timeNow
                position()

            }else
                return

        }

        window.addEventListener('scroll', throttle)

        return () => {window.removeEventListener('scroll', throttle)}

    }, [])


}