const chartUtils = (function () {
  /**
   * @param { Number } value
   */
  const getColorByValue = (value) => {
    switch (value) {
      case 1:
        return '#009900';
      case 2:
        return '#FFD966';
      case 3:
        return '#FF0000';
      default:
        return '#dadada'
    }
  };

  /**
   * @param {String} tag
   */
  const createSVGElement = (tag) => {
    return document.createElementNS("http://www.w3.org/2000/svg", tag);
  };

  return {
    getColorByValue,
    createSVGElement,
  };
})();


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