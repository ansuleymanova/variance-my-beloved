import {ChangeEvent, useEffect, useState} from "react";
import Variable from "./Variable";
import Calculator from "./Calculator";

export default function QVC (props: any) {
    const [QVC, setQVC] = useState<number>(0);
    const [inputList, setInputList] = useState([0]);
    const [sampleSize, setSampleSize] = useState<number>(0);
    const [isValid, setIsValid] = useState<boolean>(false);
    const removeButtonClassName = `calculator__button calculator__button_type_remove ${inputList.length === 1 ? 'calculator__button_invisible' : ''}`

    function handleSampleSizeChange(e: ChangeEvent<HTMLInputElement>) {
        setSampleSize(parseFloat(e.target.value));
    }

    function handleInputChange(e: any, index: number) {
        const list = [...inputList];
        list[index] = parseInt(e.target.value);
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
                prompt={`Частота категории #${index + 1}`}
                name="proportion"
                step="0.01"
                value={number}
                placeholder="12"
                onVariableChange={e => handleInputChange(e, index)} />
        )
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
        let sumOfResps = 0;
        for (let i=0; i< inputList.length; i++) {
            sumOfResps += inputList[i];
        }
        setIsValid(sumOfResps === sampleSize && QVC >= 0);
    }, [sampleSize, inputList])

    return (
        <Calculator
            isValid={isValid}
            result={`Коэффициент качественной вариации выборки по этому признаку составляет ${QVC}`}
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