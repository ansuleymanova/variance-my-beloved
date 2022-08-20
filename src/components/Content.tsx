import Accordion from './Accordion.js';
import MeanCI from './MeanCI.js';

export default function Content (props: any) {
    return(
        <div className="content">
            <Accordion
                title="Стандартное отклонение для среднего"
                subtitle="Вычисляется для количественных переменных"
                isOpen={props.isMeanCICalcOpen}
            >
                <MeanCI />
            </Accordion>
        </div>
    )
}