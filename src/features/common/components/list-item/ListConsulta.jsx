import styles from "./ListConsulta.module.css"
import { FaStethoscope } from "react-icons/fa6"

function ListConsulta({title, info, time, onClick}) {
    return (
        <div className={styles.listaBG}>
            <div className={styles.imageDiv}>
                <FaStethoscope size="50%" color="var(--blue0)"></FaStethoscope>
            </div>
            <div>
                <p className={styles.title}>{title}</p>
                <p>{info}</p>
            </div>
        </div>
    )
}

export default ListConsulta