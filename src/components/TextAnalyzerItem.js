import { useEffect } from "react";

const TextAnalyzerItem = (props) => {
    useEffect(() => {
        const text = document.getElementById('text').innerHTML;
        props.setValue(text);
    }, [])

    return (
        <div className="text-center text-analyzer-item">
            <h5 className="text-secondary">{props.title}</h5>
            <h2>{props.value}</h2>
        </div>
    )
}

export default TextAnalyzerItem;