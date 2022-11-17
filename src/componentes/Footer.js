import React from 'react'

const Footer = () => {
    return (
        <div class="container">
            <footer class="py-3 my-4">
                <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                    <li class="nav-item"><a href="/" class="nav-link px-2 text-muted">Inicio</a></li>
                    <li class="nav-item"><a href="/biblioteca" class="nav-link px-2 text-muted">Biblioteca</a></li>
                    <li class="nav-item"><a href="/acerca-de" class="nav-link px-2 text-muted">Acerca de</a></li>
                </ul>
                <p class="text-center text-muted">© Kowloon 2022, Inc</p>
            </footer>
        </div>
    )
}

export default Footer