import React from 'react'
import axios from 'axios';
import { checkIfIsLoggedIn, getToken, getLoggedInUserId } from '../utils';
import { useParams } from "react-router-dom";
const API = process.env.REACT_APP_API;

const logeado = checkIfIsLoggedIn();

const InfoLibro = () => {
    let { idLibro } = useParams();
    const laid = {idLibro}.idLibro;

    return(<InfoL idlibro={laid} />)
}

class InfoL extends React.Component{

    constructor(props) {
        super(props);
    
        this.state = {

        ID : "",
        img : "",
        img_perf : "",
        Titulo : "",
        etiquetas : "",
        autor : "",
        descripcion : "",
        filename : "",
        fileid : ""
    
        }
    }

    async redireccionar(e){

        window.location = "/Libro/"+this.props.idlibro+"/"+this.state.filename;
    
    }

    async eliminar(id){
        const userResponse = window.confirm("¿Estás seguro de querer eliminar este comentario?");
            if (userResponse) {
    
               await axios.delete(API+"/users/comentarios/libro/"+this.props.idlibro, {
                    headers : {
                        authorization : `Bearer ${getToken()}`
                    }
                    }); 
                window.location.reload();
   
            }

    }

    async agregarComentario(nuevoComentario){

        if(checkIfIsLoggedIn()){

            const autor = await axios.get(`/users/${getLoggedInUserId()}`, {  
                mode: "no-cors"
               }); 
            


        if(nuevoComentario){
            const img_perf = autor.data['img']
          await axios.post(`/users/comentarios/libro/${this.props.idlibro}/${autor.data['name']}`,{nuevoComentario,img_perf}, {  
            headers : {
                authorization : `Bearer ${getToken()}`
            },
            mode: "no-cors",
           }); 
           
        window.location.reload();
        }
        }else{
            window.confirm("Para añadir un comentario debes estar logueado");
        }
    }

    async getComentarios(){
   
        const res = await axios.get(`${API}/users/comentarios/libro/${this.props.idlibro}`, {
            headers : {
                authorization : `Bearer ${getToken()}`
            },
            mode: "no-cors",
            }); 
            console.log(res)

        this.setState({comentarios : res.data});

    }

    async obtenerLibro(){

        const libro = await axios.get(`/users/Libros/id/${this.props.idlibro}`, {  
            mode: "no-cors"
           });         

        this.setState({ Titulo : libro.data['0']['Titulo']})
        this.setState({ img : libro.data['0']['img']})
        this.setState({ etiquetas : libro.data['0']['etiquetas'].split(",")})
        this.setState({ autor : libro.data['0']['autor'] })
        this.setState({ descripcion : libro.data['0']['descripcion']})
        this.setState({ filename : libro.data['0']['filename']})


    }


    componentDidMount(){
        this.obtenerLibro();
        this.getComentarios();
    }

