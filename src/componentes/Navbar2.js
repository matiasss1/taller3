import React from 'react';
import { Link } from 'react-router-dom';
import { checkIfIsLoggedIn, getLoggedInUserId, removeToken } from '../utils';
import { useState } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import PerfilUser from './PerfilUser';


export  function Navbar2() {

	// Cerrar TOKEN de la sesión en curso
	const API = process.env.REACT_APP_API;
	const [usuario, setNombre] = useState("");
	const logeado = checkIfIsLoggedIn();
	const cerrarSesion = () => {
		removeToken();
		window.location = "/login";
	};

	const [search, setSearch] = useState("");

	function redir(nombre){
        window.location= "/Busquedas/"+nombre;
    }

	const getUser = async () => {

        const idUser = getLoggedInUserId();
        const res = await axios.get(`${API}/users/${idUser}`, {
            mode: "no-cors",
            });
       
        const data = res.data;
        
        setNombre(data['name']);
  
    };

	const ir = async () => {
    
        const idUser = getLoggedInUserId();
        const res = await axios.get(`${API}/users/${idUser}`, {
            mode: "no-cors",
            });
       
        const data =  res.data;
		await data;

		setNombre(data['name']);
		console.log(usuario);
		   window.location= '/perfil/'+data['name'];
		
        
    };
    

	return (
		<div>
			<nav class="navbar navbar-light bg-light border">
				<div class="container-sm">
					<div>
						<Link to="/">
							<img className='me-2' src='/libroIcon.png' width="50" alt='PageLogo.png' />
						</Link>
					</div>
					<h4 className='mt-2 me-2'>Biblioteca Kowloon</h4>

					{/* Ícono del botón */}
					<button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
						<span class="navbar-toggler-icon"></span>
					</button>

					{/* Lo que va dentro del botón */}
					<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

						{/* Título */}
						<div class="offcanvas-header">
							<h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menú de navegación</h5>
							<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="offcanvasNavbarLabel"></button>
						</div>

						{/* Lista de botones */}
						<div class="offcanvas-body">
							<form class="d-flex" role="search">
								<input class="form-control me-2" type="search" placeholder="Buscar..." aria-label="Search" onChange={event => setSearch(event.target.value)} />
								<button class="btn btn-outline-primary" type="submit" onClick={e => e.preventDefault() || redir(search)}>
									<i class="bi bi-search"></i>
								</button>
							</form>

							<ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
								<li class="nav-item ">
									<div className='navAnim'>
										<a href="/" class="nav-link container-sm" role="button" aria-current="page">Inicio</a>
									</div>
								</li>
								<li class="nav-item">
									<div className='navAnim'>
										<a href="/biblioteca" class="nav-link container-sm" role="button" aria-current="page">Biblioteca</a>
									</div>
								</li>

								{/* Usuario QUE NO ESTÁ logueado */}
								{!logeado && (
									<>
										<li class="nav-item">
											<div className='navAnim'>
												<a href="/login" class="nav-link container-sm" role="button" aria-current="page">Iniciar sesión</a>
											</div>
										</li>
										<li class="nav-item">
											<div className='navAnim'>
												<a href="/registro" class="nav-link container-sm" role="button" aria-current="page">Crear cuenta</a>
											</div>
										</li>
									</>
								)}

								{/* Usuario QUE ESTÁ logueado */}
								{logeado && (
									<>
										<li class="nav-item">
											<div className='navAnim'>
												<a href="/proyecto" class="nav-link container-sm" role="button" aria-current="page">Crear libro</a>
											</div>
										</li>

										<hr></hr>

										<li class="nav-item">
											<div className='navAnim'>
												<a class="nav-link container-sm" role="button" aria-current="page" onClick={ir}>Perfil</a>
											</div>
										</li>

										<>
											<li class="nav-item">
												<div className='navAnim'>
													<a href="/configuracion" class="nav-link container-sm" role="button" aria-current="page">Configuración de la cuenta</a>
												</div>
											</li>
										</>

										<li class="nav-item">
											<div className='navAnim'>
												<a onClick={cerrarSesion} href="/login" class="nav-link" role="button" aria-current="page">
													Cerrar sesión</a>
											</div>
										</li>
									</>
								)}
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Navbar2;