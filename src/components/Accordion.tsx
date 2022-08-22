import {useState } from "react";

interface AccordionProps {
    title: string;
    subtitle: string;
    children: JSX.Element;
}

export default function Accordion (props: AccordionProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const chevronClassName: string = `accordion__chevron ${isOpen ? "accordion__chevron_open" : ""}`;
    const triggerClassName: string = `accordion__trigger ${isOpen ? "accordion__trigger_active" : ""}`;
    const contentClassName: string = `accordion__content ${isOpen ? "accordion__content_visible" : ""}`;

    function toggleCalc () {
        setIsOpen(!isOpen);
    }

    return (
        <div className="accordion">
            <button className={triggerClassName} onClick={toggleCalc}>
                {props.title}
                <p className="accordion__info">{props.subtitle}</p>
            </button>
            <div className={chevronClassName} />
            <div className={contentClassName}>
                {props.children}
            </div>
        </div>
    )
}