import React, { useState, useEffect, useRef } from "react";
import {removeToken}  from "../utils";
import {setToken}  from "../utils";
import axios from "axios";

const API = process.env.REACT_APP_API;

function Users() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error2, setError2] = useState("");
    
    const nameInput = useRef(null);

    // FUNCION PARA CREAR CUENTA AL ENVIAR EL FORMULARIO
    const crearCuenta = async (e) => {
        e.preventDefault();
        
        // Valida si el correo posee una estructura válida
        if (/^[a-zA-Z0-9.]+\@[a-zA-Z0-9.]+\.[a-zA-Z]+$/.test(email)){
            try { 
                const res = await fetch(`${API}/users`, {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      name,
                      email,
                      password,
                    }),
                });
    
                if (res.status === 200){
                    alert("Cuenta creada correctamente.")
    
                } else {
                    alert("Correo ya existe en la base de datos.")
                }
    
            } catch(e) {
                alert("Error al tratar de crear cuenta.")
            }

        } else {
            alert("Escriba una dirección de correo válida (example@example.cl).");
        }
        
        setName("");
        setEmail("");
        setPassword("");
        nameInput.current.focus();
    };  

    return (
        <div className="container-md mt-2">
            <div className="row justify-content-center container">


                {/* Columna register */}
                <div className="col-sm-5">
                    <h4>Crear cuenta de usuario</h4>
                    <form onSubmit={crearCuenta} className="card card-body">
                        <div className="form-group">
                            <input
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                className="form-control m-1"
                                placeholder="Nombre de usuario"
                                ref={nameInput}
                                autoFocus
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                className="form-control m-1"
                                placeholder="Correo electrónico"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                className="form-control m-1"
                                placeholder="Contraseña"
                            />
                        </div>
                        <div>{error2}</div>
                        <button className="container-fluid btn btn-primary btn-block m-1">
                            {"Crear cuenta"}
                        </button>
                    </form>
                    <div>
                        <h6 className="text-center text-secondary">¿Ya tienes una cuenta? <a href="/login">Inicia sesión</a></h6>
                    </div>
                </div>
            </div>
        </div>
        
    );  
};  
    
export default Users;