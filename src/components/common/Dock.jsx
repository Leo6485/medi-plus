import styles from "./Dock.module.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Dock({ data }) {
    const [active, setActive] = useState("home")
    const navigate = useNavigate()

    function setRoute(route) {
        navigate(`/cliente/${route}`)
        setActive(route)
    }

    
    function DockItem({ label, icon: Icon }) {
        return (
            <li className={active === label ? styles.active : styles.item} onClick={() => setRoute(label)}>
                {<Icon size="25px"></Icon>}
                <p className={styles.label}>{label}</p>
            </li>
        )
    }

    return (
        <div>
            <ul className={styles.dockContainer}>
                {data.map((item, i) => (<DockItem key={i} label={item.label} icon={item.Icon}/>))}
            </ul>
        </div>
    )
}

export default Dock