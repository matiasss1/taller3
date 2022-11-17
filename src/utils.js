import jwt from 'jwt-decode';

// Obtener TOKEN de la sesión actual
export const getToken = () => {
    if (typeof localStorage !== 'undefined'){
        return localStorage.getItem("token");
    }
};

// Asignar TOKEN a una sesión
export const setToken = (token) => {
    if (typeof localStorage !== 'undefined'){
        return localStorage.setItem("token", token);
    }
};

// Remover un TOKEN de la sesión
export const removeToken = (token) => {
    if (typeof localStorage !== 'undefined'){
        return localStorage.removeItem("token");
    }
};

// Comprobar si el usuario está logueado obteniendo el TOKEN
export const checkIfIsLoggedIn = () => {
    const token = getToken();

    if (!token){
        return false;
    }

    const decodedToken = jwt(token, { complete: true });
    var dateNow = new Date();
    if(decodedToken.exp < Math.floor(dateNow.getTime()/1000)) {
        return false;
    }

    return true
};

// Obtener la ID del usuario (guardada en MongoDB) mediante un TOKEN
export const getLoggedInUserId = () => {
    const token = getToken();

    if(!token){
        return "";
    }
    const id = jwt(token, { complete : true}).sub['$oid'];
    return id;
}