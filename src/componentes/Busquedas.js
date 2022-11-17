import React, { useState } from "react"
import { useParams } from "react-router-dom";

const API = process.env.REACT_APP_API;

class Tabla extends React.Component{

    constructor(props) {
        super(props);
    
        this.state = {
    
        }
    }

    async filtrarUsuarios(busqueda){
 
        const res = await fetch(`${API}/users`);
        const data = await res.json();
        var resultadosBusqueda = data.filter((elemento)=>{  

        if (elemento.name.toString().toLowerCase().includes(busqueda.toLowerCase())) {
            return elemento;

        }else{
            return 0;

        }});
    
        this.setState({usuarios : resultadosBusqueda});
    }

    async filtrarLibros(busqueda){
 
        const res = await fetch(`${API}/users/Libros`);
        const data = await res.json();

        // console.log(data)
        var resultadosBusqueda = data.filter((elemento)=>{  

        if (elemento.Titulo.toString().toLowerCase().includes(busqueda.toLowerCase())) {
            return elemento;

        } else {
            return 0;
        }});
    
        this.setState({libros : resultadosBusqueda});
    }

    redir(search){
        window.location= "../perfil/"+search;
    }
    
    redirInfo(search){
        window.location= "../biblioteca/info/"+search;
    }

    componentDidMount(){
        this.filtrarUsuarios(this.props.busqueda);
        this.filtrarLibros(this.props.busqueda);
    }

    render(){
        return(
            <div className='container-md'>
                <h2 class="fw-bold mt-3">Resultados relacionados a: "{this.props.busqueda}"</h2>
                <div>
                    <h4>Usuarios encontrados:</h4>
                    {this.state.usuarios ? 
                        <> {
                            this.state.usuarios.map((usuario, index)=>(
                                <div className="p-4 mb-2 border rounded-4">
                                    <div className="row " onClick={() => this.redir(usuario .name)}>
                                        <div className="col-sm-1">
                                            <img src= {usuario.img} class="imgSearch     rounded-1" alt="fotoPerfil"/>
                                        </div>
                                        <div className="col">
                                            <h3>{usuario.name}</h3>
                                            <p>{usuario.biografia}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }   
                        </>
                        :
                        <>                  
                            <p> No se encontraron usuarios</p>
                        </>
                    }
                    
                </div>
                <div>
                    <h4 className="mt-4">Libros encontrados:</h4>
                    {this.state.libros ? 
                        <> {
                            this.state.libros.map((libro, index)=>(
                            <div class="p-4 mb-2 border rounded-4">
                                <div className="row" onClick={() => this.redirInfo(libro._id)}>
                                    <div className="col-sm-1">
                                        <img src= {libro.img} height="150" width="150" class="img-fluid rounded-1" alt="fotoPerfil"/>
                                    </div>
                                    <div className="col">
                                        <h3>{libro.Titulo}</h3>
                                        <p>{libro.descripcion}</p>
                                    </div>
                                </div>
                            </div>
                            ))
                        }   
                        </>
                        :
                        <>                  
                            <p> No se encontraron libros</p>
                        </>
                    }
                   
                </div>
            </div>
        );
    }
}

export const Busquedas = () => {

    const API = process.env.REACT_APP_API;
    const imagen = process.env.imagen;
    const { buscado } = useParams();
    const busqueda1 = {buscado}.buscado;

    return (
        <div className='container-md border-danger'>
            <Tabla busqueda={busqueda1} />
        </div>
    )
}

export default Busquedas;