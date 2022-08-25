import { ChangeEvent, useEffect, useState } from 'react';
import { zScore } from '../utils/constants';
import Calculator from './Calculator.js';
import Variable from './Variable.js';
import DynamicVariable from './DynamicVariable.js';

export default function ProportionCI () {
    const [inputList, setInputList] = useState([0]);
    const [confLevel, setConfLevel] = useState('95');
    const [sampleSize, setSampleSize] = useState<number>(0);
    const [resultList, setResultList] = useState(['']);
    const [isValid, setIsValid] = useState<boolean>(false);

    function handleConfLevelChange(e: ChangeEvent<HTMLSelectElement>) {
        setConfLevel(e.target.value);
    }

    function handleSampleSizeChange(e: ChangeEvent<HTMLInputElement>) {
        setSampleSize(parseFloat(e.target.value));
    }

    useEffect(() => {
        // @ts-ignore
        const z: number = zScore[confLevel];
         const list: string[] = [];
        inputList.forEach((proportion: number) => {
            const error = z * Math.sqrt(proportion * (1 - proportion) / sampleSize);
            list.push(` ${((proportion - error)*100).toFixed(1)}% - ${((proportion + error)*100).toFixed(1)}%`);
        })
        setResultList(list);
        setIsValid(sampleSize > 0 && inputList[0] !== 0 && !inputList.includes(NaN));
    }, [inputList, confLevel, sampleSize])

    return (
        <Calculator
            isValid={isValid}
            result={
            <>
                На уровне доверительной вероятности {confLevel}%
                истинные доли признака лежат в интервалах:
                {resultList.map((result: string, index: number) => {
                    return (<p key={index}>{result}</p>)
                })}
            </>
        }
        >
            <div className="calculator__variable">
                <p className="calculator__prompt">
                    Выберите уровень доверительной вероятности
                </p>
                <select className="calculator__field" defaultValue="95" onChange={handleConfLevelChange}>
                    <option value="90">90%</option>
                    <option value="95">95%</option>
                    <option value="99">99%</option>
                </select>
            </div>
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
                prompt="Доля категории"
                name="proportion"
                inputList={inputList}
                setInputList={setInputList}
                elementType="float"
            />
        </Calculator>
    )
}