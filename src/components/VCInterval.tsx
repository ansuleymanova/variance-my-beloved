import Calculator from "./Calculator";
import Variable from "./Variable";
import {ChangeEvent, useEffect, useState} from "react";

export default function VCInterval () {
    const [mean, setMean] = useState<number>(0);
    const [SD, setSD] = useState<number>(0);
    const [varianceCoefficient, setVarianceCoefficient] = useState<number>(0);
    const [interpretation, setInterpretation] = useState<string>('');

    function handleMeanChange(e: ChangeEvent<HTMLInputElement>) {
        setMean(parseFloat(e.target.value));
    }

    function handleSDChange(e: ChangeEvent<HTMLInputElement>) {
        setSD(parseFloat(e.target.value));
    }

    useEffect(() => {
        const coefficient = SD / mean * 100;
        setVarianceCoefficient(coefficient);
        setInterpretation(coefficient > 65
            ? 'высокий. Ответы респондентов более или менее равномерно распределены по возможным вариантам ответа.'
            : coefficient < 35
                ? 'низкий. Ответы респондентов в основном находятся около среднего.'
                : 'умеренный.')
    }, [mean, SD, interpretation])

    return (
        <Calculator
            info="Результат и интерпретация в общем виде"
            result={`Коэффициент вариации составляет ${varianceCoefficient ? varianceCoefficient.toFixed(2) : 0}%,
            разброс выборки по этому признаку ${varianceCoefficient ? interpretation: ''}`}>
            <Variable
                prompt="Среднее по выборке"
                name="mean"
                step="0.01"
                value={mean}
                placeholder="25"
                onVariableChange={handleMeanChange}
            />
            <Variable
                prompt="Стандартное отклонение"
                name="SD"
                step="0.01"
                value={SD}
                placeholder="2.3"
                onVariableChange={handleSDChange}
            />
        </Calculator>
    )
}