import './App.css';
import "./App.css"
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";

import { BrowserRouter } from 'react-router-dom';

import AppRoutes from "./core/AppRoutes"

function App() {
  return (
    <BrowserRouter>
      <div className='root-container'>
      <AppRoutes />
      </div>
    </BrowserRouter>
  )
}

export default App;
