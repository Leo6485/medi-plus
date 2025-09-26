import styles from "./AgendarButton.module.css"

export default function AgendarButton({ onclick }) {
    return (
        <button className={styles.button} onClick={onclick}>Agendar nova consulta</button>
    )
}