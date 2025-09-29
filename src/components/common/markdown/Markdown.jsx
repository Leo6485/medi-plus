import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

export default function Markdown({ markdown }) {
    return (
        <>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
        </>
    )
}