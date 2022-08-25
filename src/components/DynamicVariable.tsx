import Variable from './Variable.js';

export default function DynamicVariable(props: any) {
    const removeButtonClassName = `calculator__button calculator__button_type_remove ${props.inputList.length === 1 ? 'calculator__button_invisible' : ''}`

    function handleInputChange(e: any, index: number) {
        const list = [...props.inputList];
        if (props.elementType === 'int') {
            list[index] = parseInt(e.target.value);
        } else {
            list[index] = parseFloat(e.target.value);
        }
        props.setInputList(list);
    }

    function handleAddClick() {
        props.setInputList([...props.inputList, 0])
    }

    function handleRemoveClick() {
        let list = [...props.inputList];
        list.splice(-1);
        props.setInputList(list);
    }

    function makeVariable(number: number, index: number) {
        return (
            <Variable
                key={index}
                prompt={`${props.prompt} #${index + 1}`}
                name={props.name}
                step="0.01"
                value={number}
                placeholder=".34"
                onVariableChange={e => handleInputChange(e, index)} />
        )
    }

    return(
        <>
            {props.inputList.map((number: number, index: number) => makeVariable(number, index))}
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
        </>
    )
}