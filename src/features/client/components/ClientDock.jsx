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

    return (
        <div>
            <ul className={styles.dockContainer}>
                <li
                    className={active === "home" ? styles.active : styles.item}
                    onClick={() => setRoute("home")}
                >
                    <FaHouse size="20px"/>
                </li>
                <li
                    className={active === "agenda" ? styles.active : styles.item}
                    onClick={() => setRoute("agenda")}
                >
                    <FaCalendarCheck size="20px"/>
                </li>
                <li
                    className={active === "cirurgias" ? styles.active : styles.item}
                    onClick={() => setRoute("cirurgias")}
                >
                    <FaSyringe size="20px"/>
                </li>
                <li
                    className={active === "perfil" ? styles.active : styles.item}
                    onClick={() => setRoute("perfil")}
                >
                    <FaUser size="20px"/>
                </li>
            </ul>
        </div>
    )
}

export default ClientDock