interface CalculatorProps {
    children: JSX.Element | JSX.Element[];
    result: string | JSX.Element | JSX.Element[];
    isValid: boolean;
}

export default function Calculator (props: CalculatorProps) {
    const resultClassName = `calculator__result ${props.isValid ? '' : 'calculator__result_invisible'}`;

    return (
        <div className="calculator">
            <div className="calculator__input">
                {props.children}
            </div>
            <div className="calculator__output">
                <p className="calculator__info">
                    Результат и интерпретация в общем виде
                </p>
                <div className={resultClassName}>
                    {props.result}
                </div>
            </div>
        </div>
    )
}