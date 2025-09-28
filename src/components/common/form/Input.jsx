import { useState } from "react"
import styles from "./Input.module.css"

function Input({ value, setValue, placeHolder }) {
    const [labelClass, setLabelClass] = useState(styles.inputLabel)
    return (
        <div className={styles.inputDiv}>
            <label htmlFor="i" className={labelClass}>{placeHolder}</label>
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}

                id="i" className={styles.input}
                placeholder={placeHolder}
                onFocus={() => setLabelClass(styles.inputLabelActive)}
                onBlur={() => setLabelClass(styles.inputLabel)}>
            </input>
            {/* <input className={styles.input} onChange={(e) => value = setValue(e.target.value)}></input> */}
        </div>
    )
}

export default Input