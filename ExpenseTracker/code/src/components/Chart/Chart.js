import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const datapointValues = props.datapoints.map((dp) => dp.value);
  const maximun = Math.max(...datapointValues);
  return (
    <div className="chart">
      {props.datapoints.map((dp) => (
        <ChartBar
          key={dp.label}
          value={dp.value}
          maxValue={maximun}
          label={dp.label}
        />
      ))}
    </div>
  );
};

export default Chart;
