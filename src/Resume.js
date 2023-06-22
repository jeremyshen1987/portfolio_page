import { useState } from "react"
import { Document,Page, pdfjs  } from "react-pdf"

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
  ).toString();

export default function Resume(){

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return(
        <>

        <h1>hi</h1>
        <div>
            <Document file='Developer.pdf' onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
        </div>
        </>

    )

}

