import styles from "./NextConsulta.module.css"

export default function NextConsulta({ title, text }) {
    return (
        <div className={styles.container}>
            <div className={styles.tag}>Próxima consulta</div>
            <div className={styles.content}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.text}>{text}</p>
            </div>
            <button className={styles.button}>Ver instruções</button>
        </div>
    )
}