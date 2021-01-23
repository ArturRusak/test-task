/**
 * @param { Number } value
 */
export const getColorByValue = (value) => {
  switch(value) {
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