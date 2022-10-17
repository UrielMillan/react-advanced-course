import { lazy, LazyExoticComponent } from "react";
import NoLazy from "../01-lazyload/pages/NoLazy";



//Este tipo se agrega para dar soporte de tipo a un componente con lazy load
type JSXComponent = () => JSX.Element


//Interface con las propiedades de rutas, y se agrega el soporte para lazy load
interface Route {
    to: string,
    path:string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string
}


//Cargamos el layout con carga peresoza
const LazyLayout = lazy(() => import( /*webpackChunkName: "LazyLayout */'../01-lazyload/layout/LazyLayout'))



/*
    cuando usamos el comodin /* en el path estamos indicando que esa ruta sera procesado por otro enrutador
    para crear rutas anidadas,
    tambien es necesario poner esa configuracion en el to
*/
export const routes: Route[] = [
    {
        to: '/lazyload/',
        path:'/lazyload/*',
        Component: LazyLayout,
        name: 'Lazy page'
    },
    {
        to: '/nolazy',
        path:'nolazy',
        Component: NoLazy,
        name: 'No lazy'
    },
]