    render(){
        return (
            <div className='container-md mt-3'>
                <div class="p-4">
                    <div class="card">
                        <div class="row g-0 d-flex justify-content-center">
                            <div class="col-sm-5 d-flex justify-content-center">
                                <img src= {this.state.img} class="rounded imgSize" alt="portadaLibro"/>
                            </div>
                            <div class="col-md-5">
                                <div className='card-body'>
                                    <h5 class="card-title">{this.state.Titulo}</h5>
                                    <p class="card-text">{this.state.descripcion}</p>
                                    <div>
                                        <h5 className='card-title'>Etiquetas</h5>
                                        {this.state.etiquetas &&
                                            <>
                                                {this.state.etiquetas.map((index) => (    
                                                    <span class="badge text-bg-secondary me-1">{index}</span>
                                                ))}
                                            </>
                                        }
                                    </div>
    
                                    {/* Calificación del libro */}
                                    <div>
                                        {logeado && (
                                            <> 
                                                <h5 className='card-title mb-1 mt-3'>Calificación</h5>
                                                <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off"/>
                                                <label class="btn btn-secondary btn-sm me-1" for="option1"><i class="bi bi-star"></i></label>
    
                                                <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off"/>
                                                <label class="btn btn-secondary btn-sm me-1" for="option2"><i class="bi bi-star"></i></label>
    
                                                <input type="radio" class="btn-check" name="options" id="option3" autocomplete="off"/>
                                                <label class="btn btn-secondary btn-sm me-1" for="option3"><i class="bi bi-star"></i></label>
    
                                                <input type="radio" class="btn-check" name="options" id="option4" autocomplete="off"/>
                                                <label class="btn btn-secondary btn-sm me-1" for="option4"><i class="bi bi-star"></i></label>
    
                                                <input type="radio" class="btn-check" name="options" id="option5" autocomplete="off"/>
                                                <label class="btn btn-secondary btn-sm me-1" for="option5"><i class="bi bi-star"></i></label>
                                            </>
                                        )}
    
                                        {!logeado && (
                                            <>
                                                <h5 className='card-title mb-1 mt-3'>Calificación</h5>
                                                <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" disabled/>
                                                <label class="btn btn-secondary btn-sm me-1" for="option1"><i class="bi bi-star"></i></label>
    
                                                <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off" disabled/>
                                                <label class="btn btn-secondary btn-sm me-1" for="option2"><i class="bi bi-star"></i></label>
    
                                                <input type="radio" class="btn-check" name="options" id="option3" autocomplete="off" disabled/>
                                                <label class="btn btn-secondary btn-sm me-1" for="option3"><i class="bi bi-star"></i></label>
    
                                                <input type="radio" class="btn-check" name="options" id="option4" autocomplete="off" disabled/>
                                                <label class="btn btn-secondary btn-sm me-1" for="option4"><i class="bi bi-star"></i></label>
    
                                                <input type="radio" class="btn-check" name="options" id="option5" autocomplete="off" disabled/>
                                                <label class="btn btn-secondary btn-sm me-1" for="option5"><i class="bi bi-star"></i></label>
                                            </>
                                        )}
    
                                    </div>
                                    <div>
                                        <button className='btn btn-primary mt-3' onClick={(e) => this.redireccionar(e)}>Leer el libro</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            {logeado && (
                                <>
                                    <h4 className='mt-3'>Haz un comentario</h4>
                                    <textarea class="form-control" id="validationTextarea" placeholder="Haz un comentario..." required onChange={(e) => this.setState({nuevoComentario : e.target.value})}></textarea>
                                    <button  className='btn btn-primary mt-3' onClick={(e) => this.agregarComentario(this.state.nuevoComentario)}>Comentar</button>
                                </>
                            )}
            
                            {!logeado && (
                                <>
                                    <h4 className='mt-3'>Haz un comentario</h4>
                                    <textarea class="form-control" id="validationTextarea" placeholder="Necesitas una cuenta para poder comentar" required disabled></textarea>
                                </>
                            )}

                            <h4 className='mt-3'>Comentarios:</h4>
                            {this.state.comentarios ? 
                                <> 
                                {this.state.comentarios.map((comentario, index)=>(
                                    <div class="p-4 mb-2 border rounded-2">
                                        <div className="row">
                                            <div className="col-md-1">
                                                <img class="card-img-top imgComments" src={comentario.img}></img>
                                            </div>
                                            <div className='col'>
                                                    <h3 className='ms-3'>{comentario.nombreEmisor}</h3>
                                                    <p className='ms-3'>{comentario.contenido}</p>
                                            </div>
                                        </div>
        
                                        <div>
                                            {(checkIfIsLoggedIn() && getLoggedInUserId() === comentario.receptor) && 
                                            <>
                                                <button className='btn btn-primary mt-3' onClick={(e) => this.eliminar(comentario._id)}>
                                                    Eliminar este comentario de mi libro
                                                </button>
                                            </>
                                            }
                                        </div>
                                    </div>
                                    ))}   
                                </>
                                :
                                <>                  
                                    <label>No hay comentarios de momento...</label>
                                </>
                            }       
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default InfoLibro;