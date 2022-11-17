import React, { useState, useEffect, useRef } from "react";
import {removeToken}  from "../utils";
import {setToken}  from "../utils";
import axios from "axios";

const API = process.env.REACT_APP_API;

function LogIn() {

    const [password2, setPassword2] = useState("");
    const [email2, setEmail2] = useState("");
    const [error, setError] = useState("");
    

        // FUNCION PARA INICIAR SESION AL ENVIAR EL FORMULARIO
        const login = async (e) => {
            e.preventDefault();
            removeToken();
            try{
                const response = await axios.post(`${API}/users/login`,{
                    email2,
                    password2
                });
    
                if (response.status === 200){
                    console.log(response.data.token);
                    setToken(response.data.token);
                    window.location = "/";
                    return null;
                } else {
                    alert("El usuario y/o la contraseña son incorrecto(s)")
                }

            } catch (e) {
                alert("El usuario y/o la contraseña son incorrecto(s)")
            }
        }

        return(
            <div className="container-md mt-2">
                <div className="row justify-content-center container">
    
                    {/* Columna login */}
                    <div className="col-sm-5">
                        <h4>Iniciar sesión</h4>
                        <form method = "POST" onSubmit={login} className="card card-body">
                            
                            <div className="form-group">
                                <input
                                    type="email"
                                    onChange={(e) => setEmail2(e.target.value)}
                                    value={email2}
                                    className="form-control m-1"
                                    placeholder="Correo electrónico"
                                    name={email2}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    onChange={(e) => setPassword2(e.target.value)}
                                    value={password2}
                                    className="form-control m-1"
                                    placeholder="Contraseña"
                                    name={password2}
                                        />
                                    </div>
            
                            <div>{error}</div>
                            
                            <button className="container-fluid btn btn-primary btn-block m-1">
                                { "Iniciar sesion"}
                            </button>
                        </form>
                        <div>
                            <h6 className="text-center text-secondary">¿No tienes una cuenta? <a href="/registro">Crea una aquí</a></h6>
                        </div>
                    </div>
                    
                    <div> <hr></hr> </div>
    
                </div>
            </div>

        );





}

export default LogIn;