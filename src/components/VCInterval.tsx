import {ChangeEvent, useEffect, useState} from 'react';
import {varianceInterpretationInterval} from '../utils/constants.js';
import Calculator from './Calculator.js';
import Variable from './Variable.js';


export default function VCInterval () {
    const [mean, setMean] = useState<number>(0);
    const [SD, setSD] = useState<number>(0);
    const [varianceCoefficient, setVarianceCoefficient] = useState<number>(0);
    const [interpretation, setInterpretation] = useState<string>('');
    const [isValid, setIsValid] = useState<boolean>(false);

    function handleMeanChange(e: ChangeEvent<HTMLInputElement>) {
        setMean(parseFloat(e.target.value));
    }

    function handleSDChange(e: ChangeEvent<HTMLInputElement>) {
        setSD(parseFloat(e.target.value));
    }

    useEffect(() => {
        const coefficient = SD / mean * 100;
        setVarianceCoefficient(coefficient);
        const selectedInterpretation = coefficient > 65 ? "high" : coefficient < 35 ? "low" : "medium";
        setInterpretation(varianceInterpretationInterval[selectedInterpretation]);
        setIsValid(SD > 0 && mean > 0);
    }, [mean, SD, interpretation])

    return (
        <Calculator
            isValid={isValid}
            result={`Коэффициент вариации составляет ${varianceCoefficient ? varianceCoefficient.toFixed(2) : 0}%,
            разброс выборки по этому признаку ${varianceCoefficient ? interpretation: ''}.`}>
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