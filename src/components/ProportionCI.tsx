import Calculator from './Calculator.js';
import { ChangeEvent, useEffect, useState } from "react";
import Variable from "./Variable";
import { zScore } from '../utils/constants';

export default function ProportionCI () {
    const [inputList, setInputList] = useState([0]);
    const [confLevel, setConfLevel] = useState('95');
    const [sampleSize, setSampleSize] = useState<number>(0);
    const [resultList, setResultList] = useState(['']);
    const [isValid, setIsValid] = useState<boolean>(false);
    const removeButtonClassName = `calculator__button calculator__button_type_remove ${inputList.length === 1 ? 'calculator__button_invisible' : ''}`

    function handleConfLevelChange(e: ChangeEvent<HTMLSelectElement>) {
        setConfLevel(e.target.value);
    }

    function handleSampleSizeChange(e: ChangeEvent<HTMLInputElement>) {
        setSampleSize(parseFloat(e.target.value));
    }

    function handleInputChange(e: any, index: number) {
        const list = [...inputList];
        list[index] = parseFloat(e.target.value);
        setInputList(list);
    }

    function handleAddClick() {
        setInputList([...inputList, 0])
    }

    function handleRemoveClick() {
        let list = [...inputList];
        list.splice(-1);
        setInputList(list);
    }

    function makeVariable(number: number, index: number) {
        return (
            <Variable
                key={index}
                prompt={`Доля категории #${index + 1}`}
                name="proportion"
                step="0.01"
                value={number}
                placeholder=".34"
                onVariableChange={e => handleInputChange(e, index)} />
        )
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
                <p>На уровне доверительной вероятности {confLevel}% истинные доли
                    признака лежат в интервалах:</p>
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
            <>
                {inputList.map((number: number, index: number) => makeVariable(number, index))}
            </>
            <div className="calculator__buttons">
                <button
                    className="calculator__button calculator__button_type_add"
                    onClick={handleAddClick}
                />
                <button
                    className={removeButtonClassName}
                    onClick={handleRemoveClick}
                />
            </div>
        </Calculator>
    )
}