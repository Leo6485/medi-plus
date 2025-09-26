
import Header from '../../../components/common/header/Header';
import SideBar from '../../../components/common/SideBar';
import Dock from '../../../components/common/Dock';
import styles from "./ClientPage.module.css"
import { Outlet } from "react-router-dom"
import { useState } from 'react';

import { FaHouse, FaCalendarCheck, FaSyringe, FaUser } from "react-icons/fa6"


function ClientPage() {
    const [width, setWidth] = useState(window.innerWidth)

    const setW = () => { setWidth(window.innerWidth) }
    window.addEventListener("resize", setW)

    const dock_data = [
        { label: "home", Icon: FaHouse },
        { label: "agenda", Icon: FaCalendarCheck },
        { label: "cirurgias", Icon: FaSyringe },
        { label: "perfil", Icon: FaUser }
    ]

    return (
        <>
            {width >= 600 && <SideBar data={dock_data}></SideBar>}
            {width < 600 && <Dock data={dock_data}></Dock>}
            <div className={styles.contentContainer}>
                <div className={styles.bg}>
                    <Header name="Mariana"></Header>
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    )
}

export default ClientPage