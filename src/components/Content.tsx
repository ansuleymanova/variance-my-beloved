import Accordion from './Accordion.js';
import MeanCI from './MeanCI.js';
import ProportionCI from './ProportionCI.js';
import QVC from './QVC.js';

interface ContentProps {
    isQVCCalcOpen: boolean;
    isMeanCICalcOpen: boolean;
    isProportionCICalcOpen: boolean;
    onClickQVCCalc: () => void;
    onClickMeanCICalc: () => void;
    onClickProportionCICalc: () => void;
}

export default function Content (props: ContentProps) {
    return(
        <div className="content">
            <Accordion
                title="Коэффициент качественной вариации"
                subtitle="номинальные переменные"
                isOpen={props.isQVCCalcOpen}
                onClick={props.onClickQVCCalc}>
                <QVC />
            </Accordion>
            <Accordion
                title="Стандартное отклонение для среднего"
                subtitle="количественные и псевдоколичественные переменные"
                isOpen={props.isMeanCICalcOpen}
                onClick={props.onClickMeanCICalc}>
                    <MeanCI />
            </Accordion>
            <Accordion
                title="Стандартное отклонение для доли"
                subtitle="номинальные и порядковые переменные"
                isOpen={props.isProportionCICalcOpen}
                onClick={props.onClickProportionCICalc}>
                <ProportionCI />
            </Accordion>
        </div>
    )
}