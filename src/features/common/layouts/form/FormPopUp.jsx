import styles from "./FormPopUp.module.css"

function FormPopUp( { active_var, setActiveVar, children} ) {
    if (!active_var) return null;
    return (
        <div className={styles.formBG} onClick={() => setActiveVar(false)}>
            <div className={styles.formContainer} onClick={(e) => e.stopPropagation()}>
                {children}
                <div className={styles.bottomContainer}>
                    <button className={styles.closeButton} onClick={() => setActiveVar(false)}>Cancelar</button>
                    <button className={styles.solidButton} onClick={() => setActiveVar(false)}>Confirmar</button>
                </div>
            </div>
        </div>

    )
}

export default FormPopUp