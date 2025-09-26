import styles from "./FormPopUp.module.css"
import PopUp from "../popUp/PopUp";

function FormPopUp( { visible, setVisible, confirmAction, children} ) {
    if (!visible) return null;
    return (
        <div className={styles.formBG} onClick={() => setVisible(false)}>
            <div className={styles.formContainer} onClick={(e) => e.stopPropagation()}>
                <div className={styles.formTitle}>Preencha os dados abaixo</div>
                    <div className={styles.formContent}>
                        {children}
                    </div>
                <div className={styles.bottomContainer}>
                    <button className={styles.closeButton} onClick={() => setVisible(false)}>Cancelar</button>
                    <button className={styles.solidButton} onClick={confirmAction}>Confirmar</button>
                </div>
            </div>
        </div>

    ) 
}

export default FormPopUp