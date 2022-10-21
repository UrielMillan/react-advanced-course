import { BrowserRouter, Routes, NavLink, Route, Navigate } from "react-router-dom"
import {FormikAbstraction,FormikBasicPages,FormikComponets,FormikYupPages} from "../03-forms/pages/";
import DynamicForms from "../03-forms/pages/DynamicForms";
import RegisterFormikpage from "../03-forms/pages/RegisterFormikPage";
import logo from '../logo.svg';

export default function Navigation() {

    const isLinkActive = (isActive: boolean) => isActive ? 'nav-active' : '';

    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React" />
                    <li>
                        <NavLink to={'/register'} className={({ isActive }) => isLinkActive(isActive)} >
                            Register formik page
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/formik-basic'} className={({ isActive }) => isLinkActive(isActive)} >
                            Formik Basic
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/formik-yup'} className={({ isActive }) => isLinkActive(isActive)} >
                            Formik Yup
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/formik-components'} className={({ isActive }) => isLinkActive(isActive)} >
                            Formik Componets
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/formik-abstraction'} className={({ isActive }) => isLinkActive(isActive)} >
                            Formik Abstractation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dinamyc-form'} className={({ isActive }) => isLinkActive(isActive)} >
                            Dynamic forms
                        </NavLink>
                    </li>
                </nav>

                <Routes>
                    <Route path="/register" element={<RegisterFormikpage/>} />
                    <Route path="/formik-basic" element={<FormikBasicPages/>} />
                    <Route path="/formik-yup" element={<FormikYupPages/>} />
                    <Route path="/formik-components" element={<FormikComponets/>} />
                    <Route path="/formik-abstraction" element={<FormikAbstraction/>} />
                    <Route path="/dinamyc-form" element={<DynamicForms/>}/>
                    <Route path="*" element={<Navigate to="/register" replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
