
import ClientDock from '../components/ClientDock';
import Header from '../../common/components/header/Header';
import SideBar from '../components/SideBar';
import styles from "./ClientPage.module.css"
import { Outlet } from "react-router-dom"
import { useState } from 'react';

function ClientPage() {
    const [width, setWidth] = useState(window.innerWidth)

    const setW = () => {setWidth(window.innerWidth)}
    window.addEventListener("resize", setW)
    return (
        <>
            {width >= 500 && <SideBar></SideBar>}
            {width < 500 && <ClientDock></ClientDock>}
            <div className={styles.contentContainer}>
                <Header name="Fulano"></Header>
                <div className={styles.bg}>
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    )
}

export default ClientPage