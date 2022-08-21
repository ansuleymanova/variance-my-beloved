export default function Accordion (props: any) {
    const chevronClassName = `accordion__chevron ${props.isOpen ? "accordion__chevron_open" : ""}`;
    const triggerClassName = `accordion__trigger ${props.isOpen ? "accordion__trigger_active" : ""}`;
    const contentClassName = `accordion__content ${props.isOpen ? "accordion__content_visible" : ""}`;

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