import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Users from "./componentes/Users";
import Principal  from "./componentes/Principal";
import Proyecto from "./componentes/Proyecto";
import ConfPerfil from "./componentes/ConfPerfil";
import Biblioteca from "./componentes/Biblioteca";
import Navbar2 from "./componentes/Navbar2";
import PerfilUser from "./componentes/PerfilUser"
import Busquedas from "./componentes/Busquedas";
import LogIn from "./componentes/LogIn";
import Libro from "./componentes/Libro";
import CrearProyecto from "./componentes/CrearProyecto";
import EditorTexto from "./componentes/EditorTexto";
import InfoLibro from "./componentes/InfoLibro";
import Footer from "./componentes/Footer";
import AcercaDe from "./componentes/AcercaDe";

function App() {

    return (
        <Router>
            {/* Navbar de la página */}
            <Navbar2/>  

            {/* Rutas de la página */}
            <Routes>
                <Route path="/" element={<Principal/>}/>
                <Route path="/biblioteca" element={<Biblioteca/>}/>
                <Route path="/login" element={<LogIn/>}/>
                <Route path="/registro" element={<Users/>}/>
                <Route path="/Libro/:idLibro/:nombreLibro" element={<Libro/>}/> 
                {/* <Route path="/Navbar" element={<Navbar/>}/> */}
                {/* Acá va el editor de texto, pero hay que arreglarlo porque está algo bug*/}
                <Route path="/proyecto" element={<Proyecto/>}/> 
                <Route path="/proyecto/crear" element={<CrearProyecto/>}/>
                {/* Acá está el componente de perfil de configuración del perfil de usuario */}
                <Route path="/configuracion" element={<ConfPerfil/>}/>
                {/* Acá está el componente perfil de usuario */}
                <Route path="/perfil/:unnombre" element={<PerfilUser/>}/>
                <Route path="/Busquedas/:buscado" element={<Busquedas/>}/>
                <Route path="/biblioteca/info/:idLibro" element={<InfoLibro/>}/>
                <Route path="/acerca-de/" element={<AcercaDe/>}/>
            </Routes>
            
            {/* Footer de la página */}
            <Footer/>
        </Router>

    );
}

export default App;