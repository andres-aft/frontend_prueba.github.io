import { Suspense, lazy } from 'react';
import { useRoutes, BrowserRouter, Navigate, NavLink  } from 'react-router-dom'

const TramosCliente = lazy(() => import('./Componente/TramosCliente'));
const Cliente = lazy(() => import('./Componente/Cliente'));
const Tramos = lazy(() => import('./Componente/Tramos'));

import './App.css'
import { Typography } from '@mui/material';

const AppRouters = () => {
  let routes = useRoutes([
    { path: '/clientes', element: <Cliente />},
    { path: '/tramos', element: <Tramos />},
    { path: '/tramosCliente', element: <TramosCliente />},
    { path: '/*', element: <Navigate  to="/clientes" />},
  ])
  return routes
}

function App() {

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <header className="w-full p-4 bg-green-200 flex flex-row gap-4 items-center">
          <Typography variant='h5'>Prueba Tecnica</Typography>
          <nav className=''>
            <ul className='flex flex-row gap-4'>
              <li className="hover:underline">
                <NavLink to ='/tramos'>
                    Tramos
                </NavLink>
              </li>
              <li className="hover:underline">
                <NavLink to ='/clientes'>
                    Clientes
                </NavLink>
              </li>
              <li className="hover:underline">
                <NavLink to ='/tramosCliente'>
                    Tramos Cliente
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <AppRouters />
      </Suspense>
    </BrowserRouter>
  )
}

export default App
