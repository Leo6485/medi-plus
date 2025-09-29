import styles from "./popUp.module.css"

function PopUp({ visible, setVisible, children }) {
    if (!visible) return
    return <div className={styles.popUpBG} onClick={() => setVisible(false)}>
        <div className={styles.popUpContainer} onClick={(e) => e.stopPropagation}>
            {children}
        </div>
    </div>
}

export default PopUp