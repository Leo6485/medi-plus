
import ClientDock from './components/dock/dock/ClientDock';
import Header from '../../components/header/Header';

import { Outlet } from "react-router-dom"

function ClientPage() {
    return (
        <>
        
            <Header name="Leonardo"></Header>
                <Outlet></Outlet>
            <ClientDock></ClientDock>
        </>
    )
}

export default ClientPage