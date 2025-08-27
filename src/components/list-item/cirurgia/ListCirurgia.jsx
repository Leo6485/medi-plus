import styles from "./ListCirurgia.module.css"
import { FaSyringe } from "react-icons/fa6"

function ListCirurgia({title, info, time, onClick}) {
    return (
        <div className={styles.bg}>
            <div className={styles.imageDiv}>
                <FaSyringe size="50%" color="var(--blue0)"></FaSyringe>
            </div>
            <div>
                <p className={styles.title}>{title}</p>
                <p>{info}</p>
            </div>
        </div>
    )
}

export default ListCirurgia