import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import {LazyPage1, LazyPage2, LazyPage3} from '../pages'

/*
    Este componente se carga con lazy load, es buen practica hacer que modulos enteros se cargen de este manera
    a solo pequeños componentes, por comodidad en la experiencia del usuario y tambien como buena optimizacion
    en el uso de los modulos

*/

export default function LazyLayout() {
    return (
        <div>
            <h1>LazyLayout Page</h1>
            <ul>
                <li>
                    <NavLink to="lazy1">Lazy 1</NavLink>
                </li>
                <li>
                    <NavLink to="lazy2">Lazy 2</NavLink>
                </li>
                <li>
                    <NavLink to="lazy3">Lazy 3</NavLink>
                </li>
            </ul>
            {/* 
                Enrutador anidado, utilizamos el comodin * para indicar que la ruta que se renderizara si no se encuntra sea lazy1
                ademas de establecerla como ruta principal del enrutador
            */}
            <Routes>
                <Route path='lazy1' element={<LazyPage1/>}/>
                <Route path='lazy2' element={<LazyPage2/>}/>
                <Route path='lazy3' element={<LazyPage3/>}/>
                {/*<Route path='*' element={<div>Not found</div>} />*/}
                <Route path='*' element={<Navigate to="lazy1" replace/>}/>
            </Routes>
        </div>
    )
}
