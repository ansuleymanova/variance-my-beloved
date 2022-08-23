import Accordion from './Accordion.js';
import MeanCI from './MeanCI.js';
import ProportionCI from './ProportionCI.js';
import QVC from './QVC.js';
import VCInterval from './VCInterval.js';
import VCOrdinal from './VCOrdinal.js';

export default function Content () {

    return(
        <div className="content">
            <Accordion
                title="Коэффициент качественной вариации"
                subtitle="номинальные переменные">
                <QVC />
            </Accordion>
            <Accordion
                title="Стандартное отклонение для среднего"
                subtitle="количественные и псевдоколичественные переменные">
                    <MeanCI />
            </Accordion>
            <Accordion
                title="Стандартное отклонение для доли"
                subtitle="номинальные и порядковые переменные">
                <ProportionCI />
            </Accordion>
            <Accordion
                title="Коэффициент вариации"
                subtitle="для количественной переменной">
                <VCInterval />
            </Accordion>
            <Accordion
                title="Коэффициент вариации"
                subtitle="для порядковой переменной">
                <VCOrdinal />
            </Accordion>
        </div>
    )
}