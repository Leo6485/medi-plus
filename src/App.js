import './App.css';
import Login from "./pages/login/Login"
import CardConsulta from './components/cards/consulta/CardConsulta';

function App() {
    return (
      // <Login/>
      <CardConsulta title="Title" info="data" time="00/00/0000 00:00:00" onClick={() => alert("OK")}/>
    )
}

export default App;
