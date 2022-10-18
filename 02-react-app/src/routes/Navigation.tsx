import { BrowserRouter, Routes, NavLink, Route, Navigate } from "react-router-dom"
import ShoppingPage from "../02-component-patters/pages/ShoppingPage";
import logo from '../logo.svg';

export default function Navigation() {

    const isLinkActive = (isActive: boolean) => isActive ? 'nav-active' : '';

    /*
        El Suspense es un componente react que nos permite manejar la carga lenta de modulos
        espera a que el componente se cargue y en tiempo de espera renderiza un componente de fallback
    */
    return (

        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="Logo de react" />
                    <ul>
                        <li>
                            <NavLink to="home" className={({ isActive }) => isLinkActive(isActive)} >
                               Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="about" className={({ isActive }) => isLinkActive(isActive)} >
                               About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="users" className={({ isActive }) => isLinkActive(isActive)} >
                               Users
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>

                    <Route path="/home" element={<ShoppingPage/>} />
                    <Route path="/about" element={<h1>About</h1>} />
                    <Route path="/users" element={<h1>Users</h1>} />
                    <Route path="/*" element={<Navigate to="/home" replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
