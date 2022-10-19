import { BrowserRouter, Routes, NavLink, Route, Navigate } from "react-router-dom"
import logo from '../logo.svg';

export default function Navigation() {

    const isLinkActive = (isActive: boolean) => isActive ? 'nav-active' : '';

    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <li>
                        <NavLink to={'home'} className={({ isActive }) => isLinkActive(isActive)} >
                            Home
                        </NavLink>
                        <NavLink to={'about'} className={({ isActive }) => isLinkActive(isActive)} >
                            About
                        </NavLink>
                        <NavLink to={'user'} className={({ isActive }) => isLinkActive(isActive)} >
                            Users
                        </NavLink>
                    </li>
                </nav>

                <Routes>
                    <Route path="/home" element={<h1>Home</h1>} />
                    <Route path="/about" element={<h1>About</h1>} />
                    <Route path="/user" element={<h1>User</h1>} />
                    <Route path="/*" element={<Navigate to="/home" replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
