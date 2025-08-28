import styles from "./AgendarButton.module.css"
import { FaCalendarCheck } from "react-icons/fa6"

function AgendarButton({ text }) {
    return (
        <button><FaCalendarCheck size="20px"></FaCalendarCheck>{text}</button>
    )
}

export default AgendarButton