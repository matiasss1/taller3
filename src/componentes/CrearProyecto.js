import React, { useEffect } from 'react'
import { checkIfIsLoggedIn, getLoggedInUserId  } from '../utils';
import ReactDOM from 'react-dom';

import { useState, useRef } from 'react';
import axios from 'axios'; 
import JoditEditor from 'jodit-react'

const logeado = checkIfIsLoggedIn();
const idUser = getLoggedInUserId();
const API = process.env.REACT_APP_API;

const CrearProyecto = () => {

    const config ={
        buttons: ["bold", "italic", "underline", "link", "unlink", "source"],
    }
   
    const [libro1,  setProyecto] = useState("");
    const[value, setValue] = useState('')
    const getUser = async () => {

        const res = await axios.get(`${API}/users/${idUser}`, {
            mode: "no-cors",
            });
       
        const data = res.data;
        
        setProyecto(data['libro1']);
    };
   

    const RichTextEditor = ({setValue, config}) => {
        const Editor = useRef(null);
    return <JoditEditor ref = {Editor}
                        onChange={content => setValue(content)} 
                        config={config}
                        />
}  

    useEffect(() => {
        getUser();
          });

    return (
        <div className='container-md mt-2'>
            {logeado && (
                <>
                    <div>
                        <h3>Editor de Texto</h3>
                    </div>
                    <div class="d-grid gap-2 d-md-block mb-2">
                        {/* Dropwdown */}
                        <button type="button" class="btn btn-primary dropdown-toggle me-1" data-bs-toggle="dropdown" aria-expanded="false">
                            Proyecto
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Guardar proyecto</a></li>
                            <li><a class="dropdown-item" href="#">Descargar proyecto</a></li>

                            {/* Llama a un modal */}
                            <li><a class="dropdown-item" href="#">Editar información</a></li>
                        </ul>

                        {/* Publicar */}
                        <button type="button" className='btn btn-success ms-1'>Publicar proyecto</button>
                    </div>

                    {/* Editor de texto*/}
                    <div className='col-sm'>
                    <RichTextEditor setValue={setValue} config={config}  ></RichTextEditor>
                    {value}

                    </div>
                </>
            )}
            
            {!logeado && (
                <>
                    <div class="card text-center">
                        <div class="card-header">
                            Error
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Necesitas estar logueado</h5>
                            <p class="card-text">
                                Estás intentando acceder a un sitio exclusivo para usuarios registrados.
                            </p>
                            <p>
                                Crea una cuenta para acceder a este y más beneficios.
                            </p>
                            {value}
                                <a href="#" class="btn btn-primary mb-2">Crear cuenta</a>
                                <h6 className="text-center text-secondary">¿Ya tienes una cuenta? <a href="/login">Inicia sesión</a></h6>
 
                        </div>
                        <div class="card-footer text-muted">
                        
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default CrearProyecto