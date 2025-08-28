
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
            <div className={styles.contentContainer}>
                <Header name="Leonardo"></Header>
                <div className={styles.bg}>
                    <Outlet></Outlet>
                </div>
                {width < 500 && <ClientDock></ClientDock>}
            </div>
        </>
    )
}

export default ClientPage