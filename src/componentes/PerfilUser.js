import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { checkIfIsLoggedIn, getLoggedInUserId, getToken } from '../utils';
const API = process.env.REACT_APP_API;


class Comentarios extends React.Component{

    constructor(props) {
        super(props);
    
        this.state = {
        }
    }
    async eliminar(id){
        const userResponse = window.confirm("¿Estás seguro de querer eliminar este comentario?");
            if (userResponse) {
    
               await axios.delete(API+"/users/comentarios/perfil/"+id, {
                    headers : {
                        authorization : `Bearer ${getToken()}`
                    }
                    }); 
                window.location.reload();
   
            }

    }

    async getComentarios(){
   
        const res2 = await axios.get(API+"/users/a/"+this.props.elnombre, {
            mode: "no-cors"
            });
       
        const id = res2.data['_id']['$oid'];

        const res = await axios.get(`/users/comentarios/perfil/${id}`, {
            headers : {
                authorization : `Bearer ${getToken()}`
            },
            mode: "no-cors",
            }); 

        this.setState({comentarios : res.data});

    }

    componentDidMount(){
        this.getComentarios();
    }

    render(){
        return(
            <div className='container-md'>
                <div>
                    <h4>Comentarios:</h4>
                    {this.state.comentarios ? 
                        <> {
                            this.state.comentarios.map((comentario, index)=>(
                        
                            <div class="p-4 mb-4 bg-light border rounded-4">
                                <div className="row">
                                    <div className="col-sm-1">
                                    </div>
                                    <div className="col">
                                        <h3>{comentario.emisor}</h3>
            
                                        <p>{comentario.contenido}</p>
                                  
                                    </div>
                                </div>

                                <div>{(checkIfIsLoggedIn() && getLoggedInUserId()===comentario.receptor) && <>
                                <button onClick={(e) => this.eliminar(comentario._id)}>Eliminar este comentario de mi perfil</button>
                                </>  }</div>
                            </div>
                          
                            ))

                        }   
                        </>
                        :
                        <>                  
                            <p> No se encontraron comentarios</p>
                        </>
                    }
               </div>
                
            </div>
        );
    }
}

class Libros extends React.Component{

    constructor(props) {
        super(props);
    
        this.state = {
        }
    }

    componentDidMount(){

        this.getLibros();
    }

    async getLibros(){
        
        const res2 = await axios.get(`${API}/users/a/${this.props.elnombre}`, {
            mode: "no-cors"
            });
       
        const id = res2.data['_id']['$oid'];

        const res = await axios.get(`${API}/users/Libros/todos/${id}`,{
            mode: "no-cors"
            });

        this.setState({libros : res.data});

    }
    render(){
        return(
            <div className='container-md'>
            {/* Libros publicados por el usuario */}
        <div className='col-sm'>
            <h4>Libros publicados</h4>
            <table class="table table-hover table-sm">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre libro</th>
                        <th scope="col">Autor</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.libros ? 
                        <> {
                            this.state.libros.map((libro)=>(
                    <tr>
                        <th scope="row">1</th>
                        <td>{libro.Titulo}</td>
                        <td>{this.props.elnombre}</td>
                    </tr>     
                     ))
                        }   
                        </>
                        :
                        <>                  
                            <p> No se encontraron libros</p>
                        </>
                    }
    
                </tbody>
            </table>
        </div></div>);
    }


}



function PerfilUser() {

    const [usuario, setNombre] = useState("");
    const [Foto, setFoto] = useState("");
    const [id, setID] = useState("");
    const [correo, setCorreo] = useState("");
    const [instagram, setIg] = useState("");
    const [facebook, setFb] = useState("");
    const [twitter, setTw] = useState("");
    const [descripcion, setDesc] = useState("");
    const [historial, setHistorial] = useState("");
    const [redes, setRedes] = useState("");
    const [nuevoComentario, setComentario] = useState("");

    let random1 = "randomasd1"
    let random2 = "random1231"

    // Obtener la información del usuario
    let { unnombre } = useParams();
    const elnombre = {unnombre}.unnombre;

    const getUser = async () => {

        const res = await axios.get(API+"/users/a/"+elnombre, {
            mode: "no-cors"
            });
       
        const data = res.data;
        
        setID(data['_id']['$oid']);
        setFoto(data['img']);
        setNombre(data['name']);
        setIg(data['instagram'])
        setCorreo(data['email']);
        setFb(data['facebook']);
        setTw(data['twitter']);
        setDesc(data['biografia']);
        setHistorial(data['mostrarHistorial']);
        setRedes(data['mostrarRedes']);
        

    };

    const agregarComentario = async (nuevoComentario) => {

        if(checkIfIsLoggedIn()){

            if(nuevoComentario){
        await axios.post(`/users/comentarios/perfil/${id}`,{nuevoComentario}, {  
            headers : {
                authorization : `Bearer ${getToken()}`
            },
            mode: "no-cors",
           }); 
        }
        }else{
            window.confirm("Para añadir un comentario debes estar logueado");
        }
    }

   

    useEffect(() => {
            getUser();
            
    });         

    return (
        <div className='container-md mt-3'>
            <div className='row'>

                {/* Foto */}
                <div className='col-sm-2 mt-2'>
                 
                    <img className='img-fluid rounded-circle border d-flex mx-auto ' src={Foto} width="200" alt='fotoPerfil.png'/>
                </div>

                {/* Usuario y descripción */}
                <div className='col-sm-4'>
                    <div className='mt-2'>
                        <h4> {usuario} </h4>
                    </div>
                    <div className='mt-2'>
                        <h6> {descripcion} </h6>
                    </div>
                </div>
                {/* Tabla de redes sociales */}
                <div className='col'> 
                {redes ? <>
                    <div className='mt-2'>
                        <h4>Redes sociales</h4>
                    </div>
                    <div className='mt-2'>
                        <table class="table table-borderless table-hover table-sm ">
                            <tbody>
                                <tr>
                                    <th scope="row">Correo electrónico</th>
                                    <td>{correo}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Facebook</th>
                                    <td>{facebook}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Twitter</th>
                                    <td>{twitter}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Instagram</th>
                                    <td>{instagram}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    </>:<>
                    
                    <div> </div>
                    </>}
                </div>
       
            </div>
    

            <div className='row mt-2'>

                {/* Historial de lectura */}
                <div className='col-sm' >
                {historial ? <>
                    <h4>Historial de lectura</h4>
                    <table class="table table-hover table-sm">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre libro</th>
                                <th scope="col">Autor</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Libro random #1</td>
                                <td>{random1}</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Libro random #2</td>
                                <td>{random2}</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    </>:<>
                    
                    <div> </div>
                    </>
                  }  
                 
                </div>

            <Libros  elnombre={elnombre}/>
            </div>
           
            <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label"><h6>Escribe un comentario</h6></label>
                            <textarea class="form-control" placeholder="Escribe tu biografía..." id="exampleFormControlTextarea1" rows="5" onChange={(e) => setComentario(e.target.value)}></textarea>
                        </div>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button class="btn btn-primary me-md-2" type="button" onClick={(e) => agregarComentario(nuevoComentario)}>Comentar</button>
                        </div>
        
            <Comentarios elnombre={elnombre} />
               


        </div>
    )
}

export default PerfilUser