import './App.css';
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AppRoutes from "./core/AppRoutes"

function App() {
  return (
    <BrowserRouter>
      <div className='root-container'>
      <AppRoutes />
      </div>
        { /*
        <Routes>
          <Route path='/cliente' element={<ClientPage/>}>
            <Route path="home" element={<ClientHome/>}></Route>
            <Route path="agenda" element={<ClientAgenda/>}></Route>
            <Route path="cirurgias" element={<ClientCirurgias/>}></Route>
            <Route path="perfil" element={<div></div>}></Route>
          </Route>

        </Routes>
        */ }
    </BrowserRouter>
  )
}

export default App;
