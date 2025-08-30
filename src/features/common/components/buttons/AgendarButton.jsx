import styles from "./AgendarButton.module.css"
import { FaCalendarCheck } from "react-icons/fa6"

function AgendarButton({ text, onClickEvent}) {
    return (
        <button onClick={onClickEvent} className={styles.agendarButton}><FaCalendarCheck size="20px"></FaCalendarCheck><span>{text}</span></button>
    )
}

export default AgendarButton