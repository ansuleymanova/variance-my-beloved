export default function Accordion (props: any) {
    const chevronClassName = `accordion__chevron ${props.isOpen ? "accordion__chevron_open" : ""}`;

    return (
        <div className="accordion">
            <button className="accordion__trigger">{props.title}
                <p className="accordion__info">{props.subtitle}</p>
            </button>
            <div className={chevronClassName} />
            <div className="accordion__content">
                {props.isOpen ? props.children : ""}
            </div>
        </div>
    )
}