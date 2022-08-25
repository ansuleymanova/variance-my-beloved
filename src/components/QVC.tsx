import {ChangeEvent, useEffect, useState} from 'react';
import {interpretationQVC} from '../utils/constants.js';
import Calculator from './Calculator.js';
import Variable from './Variable.js';
import DynamicVariable from './DynamicVariable.js';

export default function QVC () {
    const [QVC, setQVC] = useState<number>(0);
    const [inputList, setInputList] = useState([0]);
    const [sampleSize, setSampleSize] = useState<number>(0);
    const [isValid, setIsValid] = useState<boolean>(false);
    const [interpretation, setInterpretation] = useState<string>('');

    function handleSampleSizeChange(e: ChangeEvent<HTMLInputElement>) {
        setSampleSize(parseFloat(e.target.value));
    }

    useEffect(() => {
        const list: number[] = [];
        inputList.forEach((input) => {
            const w = Math.pow(input / sampleSize, 2);
            list.push(w);
        })
        let sumOfSquares = 0;
        for (let i=0; i< list.length; i++) {
            sumOfSquares += list[i];
        }
        const k = list.length;
        const coefficient = (k * (1 - sumOfSquares) / (k - 1));
        setQVC(coefficient);
        const selectedInterpretation = coefficient > 0.65 ? "high" : coefficient < 0.35 ? "low" : "medium";
        setInterpretation(interpretationQVC[selectedInterpretation]);
        let sumOfResps = 0;
        for (let i=0; i< inputList.length; i++) {
            sumOfResps += inputList[i];
        }
        setIsValid(sumOfResps === sampleSize && sumOfResps !== 0);
    }, [sampleSize, inputList])

    return (
        <Calculator
            isValid={isValid}
            result={`Коэффициент качественной вариации выборки по этому признаку составляет ${QVC || ''}: ${interpretation}.`}
        >
            <Variable
                prompt="Размер выборки"
                name="sampleSize"
                step="1"
                min="1"
                value={sampleSize}
                placeholder="215"
                onVariableChange={handleSampleSizeChange}
            />
            <DynamicVariable
                inputList={inputList}
                setInputList={setInputList}
                prompt="Частота категории"
                name="category"
                elementType="int"
                placeholder="110"
            />
        </Calculator>
    )
}