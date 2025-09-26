import { FaCheckCircle } from "react-icons/fa"
import { FaSpinner } from "react-icons/fa"


import styles from "./CheckList.module.css"

export default function CheckList({ title, list}) {
    function ListItem({ text, checked }) {
        return (
            <li className={styles.listItem}>
                {checked ?
                <>
                <FaCheckCircle color="#27AE9C"></FaCheckCircle> <p className={styles.checked}>{text}</p>
                </>
                :
                <>
                <FaSpinner color="#F9A825"></FaSpinner> <p className={styles.pending}>{text}</p>
                </>
                }
            </li>
        )
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <ul className={styles.ul}>
                {list.map((item, i) => (<ListItem key={i} text={item.text} checked={item.checked}></ListItem>))}
            </ul>
        </div>
    )
}