import { Route, Routes } from "react-router-dom"
import ClientPage from "../features/client/layout/ClientPage"
import ClientHome from "../features/client/pages/ClientHome"
import ClientAgenda from "../features/client/pages/ClientAgenda"
import ClientCirurgias from "../features/client/pages/ClientCirurgias"

function AppRoutes() {
    return (
        <Routes>
            <Route path="/cliente" element={<ClientPage/>}>
                <Route path="home" element={<ClientHome/>}/>
                <Route path="agenda" element={<ClientAgenda/>}/>
                <Route path="cirurgias" element={<ClientCirurgias/>}/>
                <Route path="perfil" element={<ClientHome/>}/>
            </Route>
            <Route></Route>
        </Routes>
    )
}

export default AppRoutes