import { useEffect } from "react";

const TextAnalyzer = (props) => {
    return (
        <div className="container text-analyzer p-4 mb-4 d-flex justify-content-between">
            {props.children}
        </div>
    )
}

export default TextAnalyzer;