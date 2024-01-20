import { useEffect } from "react";

const TextAnalyzer = (props) => {
    useEffect(() => {
        const text = document.getElementById('text').innerHTML;
        props.setCharacterCount(text.length)
    }, []);
    return (
        <div className="container text-analyzer p-4 mb-4 d-flex justify-content-between">
            <div className="text-center text-analyzer-item">
                <h5 className="text-secondary">Words</h5>
                <h2>300</h2>
            </div>
            <div className="text-center text-analyzer-item">
                <h5 className="text-secondary">Characters</h5>
                <h2>{props.characterCount}</h2>
            </div>
            <div className="text-center text-analyzer-item">
                <h5 className="text-secondary">Sentences</h5>
                <h2>300</h2>
            </div>
        </div>
    )
}

export default TextAnalyzer;