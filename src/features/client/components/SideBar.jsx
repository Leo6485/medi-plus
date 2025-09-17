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

    function SideBarItem({ label, icon: Icon }) {
        return (
            <li className={active === label ? styles.active : styles.item} onClick={() => setRoute(label)}>
                {<Icon size="20px"></Icon>}
                {label.charAt(0).toUpperCase() + label.slice(1)}
            </li>
        )
    }
    return (
        <div className={styles.sideBarBG}>
            <div className={styles.sideHeader}>
                <FaHospital size="50px"></FaHospital>Hospital SJ
            </div>
            <ul>
                <SideBarItem label="home" icon={FaHouse}></SideBarItem>
                <SideBarItem label="agenda" icon={FaCalendarCheck}></SideBarItem>
                <SideBarItem label="cirurgias" icon={FaSyringe}></SideBarItem>
                <SideBarItem label="perfil" icon={FaUser}></SideBarItem>
            </ul>
        </div>
    )
}

export default SideBar