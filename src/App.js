import './App.css';
import Login from "./pages/login/Login"
import ClientPage from "./pages/cliente/ClientPage"
import ClientHome from './pages/cliente/ClientHome';
import ClientAgenda from './pages/cliente/ClientAgenda';
import ClientCirurgias from './pages/cliente/ClientCirurgias';
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='bg'>

        <Routes>
          <Route path='/cliente' element={<ClientPage/>}>
            <Route path="home" element={<ClientHome/>}></Route>
            <Route path="agenda" element={<ClientAgenda/>}></Route>
            <Route path="cirurgias" element={<ClientCirurgias/>}></Route>
            <Route path="perfil" element={<div></div>}></Route>
          </Route>

        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App;
