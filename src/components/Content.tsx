import Accordion from './Accordion.js';
import MeanCI from './MeanCI.js';
import ProportionCI from './ProportionCI.js';
import QVC from './QVC.js';

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
        </div>
    )
}