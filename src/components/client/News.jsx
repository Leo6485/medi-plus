import ReactMarkdown from "react-markdown"
import styles from "./News.module.css"
import remarkGfm from "remark-gfm"

export default function News({ markdown }) {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Notícias</h1>
            <div className={styles.markdownBody}>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
            </div>
        </div>
    )
}