import {ChangeEvent, useEffect, useState} from 'react';

export default function MeanCI() {
    const [confLevel, setConfLevel] = useState<number>(95);
    const [lowerBound, setLowerBound] = useState<number>(0);
    const [upperBound, setUpperBound] = useState<number>(0);
    const [mean, setMean] = useState<number>(0);
    const [SD, setSD] = useState<number>(0);
    const [sampleSize, setSampleSize] = useState(0);

    function handleMeanChange(e: ChangeEvent<HTMLInputElement>) {
        setMean(parseFloat(e.target.value));
    }

    function handleConfLevelChange(e: ChangeEvent<HTMLSelectElement>) {
        setConfLevel(parseFloat(e.target.value));
    }

    function handleSampleSizeChange(e: ChangeEvent<HTMLInputElement>) {
        setSampleSize(parseFloat(e.target.value));
    }

    function handleSDChange(e: ChangeEvent<HTMLInputElement>) {
        setSD(parseFloat(e.target.value));
    }

    useEffect(() => {
        let z;
        confLevel === 90
            ? z = 1.65
            : confLevel === 95
                ? z = 1.96
                : z = 2.33;
        let error = (SD / Math.sqrt(sampleSize)) * z;
        setLowerBound(mean - error);
        setUpperBound(mean + error);
    }, [mean, confLevel, sampleSize, SD])

    return (
        <div className="calculator">
            <div className="calculator__variable">
                <p className="calculator__prompt">
                    Выберите уровень доверительной вероятности:
                </p>
                <select className="calculator__input" defaultValue="95" onChange={handleConfLevelChange}>
                    <option value="90">90%</option>
                    <option value="95">95%</option>
                    <option value="99">99%</option>
                </select>
            </div>
            <div className="calculator__variable">
                <p className="calculator__prompt">
                    Размер выборки:
                </p>
                <input
                    className="calculator__input"
                    name="sampleSize"
                    type="number"
                        onWheel={(e) => e.currentTarget.blur()}
                        value={sampleSize ? sampleSize : ''}
                        placeholder="215"
                        onChange={handleSampleSizeChange}/>
            </div>
            <div className="calculator__variable">
                <p className="calculator__prompt">
                    Выборочное стандартное отклонение:
                </p>
                <input
                    className="calculator__input"
                    name="SD"
                    type="number"
                    step="0.01"
                    onWheel={(e) => e.currentTarget.blur()}
                    value={SD ? SD : ''}
                    placeholder="2.4"
                    onChange={handleSDChange}/>
            </div>
            <div className="calculator__variable">
                <p className="calculator__prompt">
                    Среднее по выборке:
                </p>
                <input
                    className="calculator__input"
                    name="mean"
                    type="number"
                    step="0.01"
                    onWheel={(e) => e.currentTarget.blur()}
                    value={mean ? mean : ''}
                    placeholder="32.4"
                    onChange={handleMeanChange}/>
            </div>
            <p className="calculator__result">
                На уровне доверительной вероятности {confLevel}% истинное среднее значение признака
                лежит в интервале от {lowerBound ? lowerBound.toFixed(2): 0} до {upperBound ? upperBound.toFixed(2): 0}
            </p>
        </div>)
}