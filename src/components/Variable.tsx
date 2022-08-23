import {ChangeEvent} from 'react';

interface VariableProps {
    prompt: string;
    name: string;
    step: string;
    value: number;
    placeholder: string;
    onVariableChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Variable (props: VariableProps) {
    return (
        <div className="calculator__variable">
            <p className="calculator__prompt">
                {props.prompt}
            </p>
            <input
                className="calculator__field calculator__field_type_number"
                type="number"
                name={props.name}
                step={props.step}
                onWheel={(e) => e.currentTarget.blur()}
                value={props.value ? props.value : ''}
                placeholder={props.placeholder}
                onChange={props.onVariableChange}/>
        </div>
    )
}