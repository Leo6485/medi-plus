import styles from "./CardConsulta.module.css"

function CardConsulta({title, info, time, onClick}) {
    return (
        <div className={styles.bgCard}>
            <div className={styles.titleDiv}>
                <p className={styles.title}>{title}</p>
            </div>
            <p>{info}</p>
            <p className={styles.time}>{time}</p>

            <button onClick={onClick} className={styles.showMore}>Ver mais</button>
        </div>
    )
}

export default CardConsulta