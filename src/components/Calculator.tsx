interface CalculatorProps {
    children: JSX.Element | JSX.Element[];
    result: string | JSX.Element | JSX.Element[];
}

export default function Calculator (props: CalculatorProps) {
    return (
        <div className="calculator">
            <div className="calculator__input">
                {props.children}
            </div>
            <div className="calculator__output">
                <p className="calculator__info">
                    Результат и интерпретация в общем виде
                </p>
                <p className="calculator__result">
                    {props.result}
                </p>
            </div>
        </div>
    )
}