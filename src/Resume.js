import { useState } from "react"
import { Document,Page, pdfjs  } from "react-pdf"
import "react-pdf/dist/esm/Page/TextLayer.css"
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();

//component not in use

export default function Resume(){

    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }


    let pageComponent_Arr = []

    if(numPages !== null){
        for( let i = 1; i <= numPages; i ++ ){
            pageComponent_Arr.push(<Page pageNumber={i} />)
        }
    }

    return(
        <>
        
        <div className="resume_container">
            <Document file='Resume_Jeremy_Shen.pdf' onLoadSuccess={onDocumentLoadSuccess} loading='render pdf...' canvasBackground='grey'>
            
                {pageComponent_Arr.map(p => p)}

            </Document>
        </div>

        </>

    )

}

