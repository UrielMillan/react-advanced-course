import { lazy, LazyExoticComponent } from "react";
//import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";


//Este tipo se agrega para dar soporte de tipo a un componente con lazy load
type JSXComponent = () => JSX.Element


//Interface con las propiedades de rutas, y se agrega el soporte para lazy load
interface Route {
    to: string,
    path:string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string
}



/*
    La funcion lazy esn un una interfaz de react que no permite cargar modulos usando lay load
    para que este funcione sin problemas es necesario envolver la aplicacion en un componente Suspense.
    El componente se Suspense le indica a la aplicacion que los componentes se  cargaran de monera lenta
    y que espere, ademas pondemos unsar un fallback que puede ser un componente que se renderize mientras la
    la  aplicacion resuelve la carga lenta.

    el comentario antes del import, le indica a webpack que cambie el nombre de los chunks
    
*/
const Lazy1 = lazy(() => import(/*webpackChunkName: "LazyPage1" */ '../01-lazyload/pages/LazyPage1'));
const Lazy2 = lazy(() => import(/*webpackChunkName: "LazyPage2" */ '../01-lazyload/pages/LazyPage2'));
const Lazy3 = lazy(() => import(/*webpackChunkName: "LazyPage3" */ '../01-lazyload/pages/LazyPage3'));


//Arreglo de rutas
//en ts utilizar [] despues del tipado indica que es un arreglo
export const routes: Route[] = [
    {
        to: '/lazy1',
        path:'lazy1',
        Component: Lazy1,
        name: 'Lazy page 1'
    },
    {
        to: '/lazy2',
        path:'lazy2',
        Component: Lazy2,
        name: 'Lazy page 2'
    },
    {
        to: '/lazy3',
        path:'lazy3',
        Component: Lazy3,
        name: 'Lazy page 3'
    },
]