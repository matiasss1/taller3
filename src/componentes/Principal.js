import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
const API = process.env.REACT_APP_API;

class Principal extends React.Component{

    constructor(props) {
        super(props);
    
        this.state = {
            books : ""
        }
    }

async redireccionar(ide) {
    window.location = "/biblioteca/info/"+ide;
}

async getBooks(){
        
    const res = await axios.get(API+"/users/Libros", {
        mode: "no-cors"
    });
    
    const data = res.data;

    this.setState({books:data});
}; 

componentDidMount(){
    this.getBooks(); 
}

render(){
    return (
        <div>
            <div className='container-md mt-3'>
                <div class="card">
                    <div class="card-header">
                        Bienvenida
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Bienvenido a "Biblioteca Kowloon"</h5>
                        <p class="card-text">
                            Biblioteca Kowloon es un proyecto realizado para el ramo de "Taller de Integración III". Empieza buscando
                            los libros que más te interesen o también prueba a crear tus propios textos y comparte con tus amigos tus 
                            obras literarias.
                        </p>
                    </div>
                </div>
            </div>

            <div class="container-md">
                <br></br>
                {/* Carousel */}
                <h4>Lo más leído esta semana</h4>
                <div class="mb-4">
                    <div id="carouselExampleIndicators" class="carousel carousel-dark slide" data-bs-ride="true">
                        {/* Contenido del carousel */}
                        <div className='pb-4'>
                            <div class="carousel-inner">
                                <div class="carousel-item active mb-4">
                                    <div class="card ">
                                        <div class="row g-0 d-flex justify-content-center">
                                            <div class="col-sm-5 d-flex justify-content-center">
                                                <img src="portada.png" class="rounded imgSize" alt="..."/>
                                            </div>
                                            <div class="col-sm-5 d-flex justify-content-center">
                                                <div className='card-body'>
                                                    <h5 class="card-title">Oui oui madam!</h5>
                                                    <p class="card-text">Comedia moderna sobre una pareja bien disparejaaaaaa
                                                    aaaaaa aa a a aaaaaaaaaa aaaaaaaaaa aaaaaaaaaaa 
                                                    aaaaaaa aaaaaaaaaaa aaaaaaaaaaaaa aaaaaa aaaaaaaa aaaa.</p>
                                                    <div>
                                                        <h5 className='card-title'>Etiquetas</h5>
                                                        <span class="badge text-bg-secondary me-1">Comedia</span>
                                                        <span class="badge text-bg-secondary me-1">Romance</span>
                                                        <span class="badge text-bg-secondary me-1">Novela</span>
                                                    </div>
                                                    <div>
                                                        <br></br>
                                                        <a className='btn btn-primary btn-sm'>Ver el libro</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item mb-4">
                                    <div class="card ">
                                        <div class="row g-0 d-flex justify-content-center">
                                            <div class="col-sm-5 d-flex justify-content-center">
                                                <img src="portada2.jpg" class="rounded imgSize" alt="..."/>
                                            </div>
                                            <div class="col-md-5">
                                                <div className='card-body'>
                                                    <h5 class="card-title">Oui oui madam!</h5>
                                                    <p class="card-text">Comedia moderna sobre una pareja bien disparejaaaaaa
                                                    aaaaaa aa a a aaaaaaaaaa aaaaaaaaaa aaaaaaaaaaa 
                                                    aaaaaaa aaaaaaaaaaa aaaaaaaaaaaaa aaaaaa aaaaaaaa aaaa.</p>
                                                    <div>
                                                        <h5 className='card-title'>Etiquetas</h5>
                                                        <span class="badge text-bg-secondary me-1">Comedia</span>
                                                        <span class="badge text-bg-secondary me-1">Romance</span>
                                                        <span class="badge text-bg-secondary me-1">Novela</span>
                                                    </div>
                                                    <div>
                                                        <br></br>
                                                        <a className='btn btn-primary btn-sm'>Ver el libro</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item mb-4">
                                    <div class="card ">
                                        <div class="row g-0 d-flex justify-content-center">
                                            <div class="col-sm-5 d-flex justify-content-center">
                                                <img src="portada3.jpg" class="rounded imgSize" alt="..."/>
                                            </div>
                                            <div class="col-md-5">
                                                <div className='card-body'>
                                                    <h5 class="card-title">Oui oui madam!</h5>
                                                    <p class="card-text">Comedia moderna sobre una pareja bien disparejaaaaaa
                                                    aaaaaa aa a a aaaaaaaaaa aaaaaaaaaa aaaaaaaaaaa 
                                                    aaaaaaa aaaaaaaaaaa aaaaaaaaaaaaa aaaaaa aaaaaaaa aaaa.</p>
                                                    <div>
                                                        <h5 className='card-title'>Etiquetas</h5>
                                                        <span class="badge text-bg-secondary me-1">Comedia</span>
                                                        <span class="badge text-bg-secondary me-1">Romance</span>
                                                        <span class="badge text-bg-secondary me-1">Novela</span>
                                                    </div>
                                                    <div>
                                                        <br></br>
                                                        <a className='btn btn-primary btn-sm'>Ver el libro</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Indicadores carousel */}
                            <div class="carousel-indicators me-0 ms-0 border rounded-2">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                        </div>
    
                        {/* Botones prev - next del carousel */}
                        <div className='container'>
                        <button class="carousel-control-prev pb-5" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next pb-5" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                        </div>
                        
                    </div>
                </div>

                {/* Secciones de libros */}
                <h4 class="fw-bold mt-3">Lo más popular</h4>
                <div class="mb-4">
                    <div class="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-5 g-4">
                        
                    {this.state.books ? 
                        <> 
                        {
                            this.state.books.map((libro)=>(
                                <div class="col d-flex justify-content-center">
                                    <div class="card h-100 cardSize">
                                        <div class="d-flex justify-content-center">
                                            <img src= {libro.img} class="card-img-top imgSize" width={"200px"} height={"300px"} alt="portada.png"/>
                                        </div>
                                        <div class="border-top card-body">
                                            <h5 class="card-title">{libro.Titulo}</h5>
                                            <p class="card-text">{libro.descripcion}</p>
                                            <div className='mb-2'>
                                                {libro.etiquetas && 
                                                <>
                                                    {libro.etiquetas.split(",").map((index) => (
                                                        <span class="badge text-bg-secondary me-1">{index}</span>
                                                    ))
                                                    }
                                                </>}
                                            </div>
                                            <div>
                                                <button className='btn btn-primary btn-sm' onClick={(e) => this.redireccionar(libro._id)}>Ver más</button>
                                            </div>
                                        </div>
                                        <div class="card-footer">
                                            <small>Subido por: {libro.nombreAutor}</small>
                                        </div>
                                    </div>
                                </div>                         
                            ))
                        }   
                        </>
                        :
                        <>                  
                            <p> No se han encontrado libros</p>
                        </>
                    }

                    </div>
                </div>

                {/* Publicaciones recientes */}
                <h4 class="fw-bold mt-3">Publicaciones recientes</h4>
                <div class="p-4 mb-4 bg-light border rounded-4">
                    <div class="row row-cols-1 row-cols-md-4 g-4">
                        {/* Libro 1 */}
                        <div class="col d-flex justify-content-center">
                            <div class="card h-100 cardSize">
                                <div class="d-flex justify-content-center">
                                    <img src="pan.png" class="card-img-top imgSize" alt="..."/>
                                </div>

                                <div class="card-body">
                                    <h5 class="card-title">Oui oui madam!</h5>
                                    <p class="card-text">Comedia moderna sobre una pareja bien dispareja.</p>
                                    <div>
                                        <span class="badge text-bg-secondary m-1">Comedia</span>
                                        <span class="badge text-bg-secondary m-1">Romance</span>
                                        <span class="badge text-bg-secondary m-1">Novela</span>
                                    </div>
                                </div>
                                <div class="card-footer">
                                     <small>Subido por: Ignacio</small>
                                </div>
                            </div>
                        </div>
                        {/* Libro 2 */}
                        <div class="col d-flex justify-content-center">
                            <div class="card h-100 cardSize">
                                <div class="d-flex justify-content-center">
                                    <img src="portada2.jpg" class="card-img-top imgSize" alt="..."/>
                                </div>
                                
                                <div class="card-body">
                                    <h5 class="card-title">Siempre a tu lado</h5>
                                    <p class="card-text">Basada en la historia real del fiel perro japonés Hachikō.</p>
                                    <div>
                                        <span class="badge text-bg-secondary m-1">Emocional</span>
                                        <span class="badge text-bg-secondary m-1">Drama</span>
                                        <span class="badge text-bg-secondary m-1">Hechos reales</span>
                                    </div>
                                </div>
                                <div class="card-footer">
                                     <small>Subido por: Ignacio</small>
                                </div>
                            </div>
                        </div>
                        {/* Libro 3 */}
                        <div class="col d-flex justify-content-center">
                            <div class="card h-100 cardSize">
                                <div class="d-flex justify-content-center">
                                    <img src="portada3.jpg" class="card-img-top imgSize" alt="..."/>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Libro del nuevo conductor</h5>
                                    <p class="card-text">Preguntas y respuestas del examen de conducción licencia clase B.</p>
                                    <div>
                                        <span class="badge text-bg-secondary m-1">Utilidad</span>
                                        <span class="badge text-bg-secondary m-1">Estudio</span>
                                        <span class="badge text-bg-secondary m-1">Instructico</span>
                                    </div>
                                </div>
                                <div class="card-footer">
                                     <small>Subido por: Ignacio</small>
                                </div>
                            </div>
                        </div>
                        {/* Libro 4 */}
                        <div class="col d-flex justify-content-center">
                            <div class="card h-100 cardSize">
                                <div class="d-flex justify-content-center">
                                    <img src="pan.png" class="card-img-top imgSize" alt="..."/>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Oui oui madam!</h5>
                                    <p class="card-text">Comedia moderna sobre una pareja bien dispareja.</p>
                                    <div>
                                        <span class="badge text-bg-secondary m-1">Comedia</span>
                                        <span class="badge text-bg-secondary m-1">Romance</span>
                                        <span class="badge text-bg-secondary m-1">Novela</span>
                                    </div>
                                </div>
                                <div class="card-footer">
                                     <small>Subido por: Ignacio</small>
                                </div>
                            </div>
                        </div>
                        {/* Libro 5 */}
                        <div class="col d-flex justify-content-center">
                            <div class="card h-100 cardSize">
                                <div class="d-flex justify-content-center">
                                    <img src="portada2.jpg" class="card-img-top imgSize" alt="..."/>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Siempre a tu lado</h5>
                                    <p class="card-text">Basada en la historia real del fiel perro japonés Hachikō.</p>
                                    <div>
                                        <span class="badge text-bg-secondary m-1">Emocional</span>
                                        <span class="badge text-bg-secondary m-1">Drama</span>
                                        <span class="badge text-bg-secondary m-1">Hechos reales</span>
                                    </div>
                                </div>
                                <div class="card-footer">
                                     <small>Subido por: Ignacio</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recomendaciones aleatorias */}
                <h4 class="fw-bold mt-3">Recomendaciones aleatorias</h4>
                <div class="p-4 mb-4 bg-light border rounded-4">
                    <div class="row row-cols-1 row-cols-md-4 g-4">
                        {/* Libro 1 */}
                        <div class="col d-flex justify-content-center">
                            <div class="card h-100 cardSize">
                                <div class="d-flex justify-content-center">
                                    <img src="pan.png" class="card-img-top imgSize" alt="..."/>
                                </div>

