import styles from "./FullPage.module.css"
import { FaArrowLeft } from "react-icons/fa"


export default function FullPage({ visible, setVisible, title, children }) {
    if (!visible) {
        return null
    }
    return (
        <div className={styles.container}>
            <div className={styles.topBar}>
                <FaArrowLeft size="20px" color="#50505f" className={styles.icon} onClick={() => setVisible(false)}></FaArrowLeft>
                <p className={styles.title}>{title}</p>
            </div>
            {children}
        </div>
    )
}