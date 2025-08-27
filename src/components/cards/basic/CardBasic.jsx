import styles from "./CardBasic.module.css"

function CardBasic({ title, children}) {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{title}</h3>
            {children}
        </div>
    )
}

export default CardBasic