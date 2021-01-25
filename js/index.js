// Add custom method to prototype
SVGElement.prototype.setAttributes = function (options) {
  Object.entries(options).forEach(([attr, value]) => {
    this.setAttribute(attr, value);
  });

  return this;
};

document.addEventListener("DOMContentLoaded", function(event) {
  let mapElements = {};
  let triangleSvgElement = null;
  const selectElement = document.getElementById('code');
  const codeContainerElement = document.getElementById("code-container");
  const svgChartElement = chartUtils.createSVGElement("svg");

  svgChartElement.setAttributes({
    width: 100,
    height: heightChart,
  });
  codeContainerElement.appendChild(svgChartElement);

  DATA.forEach((dataItem, index) => {
    const textElement = chartUtils.createSVGElement("text");
    const rectElement = chartUtils.createSVGElement("rect");
    const color = chartUtils.getColorByValue(dataItem.value);

    rectElement.setAttributes({
      width: 30,
      height: HEIGHT_SINGLE_ITEM,
      x: 50,
      y: index * HEIGHT_SINGLE_ITEM ,
      fill: color
    });
    textElement.setAttributes({
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
    triangleSvgElement.setAttributes({
      width: 20,
      height: 20,
      x: 80,
      y: mapElements[key],
      class: "svg-triangle",
    });

    const triangleElement = chartUtils.createSVGElement('path');
    triangleElement.setAttributes({
      d: "M 0 10 L 20 0 L 20 20 Z",
      fill: "blue"
    });
    triangleSvgElement.appendChild(triangleElement);
    svgChartElement.appendChild(triangleSvgElement);
  });

});
