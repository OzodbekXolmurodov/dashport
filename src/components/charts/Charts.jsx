import React from "react";
import "./Charts.scss";

import { LineChart } from "@mui/x-charts/LineChart";
import { BarChart } from "@mui/x-charts/BarChart";

const Charts = () => {
  return (
    <>
      <div className="chart__bottom">
        <div className="chart__bottom__left">
          <LineChart
            xAxis={[{ data: [1, 3, 5, 7, 9, 10] }]}
            series={[
              {
                data: [20, 10, 30, 5, 33, 1],
                area: true,
              },
            ]}
          />
        </div>
        <div className="chart__bottom__right">
          <BarChart
            xAxis={[{ scaleType: "band", data: ["A", "B", "C"] }]}
            series={[
              { data: [12, 33, 45] },
              { data: [16, 34, 32] },
              { data: [22, 52, 36] },
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default Charts;
