import styles from "./Header.module.css"

import { FaBell } from "react-icons/fa6"
import { FaUser } from "react-icons/fa6"
function Header({ name }) {
    return (
        <div className={styles.header}>
            <p className={styles.headerName}>Olá {name}</p>
            <div className={styles.rightContainer}>
            <FaBell size="20px" color="#fafafa"/>
            <div className={styles.profilePicture}>
                <FaUser size="25px" color="#aaaaaa"/>
            </div>

            </div>
        </div>
    )
}

export default Header