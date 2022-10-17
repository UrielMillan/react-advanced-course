import { Suspense } from "react";
import { BrowserRouter, Routes, NavLink, Route, Navigate } from "react-router-dom"
import { routes } from "./routes";
import logo from '../logo.svg';

export default function Navigation() {

    const isLinkActive = (isActive: boolean) => isActive ? 'nav-active' : '';

    /*
        El Suspense es un componente react que nos permite manejar la carga lenta de modulos
        espera a que el componente se cargue y en tiempo de espera renderiza un componente de fallback
    */
    return (
        
        <Suspense fallback={<span>Loading....</span>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="Logo de react" />
                        <ul>
                            {
                                routes.map(({ to, name }) => (
                                    <li key={to}>
                                        <NavLink to={to} className={({ isActive }) => isLinkActive(isActive)} >
                                            {name}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>

                    <Routes>
                        {
                            routes.map(({ path, Component, to }) => (
                                <Route path={path} element={<Component />} key={to} />
                            ))
                        }
                        {/*
                        Este componente de ruta es un comodin pues cuando se navegue a una ruta que no exita Navigate lo redirige al home
                        y con la propiedad replace no permite que el usuario regrese
                    */}
                        <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    )
}
