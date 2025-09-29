import styles from "./News.module.css"
import Markdown from "../common/markdown/Markdown"

export default function News({ markdown }) {
    return (
        <div className={styles.container}>
            <div className={styles.markdownBody}>
                <Markdown markdown={markdown}></Markdown>
            </div>
        </div>
    )
}