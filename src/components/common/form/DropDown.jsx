import { useState } from "react"
import styles from "./DropDown.module.css"

export default function Dropdown({ options, defaultOption, onSelect, title }) {
    const [opened, setOpened] = useState(false)
    const [selection, setSelection] = useState(-1)

    function optionItem({ key, children, selection, setSelection }) {
        return (
            <div>
                {children}
            </div>
        )
    }
    if (!opened) {
        return (
            <button className={styles.openButton} onClick={() => setOpened(!opened)}>{title}: {selection === -1 ? "Nenhum" : options[selection]}</button>
        )
    }
    return (
        <>
            <div className={styles.container} onClick={() => setOpened(false)}>
                <div className={styles.optionsContainer}>
                    <h1>{title}</h1>
                    {options.map((item, i) => <optionItem onClick={() => setSelection(i)} className={selection === i ? styles.optionItemSelected : styles.optionItem} key={i} selection={selection} setSelection={setSelection}>{item}</optionItem>)}
                </div>
            </div>
        </>
    )
}