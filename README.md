# [Variance, my beloved](https://variance.monster)

Variance, my beloved (VMB) - это веб-приложение с набором простых калькуляторов для 
описательной статистики. Проект хостится на Github Pages на кастомном доменном 
имени https://variance.monster. 

## Что умеет  VMB

VMB умеет считать: коэффициент качественной вариации, доверительные интервалы, 
коэффициенты вариации для количественных и порядковых переменных. Результатом 
рассчетов становится интерпретация в общем виде, в которую нужно подставить 
содержательные параметры задачи: о каком признаке, единице измерения и
совокупности идет речь. 

***Coming soon**: информативные подсказки о смысле рассчитываемых параметров и 
условиях генерализуемости результатов.*

### Коэффициент качественной вариации
Предназначен исключительно для номинальных переменных, поскольку не учитывает
порядок категорий при оценке гомогенности выборки по признаку. Для рассчетов требует
размер выборки и частоты каждой из категорий признака. Позволяет оценить вариативность
признака по шкале от 0 до 1, где 0 - отсутствие вариации (вся выборка выбрала один и тот же вариант ответа),
а 1 - максимальная вариативность (респонденты распределились по категориям поровну, ни одной 
из категорий не было отдано предпочтение). 

### Доверительный интервал для среднего
Рассчитывается для количественных или псевдоколичественных переменных. Принимает
на вход уровень доверительной вероятности, размер выборки, выборочное стандартное 
отклонение и среднее. Позволяет с заданной точностью оценить, в каких пределах будет 
лежать истинное среднее значение признака в генеральной совокупности.

### Доверительный интервал для доли
Предназначен для порядковых и номинальных переменных. Принимает на вход уровень доверительной вероятности,
долю категории в выборке и размер выборки. Позволяет с заданной точностью оценить, 
какой будет доля категории признака в генеральной совокупности, а также сделать
выводы о преобладании доли одной категории над другой в генеральной совокупности.

### Коэффициенты вариации для количественных переменных и для порядковых переменных
Не несет большого содержательного смысла, но упрощает задачу оценки вариативности количественных
переменных. Оценить ее бывает сложно потому, что неопытным исследователям на глаз неясно, какое стандартное
отклонение следует считать большим (говорящим о высокой вариативности), а какое - маленьким. Для этой цели
коэффициент вариации сравнивает стандарное отклонение со средним и выражает это отношение в процентах. К 
коэффициенту можно с оговорками применять ясные пороги: до 30% - низкий разброс, 30-70% - умеренный, 70%+ - высокий.

К порядковым переменным применен тот же принцип, но вместо стандартного отклонения и среднего используется квартильный
разброс и общий разброс.

## Технологии

Приложение написано на HTML, CSS и Typescript с применением методологии БЭМ. Typescript-файлы находятся 
в директории components/, CSS - в директории blocks/. В проекте настроена сборка с помощью Vite. 
Верстка в проекте адаптивная, реализована в основном через медиазапросы. Минимальный размер экрана, на
который рассчитано приложение - 320 пикселей. Анимации написаны на чистом CSS. Иконки  - от 
[radix-ui](https://www.radix-ui.com), шрифт - [PT Root UI](https://www.paratype.ru/fonts/pt/pt-root-ui).

## Сборка
Для локального запуска проекта нужно выполнить команду ```npm install && npm run dev``` из корневой директории
(той, которая содержит файл ```package.json```). 
