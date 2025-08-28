import styles from "../styles/SideBar.module.css"
import { FaHouse, FaCalendarCheck, FaSyringe, FaUser } from "react-icons/fa6"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FaHospital } from "react-icons/fa6"

function SideBar() {    
    const [active, setActive] = useState("home")
    const navigate = useNavigate()

    function setRoute(route) {
        navigate(`/cliente/${route}`)
        setActive(route)
    }

    return (
        <div className={styles.sideBarBG}>
            <div className={styles.sideHeader}>
                <FaHospital size="50px"></FaHospital>Hospital SJ
            </div>
            <ul>
                <li
                    className={active === "home" ? styles.active : styles.item}
                    onClick={() => setRoute("home")}
                >
                    <FaHouse size="20px"/>Home
                </li>
                <li
                    className={active === "agenda" ? styles.active : styles.item}
                    onClick={() => setRoute("agenda")}
                >
                    <FaCalendarCheck size="20px"/>Agenda
                </li>
                <li
                    className={active === "cirurgias" ? styles.active : styles.item}
                    onClick={() => setRoute("cirurgias")}
                >
                    <FaSyringe size="20px"/>Cirurgias
                </li>
                <li
                    className={active === "perfil" ? styles.active : styles.item}
                    onClick={() => setRoute("perfil")}
                >
                    <FaUser size="20px"/>Perfil
                </li>
            </ul>
        </div>
    )
}

export default SideBar