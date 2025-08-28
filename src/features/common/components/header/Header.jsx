import styles from "./Header.module.css"
function Header({ name }) {
    return (
        <div className={styles.header}>
            <p className={styles.headerName}>Olá {name}</p>
        </div>
    )
}

export default Header