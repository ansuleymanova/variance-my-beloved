import {ChangeEvent, useEffect, useState} from 'react';
import {zScore} from '../utils/constants.js';
import Calculator from './Calculator.js';
import Variable from './Variable.js';

export default function MeanCI() {
    const [confLevel, setConfLevel] = useState<string>("95%");
    const [lowerBound, setLowerBound] = useState<number>(0);
    const [upperBound, setUpperBound] = useState<number>(0);
    const [mean, setMean] = useState<number>(0);
    const [SD, setSD] = useState<number>(0);
    const [sampleSize, setSampleSize] = useState<number>(0);
    const [isValid, setIsValid] = useState<boolean>(false);

    function handleMeanChange(e: ChangeEvent<HTMLInputElement>) {
        setMean(parseFloat(e.target.value));
    }

    function handleConfLevelChange(e: ChangeEvent<HTMLSelectElement>) {
        setConfLevel(e.target.value);
    }

    function handleSampleSizeChange(e: ChangeEvent<HTMLInputElement>) {
        setSampleSize(parseFloat(e.target.value));
    }

    function handleSDChange(e: ChangeEvent<HTMLInputElement>) {
        setSD(parseFloat(e.target.value));
    }

    useEffect(() => {
        const z = zScore[confLevel];
        let error = (SD / Math.sqrt(sampleSize)) * z;
        setLowerBound(mean - error);
        setUpperBound(mean + error);
        setIsValid(mean > 0 && SD > 0 && sampleSize > 0);
    }, [mean, confLevel, sampleSize, SD])

    return (
        <Calculator
            isValid={isValid}
            result={`На уровне доверительной вероятности ${confLevel} истинное среднее значение признака
                    лежит в интервале от ${lowerBound ? lowerBound.toFixed(2): 0} 
                    до ${upperBound ? upperBound.toFixed(2): 0}.`}>
            <div className="calculator__variable">
                <p className="calculator__prompt">
                    Выберите уровень доверительной вероятности
                </p>
                <select className="calculator__field" defaultValue="95%" onChange={handleConfLevelChange}>
                    <option value="90%">90%</option>
                    <option value="95%">95%</option>
                    <option value="99%">99%</option>
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
            <Variable
                prompt="Выборочное стандартное отклонение"
                name="SD"
                step="0.01"
                value={SD}
                placeholder="2.4"
                onVariableChange={handleSDChange}
            />
            <Variable
                prompt="Среднее по выборке"
                name="mean"
                step="0.01"
                value={mean}
                placeholder="32.7"
                onVariableChange={handleMeanChange}
            />
        </Calculator>)
}