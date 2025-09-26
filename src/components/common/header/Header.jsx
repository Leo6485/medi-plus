import styles from "./Header.module.css"

import { FaUser } from "react-icons/fa6"
function Header({ name }) {
    return (
        <div className={styles.header}>
            <div>
                <p className={styles.headerName}>Olá, {name}!</p>
                <p className={styles.headerSubTitle}>Sua saúde em primeiro lugar.</p>
            </div>

            <div className={styles.rightContainer}>
                <div className={styles.profilePicture}>
                    <FaUser size="25px" color="#a0a0a0" />
                </div>

            </div>
        </div>
    )
}

export default Header