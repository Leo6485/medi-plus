import styles from "./SideBar.module.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FaHospital } from "react-icons/fa6"

function SideBar({ data }) {    
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
                {data.map((item, i) => (<SideBarItem key={i} label={item.label} icon={item.Icon}/>))}
            </ul>
        </div>
    )
}

export default SideBar