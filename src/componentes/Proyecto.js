import { checkIfIsLoggedIn, getLoggedInUserId } from '../utils';
import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios'; 

const logeado = checkIfIsLoggedIn();
const idUser = getLoggedInUserId();
const API = process.env.REACT_APP_API;

const Proyecto = () => {
    const [id, setID] = useState("");
    
    const [nuevoNombreP, setnComentario] = useState("");
    const [nuevaDes,  setnDescripcion] = useState("");

    const [Nombre_Libro, setLibro] = useState("");
    const [descripcion,  setDescripcion] = useState("");

    const [nuevoNombreP2, setnComentario2] = useState("");
    const [nuevaDes2,  setnDescripcion2] = useState("");
    const [Nombre_Libro2, setLibro2] = useState("");
    const [descripcion2,  setDescripcion2] = useState("");

    const [nuevoNombreP3, setnComentario3] = useState("");
    const [nuevaDes3,  setnDescripcion3] = useState("");
    const [Nombre_Libro3, setLibro3] = useState("");
    const [descripcion3,  setDescripcion3] = useState("");


    const [usuario,  setNombre] = useState("");

    const [descripcionPDF,  setDescripcionPDF] = useState("");
    const [etiquetasPDF,  setEtiquetasPDF] = useState("");
    const [tituloPDF,  setTituloPDF] = useState("");
    const [etiketas,  setEt] = useState("");
    const autorPDF = getLoggedInUserId();
    const [file, setPDF] = useState();
    const [nombreAutorPDF, setAutorPdf] = useState("");
    

    const getUser = async () => {
        const res = await axios.get(`${API}/users/${idUser}`, {
            mode: "no-cors",
            });
       
        const data = res.data;

        setNombre(data['name']);
        setID(data['_id']['$oid']);
        setAutorPdf(data['name']);
    };

    const agregarEtiquetas = async (etiquetas) => {
        setEt(etiquetas.split(","));
    }
    
    const crearlibro1 = async () => {      
        await axios.post(`${API}/users/nuevoproyecto/${idUser}`,{
            nuevoNombreP, nuevaDes
        }); 
        window.location = "/proyecto/crear";
    };  
    
    const crearlibro2 = async (t) => {      
        await axios.post(`/users/nuevoproyecto2/${idUser}`,{
            nuevoNombreP2, nuevaDes2
        }); 
        window.location = "/proyecto/crear";
    };

    const crearlibro3 = async () => {      
        await axios.post(`/users/nuevoproyecto3/${idUser}`,{
            nuevoNombreP3, nuevaDes3
        }); 
        window.location = "/proyecto/crear";
    };
    
    const editarlibro1 = async () => {      
        await axios.put(`${API}/users/nuevoproyecto/${idUser}`,{
            nuevoNombreP, nuevaDes
        }); 
        window.location = "/proyecto";
    };

    const editarlibro2 = async () => {      
        await axios.put(`${API}/users/nuevoproyecto/${idUser}`,{
            nuevoNombreP, nuevaDes
        }); 
        window.location = "/proyecto";
    };

    const editarlibro3 = async () => {      
        await axios.put(`${API}/users/nuevoproyecto/${idUser}`,{
            nuevoNombreP, nuevaDes
        }); 
        window.location = "/proyecto";
    }; 
    
    useEffect(() => {
        getUser();
    
        });

    return (
        <div className='container-md'>
            {logeado && (
                <>
                    <h2 className='mb-3'>¿Qué quieres hacer?</h2>
                    <div className='row'>
                       {/* Columna izquierda */}
                       <div className='col-sm-3 mb-3'>
                            <h4>Opciones</h4>
                            {/* Botones verticales */}
                            <div>
                                <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <button class="nav-link active d-grid gap-2 mb-2" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Mis proyectos</button>
                                    {/* <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Crear proyecto</button>*/}
                                    <button class="nav-link d-grid" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Subir proyecto</button>
                                </div>
                            </div>                           

                        </div>

                        {/* Columna derecha */}
                        <div className='col-sm'>
                            
                            <div class="tab-content" id="v-pills-tabContent">
                                    {/* Mis proyectos */}
                                    <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
                                        <h4>Mis proyectos</h4>
                                        <div className='p-4 mb-4 bg-light border rounded-2'>
                                            <table class="table table-hover table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Nombre proyecto</th>
                                                        <th scope="col">Descripción</th>
                                                        <th scope="col">Acciones</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                        <th scope="row">1</th>
                                                             <td><a href='/proyecto/crear'> {usuario} </a></td>
                                                        <td>{descripcion}</td>
                                                      
                                                        <td className='d-flex align-content-md-center'>
                                                            <button type="button" class="btn btn-secondary btn-sm me-1">
                                                            <i class="bi bi-trash"> Eliminar</i>
                                                            </button>
                                                            <button type="button" class="btn btn-secondary btn-sm ms-1" 
                                                                    data-bs-toggle="modal" 
                                                                    data-bs-target="#modalLibro1"
                                                                    data-bs-whatever="@mdo">
                                                                 <i class="bi bi-wrench"> Editar 
                                                                
                                                                </i>

                                                            </button>


                                                            <button type="button" class="btn btn-secondary btn-sm  ms-1" 
                                                                    data-bs-toggle="modal" 
                                                                    data-bs-target="#modalCreacion"
                                                                    data-bs-whatever="@mdo">
                                                                 <i class="bi bi-brush-fill"> Crear
                                                                </i>

                                                            </button>
                                                         
                                                          
                                                        </td> 
                                                        
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td><a href='/proyecto/crear'> {usuario} </a></td>
                                                        <td>{usuario}</td>
                                                        <td className='d-flex align-content-md-center'>
                                                            <button type="button" class="btn btn-secondary btn-sm me-1">
                                                                <i class="bi bi-trash"> Eliminar</i>
                                                            </button>
                                                            <button type="button" class="btn btn-secondary btn-sm ms-1" 
                                                                    data-bs-toggle="modal" 
                                                                    data-bs-target="#modalLibro2"
                                                                    data-bs-whatever="@mdo">
                                                                <i class="bi bi-wrench"> Editar 
                                                                
                                                                </i>
                                                                
                                                            </button>

                                                            <button type="button" class="btn btn-secondary btn-sm ms-1" 
                                                                    data-bs-toggle="modal" 
                                                                    data-bs-target="#modalCreacion2"
                                                                    data-bs-whatever="@mdo">
                                                                 <i class="bi bi-brush-fill"> Crear
                                                                </i>

                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td><a href='/proyecto/crear'> {usuario} </a></td>
                                                        <td>{usuario}</td>
                                                        <td className='d-flex align-content-md-center'>
                                                            <button type="button" class="btn btn-secondary btn-sm me-1">
                                                            <i class="bi bi-trash"> Eliminar</i>
                                                            </button>
                                                            <button type="button" class="btn btn-secondary btn-sm ms-1" 
                                                                    data-bs-toggle="modal" 
                                                                    data-bs-target="#modalLibro3"
                                                                    data-bs-whatever="@mdo">
                                                                 <i class="bi bi-wrench"> Editar 
                                                                
                                                                </i>
                                                                
                                                            </button>
                                                            <button type="button" class="btn btn-secondary btn-sm ms-1" 
                                                                    data-bs-toggle="modal" 
                                                                    data-bs-target="#modalCreacion3"
                                                                    data-bs-whatever="@mdo">
                                                                 <i class="bi bi-brush-fill"> Crear
                                                                </i>

                                                            </button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    
                                    {/* Modal libro Creacion 1*/}
                                       <div class="modal" id="modalCreacion" tabindex="-1" role="dialog">
                                          <div class="modal-dialog  modal-lg" role="document">
                                            <div class="modal-content">
                                              <div class="modal-header">
                                                <h5 class="modal-title">Crear Proyecto</h5>
                                             
                                              </div>
                                              <div class="modal-body">
                                              <h5>Nombre del proyecto</h5>
                                              <div className='col mb-3'>
                                                <input class="form-control" placeholder="Nombre de tu Proyecto" id="exampleFormControlTextarea1" rows="1" onChange={(e) => setnComentario(e.target.value)} required></input>
                                                </div>
                                                <div className='col'>
                                                    <h5>Descripción del proyecto</h5>
                                                </div>
                                                <div className='col mb-3'>
                                                <textarea class="form-control" placeholder="Descripcion de tu Proyecto" id="exampleFormControlTextarea1" rows="3" onChange={(e) => setnDescripcion(e.target.value)} ></textarea>
                                                </div>
                                                <div className='col'>
                                                    <h5>Autor</h5>
                                                </div>
                                                <div className='col mb-3'>
                                                    <h6>  {usuario}</h6>
                                                </div>

                                                <div className='col'></div>
                                                    
                                              <div class="modal-footer">
                                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                              <button class="btn btn-primary me-md-2" type="button" onClick={(e) => crearlibro1(nuevoNombreP)}>Crear Proyecto</button>
                                                
                                              </div>
                                            </div>
                                            </div>
                                          </div>
                                        </div>
                                       {/* Modal libro 1*/}
                                       <div class="modal" id="modalLibro1" tabindex="-1" role="dialog">
                                          <div class="modal-dialog  modal-lg" role="document">
                                            <div class="modal-content">
                                              <div class="modal-header">
                                                <h5 class="modal-title">Crear Proyecto</h5>
                                             
                                              </div>
                                              <div class="modal-body">
                                              <h5>Nombre del proyecto</h5>
                                              <div className='col mb-3'>
                                                <textarea class="form-control" placeholder="Escribe tu biografía..." id="exampleFormControlTextarea1" rows="3" onChange={(e) => setnComentario(e.target.value)}></textarea>
                                                </div>
                                                <div className='col'>
                                                    <h5>Descripción del proyecto</h5>
                                                </div>
                                                <div className='col mb-3'>
                                                <textarea class="form-control" placeholder="Escribe tu biografía..." id="exampleFormControlTextarea1" rows="3" onChange={(e) => setnDescripcion(e.target.value)}></textarea>
                                                </div>
                                                <div className='col'>
                                                    <h5>Etiquetas</h5>
                                                </div>
                                                <div className='col mb-3'>
                                                    
                                                    <div class="input-group mb-1">
                                                    <input type="text" class="form-control" placeholder="Separar por comas..." aria-label="Recipient's username" aria-describedby="button-addon2" onChange={(e) => setEtiquetasPDF(e.target.value)} required />
                                                    <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={(e) => agregarEtiquetas(etiquetasPDF)}>+</button>
                                                </div>

                                                {etiketas &&
                                                    <>
                                                        {
                                                            etiketas.map((index) => (
                                                                <span class="badge text-bg-primary m-1">{index}</span>
                                                            ))
                                                        }
                                                    </>
                                                }
                                                </div>
                                                <div className='col'>
                                                    <h5>Portada</h5>
                                                </div>
                                                <div className='col mb-3'>
                                                <div class="input-group mb-3">
                                                    <input type="file" class="form-control" id="inputGroupFile01" required/>
                                                </div>
                                                </div>

                                                <div className='col'>
                                                    <h5>Autor</h5>
                                                </div>
                                                <div className='col mb-3'>
                                                    <h6>  {usuario}</h6>
                                                </div>

                                                <div className='col'></div>
                                                    
                                              <div class="modal-footer">
                                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                              <button class="btn btn-primary me-md-2" type="button" onClick={(e) => crearlibro1(nuevoNombreP)}>Crear Proyecto</button>
                                                
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        </div>
                                           {/* Modal libro Creacion 2*/}
                                       <div class="modal" id="modalCreacion2" tabindex="-1" role="dialog">
                                          <div class="modal-dialog  modal-lg" role="document">
                                            <div class="modal-content">
                                              <div class="modal-header">
                                                <h5 class="modal-title">Crear Proyecto</h5>
                                               
                                              </div>
                                              <div class="modal-body">
                                              <h5>Nombre del proyecto</h5>
                                              <div className='col mb-3'>
                                                <input class="form-control" placeholder="Nombre de tu Proyecto" id="exampleFormControlTextarea1" rows="1" onChange={(e) => setnComentario(e.target.value)} required></input>
                                                </div>
                                                <div className='col'>
                                                    <h5>Descripción del proyecto</h5>
                                                </div>
                                                <div className='col mb-3'>
                                                <textarea class="form-control" placeholder="Descripcion de tu Proyecto" id="exampleFormControlTextarea1" rows="3" onChange={(e) => setnDescripcion(e.target.value)}></textarea>
                                                </div>
                                                <div className='col'>
                                                    <h5>Autor</h5>
                                                </div>
                                                <div className='col mb-3'>
                                                    <h6>  {usuario}</h6>
                                                </div>

                                                <div className='col'></div>
                                                    
                                              <div class="modal-footer">
                                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                              <button class="btn btn-primary me-md-2" type="button" onClick={(e) => crearlibro1(nuevoNombreP)}>Crear Proyecto</button>
                                                
                                              </div>
                                            </div>
                                            </div>
                                          </div>
                                        </div>
                                         {/* Modal libro 2*/}
                                       <div class="modal" id="modalLibro2" tabindex="-1" role="dialog">
                                          <div class="modal-dialog modal-lg" role="document">
                                            <div class="modal-content">
                                              <div class="modal-header">
                                                <h5 class="modal-title">Editar Proyecto 2</h5>
                                                
                                              </div>
                                              <div class="modal-body">
                                              <h5>Nombre del proyecto</h5>
                                              <div className='col mb-3'>
                                                    <input onChange={(e) => setnComentario2(e.target.value)} type="text" class="form-control" id="recipient-name" placeholder='Nombre...' required/>
                                                </div>
                                                <div className='col'>
                                                    <h5>Descripción del proyecto</h5>
                                                </div>
                                                <div className='col mb-3'>
                                                    <textarea onChange={(e) => setnDescripcion2(e.target.value)} class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Escriba aquí...'></textarea>
                                                </div>
                                              
                                                <div className='col'>
                                                    <h5>Etiquetas</h5>
                                                </div>
                                                <div className='col mb-3'>
                                                    <div class="input-group mb-1">
                                                        <input type="text" class="form-control" placeholder="Separar por comas..." aria-label="Recipient's username" aria-describedby="button-addon2" required/>
                                                        <button class="btn btn-outline-secondary" type="button" id="button-addon2">+</button>
                                                    </div>
                                                    <span class="badge text-bg-primary m-1">Libro</span>
                                                    <span class="badge text-bg-primary m-1">Historia</span>
                                                </div>
                                                <div className='col'>
                                                    <h5>Portada</h5>
                                                </div>
                                                <div className='col mb-3'>
                                                <div class="input-group mb-3">
                                                    <input type="file" class="form-control" id="inputGroupFile01"/>
                                                </div>
                                                </div>

                                                <div className='col'>
                                                    <h5>Autor</h5>
                                                </div>
                                                <div className='col mb-3'>
                                                    <h6>  {usuario}</h6>
                                                </div>

                                                <div className='col'></div>
                                                    
                                              <div class="modal-footer">
                                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                                <button type="button" class="btn btn-primary" onClick={(e) => crearlibro2(nuevoNombreP2)}>Crear Proyecto</button>
                                                
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        </div>
                                           {/* Modal libro Creacion 3*/}
                                       <div class="modal" id="modalCreacion3" tabindex="-1" role="dialog">
                                          <div class="modal-dialog  modal-lg" role="document">
                                            <div class="modal-content">
                                              <div class="modal-header">
                                                <h5 class="modal-title">Crear Proyecto</h5>
                                               
                                              </div>
                                              <div class="modal-body">
                                              <h5>Nombre del proyecto</h5>
                                              <div className='col mb-3'>
                                                <input class="form-control" placeholder="Nombre de tu Proyecto" id="exampleFormControlTextarea1" rows="1" onChange={(e) => setnComentario(e.target.value)} required></input>
                                                </div>
                                                <div className='col'>
                                                    <h5>Descripción del proyecto</h5>
                                                </div>
                                                <div className='col mb-3'>
                                                <textarea class="form-control" placeholder="Descripcion de tu Proyecto" id="exampleFormControlTextarea1" rows="3" onChange={(e) => setnDescripcion(e.target.value)}></textarea>
                                                </div>
                                                <div className='col'>
                                                    <h5>Autor</h5>
                                                </div>
                                                <div className='col mb-3'>
                                                    <h6>  {usuario}</h6>
                                                </div>

                                                <div className='col'></div>
                                                    
                                              <div class="modal-footer">
                                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                              <button class="btn btn-primary me-md-2" type="button" onClick={(e) => crearlibro1(nuevoNombreP)}>Crear Proyecto</button>
                                                
                                              </div>
                                            </div>
                                            </div>
                                          </div>
                                        </div>
                                        {/* Modal libro 3*/}
                                       <div class="modal" id="modalLibro3" tabindex="-1" role="dialog">
                                          <div class="modal-dialog modal-lg" role="document">
                                            <div class="modal-content">
                                              <div class="modal-header">
                                                <h5 class="modal-title">Editar Proyecto 3</h5>
                                            
                                                
                                              </div>
                                              <div class="modal-body">
                                              <h5>Nombre del proyecto</h5>
                                                <div className='col mb-3'>
                                                    <input onChange={(e) => setnComentario3(e.target.value)} type="text" class="form-control" id="recipient-name" placeholder='Nombre...' required/>
                                                </div>
                                                <div className='col'>
                                                    <h5>Descripción del proyecto</h5>
                                                </div>
                                                <div className='col mb-3'>
                                                    <textarea onChange={(e) => setnDescripcion3(e.target.value)} class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Escriba aquí...'></textarea>
                                                </div>
                                            
                                                <div className='col'>
                                                    <h5>Etiquetas</h5>
                                                </div>
                                                <div className='col mb-3'>
                                                    <div class="input-group mb-1">
                                                        <input type="text" class="form-control" placeholder="Separar por comas..." aria-label="Recipient's username" aria-describedby="button-addon2" required />
                                                        <button class="btn btn-outline-secondary" type="button" id="button-addon2">+</button>
                                                    </div>
                                                    <span class="badge text-bg-primary m-1">Libro</span>
                                                    <span class="badge text-bg-primary m-1">Historia</span>
                                                </div>
                                                <div className='col'>
                                                    <h5>Portada</h5>
                                                </div>
                                                <div className='col mb-3'>
                                                <div class="input-group mb-3">
                                                    <input type="file" class="form-control" id="inputGroupFile01"/>
                                                </div>
                                                </div>

                                                <div className='col'>
                                                    <h5>Autor</h5>
                                                </div>
                                                <div className='col mb-3'>
                                                    <h6>  {usuario}</h6>
                                                </div>

                                                <div className='col'></div>
                                                    
                                              <div class="modal-footer">
                                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                              <button type="button" class="btn btn-primary" onClick={(e) => crearlibro3(nuevoNombreP3)}>Crear Proyecto</button>
                                                
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        </div>
                                      {/* Crear un proyecto 
                                    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
                                        <h4>Crear un proyecto</h4>
                                        <div class="row row-cols-2 p-4 mb-4 bg-light border rounded-2">
                                            <div className='col'>
                                                <h5>Nombre del proyecto</h5>
                                            </div>
                                            <div className='col mb-3'>
                                                <input onChange={(e) => setnProyecto(e.target.value)} type="text" class="form-control" id="recipient-name" placeholder='Nombre...'/>
                                            </div>

                                            <div className='col'>
                                                <h5>Descripción del proyecto</h5>
                                            </div>
                                            <div className='col mb-3'>
                                                <textarea onChange={(e) => setnDescripcion(e.target.value)} class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Escriba aquí...'></textarea>
                                            </div>

                                            <div className='col'>
                                                <h5>Etiquetas</h5>
                                            </div>
                                            <div className='col mb-3'>
                                                <div class="input-group mb-1">
                                                    <input type="text" class="form-control" placeholder="Separar por comas..." aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">+</button>
                                                </div>
                                                <span class="badge text-bg-primary m-1">Libro</span>
                                                <span class="badge text-bg-primary m-1">Historia</span>
                                            </div>

                                            <div className='col'>
                                                <h5>Portada</h5>
                                            </div>
                                            <div className='col mb-3'>
                                                <div class="input-group mb-3">
                                                    <input type="file" class="form-control" id="inputGroupFile01"/>
                                                </div>
                                            </div>

                                            <div className='col'>
                                                <h5>Autor</h5>
                                            </div>
                                            <div className='col mb-3'>
                                                {usuario}
                                            </div>

                                            <div className='col'></div>
                                           
                                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                                <button class="btn btn-primary me-md-2" type="button" onClick={(e) => editNyD(nuevoPr)}>Crear</button>
                                            </div>

                                        </div>
                                    </div>
                                */}

                                    {/* Subir un proyecto (PDF) */}
                                    <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">
                                        <h4>Subir archivo</h4>
                                        <div class="row row-cols-2 p-4 mb-4 bg-light border rounded-2">
                                            <div className='col'>
                                                <h5>Nombre del libro</h5>
                                            </div>
                                            <div className='col mb-3'>
                                                <input onChange={(e) => setTituloPDF(e.target.value)} type="text" class="form-control" id="recipient-name" placeholder='Nombre...' required/>
                                            </div>

                                            <div className='col'>
                                                <h5>Descripción del libro</h5>
                                            </div>
                                            <div className='col mb-3'>
                                                <textarea onChange={(e) => setDescripcionPDF(e.target.value)} class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Escriba aquí...'></textarea>
                                            </div>

                                            <div className='col'>
                                                <h5>Etiquetas</h5>
                                            </div>
                                            
                                            <div className='col mb-3'>
                                                <div class="input-group mb-1">
                                                    <input type="text" class="form-control" placeholder="Separar por comas..." aria-label="Recipient's username" aria-describedby="button-addon2" onChange={(e) => setEtiquetasPDF(e.target.value)} required />
                                                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">+</button>
                                                </div>
                                            </div>

                                            <form action={API+"/file/"+descripcionPDF+"/"+etiquetasPDF+"/"+tituloPDF+"/"+autorPDF+"/"+nombreAutorPDF} method='POST' href="#" enctype="multipart/form-data"  class="input-group">
                                                <div className='row  row-cols-2'>
                                                    <div className='col'>
                                                        <h5>Portada</h5>
                                                    </div>
                                                    <div className='col mb-3'>
                                                        <div class="input-group mb-3">
                                                            <input type="file" name="portada" class="form-control" id="inputGroupFile01" accept=".jpg, .jpeg, .png" required/>
                                                        </div>
                                                    </div>
    
                                                    <div className='col'>
                                                        <h5>Autor</h5>
                                                    </div>
                                                    <div className='col mb-3'>
                                                        <div className='col mb-3'>
                                                            <input type="text" class="form-control" id="recipient-name" placeholder={usuario} disabled required/>
                                                        </div>
                                                    </div>
                                                
                                                    <div className='col'>
                                                        <h5>Seleccionar libro</h5>
                                                    </div>
                                                
                                                    <div className='col mb-3'>
                                                        <div class="input-group mb-3">
                                                            <input type="file" name="file" class="form-control" id="inputGroupFile01" enctype="multipart/form-data" accept=".pdf" required/>
                                                        </div>
                                                    </div>
                                                    <div className='col'></div>
                                                    <div className='col container-sm'>
                                                    
                                                        <button type="submit" class="mb-3 btn btn-primary container-md" id="inputGroupFileAddon04" >Subir libro</button>
                                            
                                                    </div>
                                                </div>
                                                
                                            </form>
                                        
                                        </div>
                                    </div>
                                </div>
                        </div>
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

export default Proyecto