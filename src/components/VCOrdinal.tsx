import { useState, ChangeEvent, useEffect } from 'react';
import {varianceInterpretationOrdinal} from '../utils/constants.js';
import Calculator from './Calculator.js';
import Variable from './Variable.js';

export default function VCOrdinal () {
    const [range, setRange] = useState<number>(0);
    const [quartileRange, setQuartileRange] = useState<number>(0);
    const [varianceCoefficient, setVarianceCoefficient] = useState<number>(0);
    const [interpretation, setInterpretation] = useState<string>('');
    const [isValid, setIsValid] = useState<boolean>(false);

    function handleRangeChange(e: ChangeEvent<HTMLInputElement>) {
        setRange(parseFloat(e.target.value));
    }

    function handleQuartileRangeChange(e: ChangeEvent<HTMLInputElement>) {
        setQuartileRange(parseFloat(e.target.value));
    }

    useEffect(() => {
        const coefficient = quartileRange / range * 100;
        setVarianceCoefficient(coefficient);
        const selectedInterpretation = coefficient > 65 ? "high" : coefficient < 35 ? "low" : "medium";
        setInterpretation(varianceInterpretationOrdinal[selectedInterpretation]);
        setIsValid(range > 0 && quartileRange > 0);
    }, [range, quartileRange, interpretation])

    return (
        <Calculator
            isValid={isValid}
            result={`Коэффициент вариации составляет ${varianceCoefficient ? varianceCoefficient.toFixed(2) : 0}%,
            разброс выборки по этому признаку ${varianceCoefficient ? interpretation: ''}.`}>
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