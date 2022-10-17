import { BrowserRouter, Routes, NavLink, Route, Navigate } from "react-router-dom"
import logo from '../logo.svg';

export default function Navigation() {

    const isLinkActive = (isActive:boolean) => isActive ? 'nav-active' : '';

    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="Logo de react" />
                    <ul>
                        <li>
                            <NavLink to="/home" className={({isActive}) =>  isLinkActive(isActive)}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({isActive}) =>  isLinkActive(isActive)}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/users" className={({isActive}) =>  isLinkActive(isActive)}>Users</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="about" element={<h1>About page</h1>}/>
                    <Route path="users" element={<h1>Users page</h1>}/>
                    <Route path="home" element={<h1>Home page</h1>}/>
                    {/*
                        Este componente de ruta es un comodin pues cuando se navegue a una ruta que no exita Navigate lo redirige al home
                        y con la propiedad replace no permite que el usuario regrese
                    */}
                    <Route path="/*" element={<Navigate to="/home" replace/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}
