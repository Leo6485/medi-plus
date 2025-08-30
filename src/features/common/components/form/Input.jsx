import { useState } from "react"
import styles from "./Input.module.css"

function Input({ setValue, placeHolder}) {
    const [labelClass, setLabelClass] = useState(styles.inputLabel)
    return (
        <div>
            <label htmlFor="i" className={labelClass}>{placeHolder}</label>
            <input id="i" className={styles.input} onFocus={() => setLabelClass(styles.inputLabelActive)} onBlur={ () => setLabelClass(styles.inputLabel)} placeholder={placeHolder}></input>
            {/* <input className={styles.input} onChange={(e) => value = setValue(e.target.value)}></input> */}
        </div>
    )
}

export default Input