import Calculator from "./Calculator";
import Variable from "./Variable";
import { useState, ChangeEvent, useEffect } from "react";

export default function VCOrdinal () {
    const [range, setRange] = useState<number>(0);
    const [quartileRange, setQuartileRange] = useState<number>(0);
    const [varianceCoefficient, setVarianceCoefficient] = useState<number>(0);
    const [interpretation, setInterpretation] = useState<string>('');

    function handleRangeChange(e: ChangeEvent<HTMLInputElement>) {
        setRange(parseFloat(e.target.value));
    }

    function handleQuartileRangeChange(e: ChangeEvent<HTMLInputElement>) {
        setQuartileRange(parseFloat(e.target.value));
    }

    useEffect(() => {
        const coefficient = quartileRange / range * 100;
        setVarianceCoefficient(coefficient);
        setInterpretation(coefficient > 65
            ? 'высокий. Ответы респондентов скорее равномерно распределены по возможным вариантам ответа: респонденты не нашли согласия.'
            : coefficient < 35
                ? 'низкий. Выборка в основном выбирала один и тот же вариант ответа.'
                : 'умеренный.')
    }, [range, quartileRange, interpretation])

    return (
        <Calculator
            result={`Коэффициент вариации составляет ${varianceCoefficient ? varianceCoefficient.toFixed(2) : 0}%,
            разброс выборки по этому признаку ${varianceCoefficient ? interpretation: ''}`}>
            <Variable
                prompt="Общий размах"
                name="range"
                step="1"
                min="1"
                value={range}
                placeholder="5"
                onVariableChange={handleRangeChange}
            />
            <Variable
                prompt="Кваритильный размах"
                name="quartileRange"
                step="1"
                min="1"
                value={quartileRange}
                placeholder="2"
                onVariableChange={handleQuartileRangeChange}
            />
        </Calculator>
    )
}