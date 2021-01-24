const DATA = [
  {phrase: 'Aaa', value: 1},
  {phrase: 'Aa1', value: 1},
  {phrase: 'Aa2', value: 1},
  {phrase: 'Aa3', value: 1},
  {phrase: 'A1', value: 2},
  {phrase: 'A2', value: 2},
  {phrase: 'A3', value: 2},
  {phrase: 'Baa1', value: 2},
  {phrase: 'Baa2', value: 2},
  {phrase: 'Baa3', value: 2},
  {phrase: 'Ba1', value: 3},
  {phrase: 'Ba2', value: 3},
  {phrase: 'Ba3', value: 3},
  {phrase: 'B1', value: 3},
  {phrase: 'B2', value: 3},
  {phrase: 'B3', value: 3},
  {phrase: 'Caa1', value: 3},
  {phrase: 'Caa2', value: 3},
  {phrase: 'Caa3', value: 3},
  {phrase: 'Ca', value: 3},
  {phrase: 'C', value: 3}
];

const heightChart = 500;

const HEIGHT_SINGLE_ITEM = Number.parseInt(heightChart / DATA.length, 10);

document.addEventListener("DOMContentLoaded", function(event) {
  let mapElements = {};
  let triangleSvgElement = null;
  const selectElement = document.getElementById('code');
  const codeContainerElement = document.getElementById("code-container");
  const svgChartElement = chartUtils.createSVGElement("svg");

  chartUtils.setAttributes(svgChartElement, {
    width: 100,
    height: heightChart,
  });
  codeContainerElement.appendChild(svgChartElement);

  DATA.forEach((dataItem, index) => {
    const textElement = chartUtils.createSVGElement("text");
    const rectElement = chartUtils.createSVGElement("rect");
    const color = chartUtils.getColorByValue(dataItem.value);
    chartUtils.setAttributes(rectElement, {
      width: 30,
      height: HEIGHT_SINGLE_ITEM,
      x: 50,
      y: index * HEIGHT_SINGLE_ITEM ,
      fill: color
    });
    chartUtils.setAttributes(textElement, {
      x: 0,
      y: (index + 1) * HEIGHT_SINGLE_ITEM - 7,
      class: "text",
    });
    mapElements = {...mapElements, [dataItem.phrase]: index * HEIGHT_SINGLE_ITEM};
    textElement.textContent = dataItem.phrase;

    svgChartElement.appendChild(textElement);
    svgChartElement.appendChild(rectElement);
  });

  selectElement.addEventListener('input', (event) => {
    const key = Object.keys(mapElements).find((key) => key === event.target.value);

    if(key && triangleSvgElement){
      triangleSvgElement.remove();
      triangleSvgElement = null;
    }

    if(!key) {
      triangleSvgElement && triangleSvgElement.remove();
      triangleSvgElement = null;
      return;
    }

    triangleSvgElement = chartUtils.createSVGElement('svg');
    chartUtils.setAttributes(triangleSvgElement, {
      width: 20,
      height: 20,
      x: 80,
      y: mapElements[key],
      class: "svg-triangle",
    });
    const triangleElement = chartUtils.createSVGElement('path');
    chartUtils.setAttributes(triangleElement, {
      d: "M 0 10 L 20 0 L 20 20 Z",
      fill: "blue"
    });
    triangleSvgElement.appendChild(triangleElement);
    svgChartElement.appendChild(triangleSvgElement);
  });

});
