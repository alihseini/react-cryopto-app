import { useState } from "react";
import { convertedData } from "../../helpers/convertingData";
import styles from "./Chart.module.css";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function Chart({ chart, setChart }) {
  const [type, setType] = useState("prices");
  const convertedCharts = convertedData(chart, type);

  const typeHandler = (event) => {
    if (event.target.tagName === "BUTTON") {
      setType(event.target.innerText.toLowerCase().replace(" ", "_"));
    }
  };

  return (
    <div className={styles.chartModal}>
      <span className={styles.xButton} onClick={() => setChart(null)}>
        X
      </span>
      <div className={styles.chart}>
        <div className={styles.coinName}>
          <img src={chart.coin.image} />
          <p>{chart.coin.name}</p>
        </div>
        <div className={styles.graph}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart width="400px" height="400px" data={convertedCharts}>
              <CartesianGrid stroke="#404042" />
              <Line
                type="monotone"
                dataKey={type}
                stroke="#c44569"
                strokeWidth="2px"
              />
              <YAxis dataKey={type} domain={["auto", "auto"]} />
              <XAxis dataKey={type} hide />
              <Tooltip />
              <Legend />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className={styles.chartButtons} onClick={typeHandler}>
          <button className={type === "prices" ? styles.selected : null}>
            Prices
          </button>
          <button className={type === "market_caps" ? styles.selected : null}>
            Market Caps
          </button>
          <button className={type === "total_volumes" ? styles.selected : null}>
            Total Volumes
          </button>
        </div>
        <div className={styles.coinInfo}>
          <p>
            <span>Price:</span> {chart.coin.current_price}
          </p>
          <p>
            <span>ATH:</span> {chart.coin.ath}
          </p>
          <p>
            <span>Market Cap:</span> {chart.coin.market_cap}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Chart;
