import styles from "../styles/ClientDock.module.css"
import { FaHouse, FaCalendarCheck, FaSyringe, FaUser } from "react-icons/fa6"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function ClientDock() {
    const [active, setActive] = useState("home")
    const navigate = useNavigate()

    function setRoute(route) {
        navigate(`/cliente/${route}`)
        setActive(route)
    }

    
    function DockItem({ label, icon: Icon }) {
        return (
            <li className={active === label ? styles.active : styles.item} onClick={() => setRoute(label)}>
                {<Icon size="20px"></Icon>}
            </li>
        )
    }

    return (
        <div>
            <ul className={styles.dockContainer}>
                <DockItem label="home" icon={FaHouse}></DockItem>
                <DockItem label="agenda" icon={FaCalendarCheck}></DockItem>
                <DockItem label="cirurgias" icon={FaSyringe}></DockItem>
                <DockItem label="perfil" icon={FaUser}></DockItem>
            </ul>
        </div>
    )
}

export default ClientDock