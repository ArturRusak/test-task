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
   *
   * @param {Element} htmlElement
   * @param {Object} options
   */
  const setAttributes = (htmlElement, options) => {
    Object.entries(options).forEach(([attr, value]) => {
      htmlElement.setAttribute(attr, value);
    });
  };

  /**
   * @param {String} tag
   */
  const createSVGElement = (tag) => {
    return document.createElementNS("http://www.w3.org/2000/svg", tag);
  };

  return {
    getColorByValue,
    setAttributes,
    createSVGElement,
  };
})();
