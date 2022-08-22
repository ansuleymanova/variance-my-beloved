interface AccordionProps {
    isOpen: boolean;
    onClick: () => void;
    title: string;
    subtitle: string;
    children: JSX.Element;
}

export default function Accordion (props: AccordionProps) {
    const chevronClassName: string = `accordion__chevron ${props.isOpen ? "accordion__chevron_open" : ""}`;
    const triggerClassName: string = `accordion__trigger ${props.isOpen ? "accordion__trigger_active" : ""}`;
    const contentClassName: string = `accordion__content ${props.isOpen ? "accordion__content_visible" : ""}`;

    return (
        <div className="accordion">
            <button className={triggerClassName} onClick={props.onClick}>{props.title}
                <p className="accordion__info">{props.subtitle}</p>
            </button>
            <div className={chevronClassName} />
            <div className={contentClassName}>
                {props.children}
            </div>
        </div>
    )
}