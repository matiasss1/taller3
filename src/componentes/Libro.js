import React, {useState, useEffect} from 'react'

import {Document, Page} from 'react-pdf/dist/esm/entry.webpack';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const API = process.env.REACT_APP_API;
function Libro() {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [link, setLink] = useState("")
    const [popularidad, setPopularidad] = useState("")
    let { nombreLibro } = useParams();
    let { idLibro } = useParams();
    const nombrelibro = {nombreLibro}.nombreLibro;
    const idlibro = {idLibro}.idLibro;

    
    async function visitas(){
        const res = await axios.get(`${API}/users/Libros/${idlibro}`, {
            mode: "no-cors",
            });
        const data = res.data
        var num_visitas = data['0']['Popularidad']

        setPopularidad(parseInt(num_visitas)+1)
        setLink(data['0']['url']);
        await axios.put(`${API}/users/Libros/${popularidad}/${idlibro}`);
        
        
    };
    

    


    function onDocumentLoadSuccess({ numPages: nextNumPages }) {
        setNumPages(nextNumPages);
    }
    
    function changePage(offSet){
        setPageNumber(prevPageNumber => prevPageNumber + offSet);
    }
    
    function changePageBack(){
        changePage(-1)
    }
    
    function changePageNext(){
        changePage(1)
    }
    
    // Obtiene el ancho del div del libro    
    let [valor, setValor] = useState("");

    window.addEventListener("resize", function(){
        let divSize = document.getElementById("documento");
        setValor(divSize.offsetWidth);
        // console.log(valor);
    });
    useEffect(() => {
        visitas();
    
        });
    return (
        <div className='container-md'>
            <div class="p-4 mt-3 mb-4 bg-light border rounded-4">
                <center>
                    <div id='documento'>
                        <Document
                            file={{url : link}}
                            onLoadSuccess={onDocumentLoadSuccess}
                            >
                            <Page 
                                pageNumber={pageNumber}
                                width={valor}
                                
                            />
                        </Document>
                    </div>
                    

                    <div>
                        <div className='mt-3'>
                            <p> Página {pageNumber} de {numPages}</p>
                        </div>
                        
                        <button 
                            type="button"
                            disabled={pageNumber <= 1}
                            onClick={changePageBack}
                            className="btn btn-primary m-1"
                        >
                            Anterior
                        </button>
                        <button
                            type="button"
                            disabled={pageNumber >= numPages}
                            onClick={changePageNext}
                            className="btn btn-primary m-1"
                        >
                            Siguiente
                        </button>
                    </div>
                </center>
            </div>
        </div>
    );
}
export default Libro;