import React, {useMemo, useState} from "react";
import Triangle from "../../icons/triangle";
import {HEIGHT_SINGLE_ITEM, DATA} from "../constants";
import {getColorByValue} from "../utils";

const Chart = React.memo(({ selectedName }) => {

  const [mapElements, setMapElements] = useState(null);
  // processing data
  const processedData = useMemo(() => {
    let yPos = 0;
    let mapItems = {};
    const elements = DATA.map(({phrase, value}, index) => {
      const y = yPos;
      yPos += HEIGHT_SINGLE_ITEM;
      const yText = yPos - 5;
      const color = getColorByValue(value);
      mapItems = { ...mapItems, [phrase]: y };
      return { name: phrase, yText, yChart: y, color };
    });
    setMapElements(mapItems);
    return elements;
  }, []);

  return (
    <svg width="100" height="500">
      {processedData.map((item) => (
        <>
          <text key={`${item.name}-text`} x="0" y={item.yText} fontSize="15px" className="text">
            {item.name}
          </text>
          <rect key={`${item.name}-rect`} name={item.name} width="30" height={HEIGHT_SINGLE_ITEM} x="50" y={item.yChart} fill={item.color}/>
          {selectedName && <Triangle yPos={mapElements[selectedName]}/>}
        </>
      ))}
    </svg>
  );
});

export default Chart;
