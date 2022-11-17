import React from 'react'

const AcercaDe = () => {
    return (
        <div className='container-md mt-3'>

                <div class="p-4 mb-3 bg-white border rounded-4">
                    <h4>Sobre el proyecto</h4>
                    <p>
                        Biblioteca Kowloon es un proyecto realizado para el ramo de "Taller de Integración III". Empieza buscando
                        los libros que más te interesen o también prueba a crear tus propios textos y comparte con tus amigos tus 
                        obras literarias.
                    </p>
                </div>
                
                <div class="p-4 mb-3 bg-white border rounded-4">
                    <h4>Sobre nosotros</h4>
                    <p>
                        Somos un grupo de estudiantes llevando a cabo este proyecto para
                        el ramo de Taller de Integración III. Estamos cursando nuestro 6to
                        semestre en la universidad.
                    </p>
                </div>
                
                <div class="p-4 bg-white border rounded-4">
                    <h4 className='mb-3'>Equipo de desarrollo</h4>
                    <div className='row row-cols-1 row-cols-md-3'>

                        <div className='col mb-3'>
                            <div class="card">
                                <img src="/avatar.png" class="card-img-top imgProfSize" alt="foto.png"/>
                                <div class="card-body">
                                    <h5 class="card-title">Ignacio Ortiz</h5>
                                    <p class="card-text">
                                        Desarrollador frontend del proyecto.
                                    </p>
                                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                </div>
                            </div>
                        </div>
                        <div className='col mb-3'>
                            <div class="card">
                                <img src="/avatar.png" class="card-img-top imgProfSize" alt="foto.png"/>
                                <div class="card-body">
                                    <h5 class="card-title">Tamara Ojeda</h5>
                                    <p class="card-text">
                                        Desarrolladora frontend y backend del proyecto.
                                    </p>
                                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                </div>
                            </div>
                        </div>
                        <div className='col mb-3'>
                            <div class="card">
                                  <img src="/avatar.png" class="card-img-top imgProfSize" alt="foto.png"/>
                                <div class="card-body">
                                    <h5 class="card-title">José Alderete</h5>
                                    <p class="card-text">
                                        Desarrollador backend del proyecto.
                                    </p>
                                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                </div>
                            </div>
                        </div>
                        <div className='col mb-3'>
                            <div class="card">
                                  <img src="/avatar.png" class="card-img-top imgProfSize" alt="foto.png"/>
                                <div class="card-body">
                                    <h5 class="card-title">Sebastián Cisternas</h5>
                                    <p class="card-text">
                                        Desarrollador frontend y base de datos
                                    </p>
                                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                </div>
                            </div>
                        </div>
                        <div className='col mb-3'>
                            <div class="card">
                                  <img src="/avatar.png" class="card-img-top imgProfSize" alt="foto.png"/>
                                <div class="card-body">
                                    <h5 class="card-title">Matias Millacura</h5>
                                    <p class="card-text">
                                    Desarrollador frontend y backend
                                    </p>
                                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div class="card">
                                  <img src="/avatar.png" class="card-img-top imgProfSize" alt="foto.png"/>
                                <div class="card-body">
                                    <h5 class="card-title">Rodrigo Sevilla</h5>
                                    <p class="card-text">
                                        Desarrollador frontend
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
    )
}

export default AcercaDe