                                <div class="card-body">
                                    <h5 class="card-title">Oui oui madam!</h5>
                                    <p class="card-text">Comedia moderna sobre una pareja bien dispareja.</p>
                                    <div>
                                        <span class="badge text-bg-secondary m-1">Comedia</span>
                                        <span class="badge text-bg-secondary m-1">Romance</span>
                                        <span class="badge text-bg-secondary m-1">Novela</span>
                                    </div>
                                </div>
                                <div class="card-footer">
                                     <small>Subido por: Ignacio</small>
                                </div>
                            </div>
                        </div>
                        {/* Libro 2 */}
                        <div class="col d-flex justify-content-center">
                            <div class="card h-100 cardSize">
                                <div class="d-flex justify-content-center">
                                    <img src="portada2.jpg" class="card-img-top imgSize" alt="..."/>
                                </div>
                                
                                <div class="card-body">
                                    <h5 class="card-title">Siempre a tu lado</h5>
                                    <p class="card-text">Basada en la historia real del fiel perro japonés Hachikō.</p>
                                    <div>
                                        <span class="badge text-bg-secondary m-1">Emocional</span>
                                        <span class="badge text-bg-secondary m-1">Drama</span>
                                        <span class="badge text-bg-secondary m-1">Hechos reales</span>
                                    </div>
                                </div>
                                <div class="card-footer">
                                     <small>Subido por: Ignacio</small>
                                </div>
                            </div>
                        </div>
                        {/* Libro 3 */}
                        <div class="col d-flex justify-content-center">
                            <div class="card h-100 cardSize">
                                <div class="d-flex justify-content-center">
                                    <img src="portada3.jpg" class="card-img-top imgSize" alt="..."/>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Libro del nuevo conductor</h5>
                                    <p class="card-text">Preguntas y respuestas del examen de conducción licencia clase B.</p>
                                    <div>
                                        <span class="badge text-bg-secondary m-1">Utilidad</span>
                                        <span class="badge text-bg-secondary m-1">Estudio</span>
                                        <span class="badge text-bg-secondary m-1">Instructico</span>
                                    </div>
                                </div>
                                <div class="card-footer">
                                     <small>Subido por: Ignacio</small>
                                </div>
                            </div>
                        </div>
                        {/* Libro 4 */}
                        <div class="col d-flex justify-content-center">
                            <div class="card h-100 cardSize">
                                <div class="d-flex justify-content-center">
                                    <img src="pan.png" class="card-img-top imgSize" alt="..."/>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Oui oui madam!</h5>
                                    <p class="card-text">Comedia moderna sobre una pareja bien dispareja.</p>
                                    <div>
                                        <span class="badge text-bg-secondary m-1">Comedia</span>
                                        <span class="badge text-bg-secondary m-1">Romance</span>
                                        <span class="badge text-bg-secondary m-1">Novela</span>
                                    </div>
                                </div>
                                <div class="card-footer">
                                     <small>Subido por: Ignacio</small>
                                </div>
                            </div>
                        </div>
                        {/* Libro 5 */}
                        <div class="col d-flex justify-content-center">
                            <div class="card h-100 cardSize">
                                <div class="d-flex justify-content-center">
                                    <img src="portada2.jpg" class="card-img-top imgSize" alt="..."/>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Siempre a tu lado</h5>
                                    <p class="card-text">Basada en la historia real del fiel perro japonés Hachikō.</p>
                                    <div>
                                        <span class="badge text-bg-secondary m-1">Emocional</span>
                                        <span class="badge text-bg-secondary m-1">Drama</span>
                                        <span class="badge text-bg-secondary m-1">Hechos reales</span>
                                    </div>
                                </div>
                                <div class="card-footer">
                                     <small>Subido por: Ignacio</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

}

export default Principal;