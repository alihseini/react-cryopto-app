import chartDown from "../../assets/chartDown.svg";
import chartUp from "../../assets/chartUp.svg";
import { chartApi } from "../../services/api";
import styles from "./TableRow.module.css";

function TableRow({ coin, currency, setChart }) {
  const showChartHandler = async () => {
    try {
      const responce = await fetch(chartApi(id));
      const result = await responce.json();
      setChart({ ...result, coin });
    } catch (error) {}
  };

  const {
    id,
    name,
    symbol,
    image,
    price_change_percentage_24h,
    total_volume,
    current_price,
  } = coin;

  return (
    <tr className={styles.tr}>
      <td>
        <div className={styles.coin} onClick={showChartHandler}>
          <img src={image} alt="coin image" />
          <p>{symbol.toUpperCase()}</p>
        </div>
      </td>
      <td>{name}</td>
      {currency === "usd" && <td>${current_price.toLocaleString()}</td>}
      {currency === "eur" && <td>€{current_price.toLocaleString()}</td>}
      {currency === "jpy" && <td>¥{current_price.toLocaleString()}</td>}
      <td
        className={
          price_change_percentage_24h > 0 ? styles.success : styles.error
        }
      >
        {price_change_percentage_24h.toFixed(2)}%
      </td>
      {currency === "usd" && <td>${total_volume.toLocaleString()}</td>}
      {currency === "eur" && <td>€{total_volume.toLocaleString()}</td>}
      {currency === "jpy" && <td>¥{total_volume.toLocaleString()}</td>}
      <td>
        <img src={price_change_percentage_24h > 0 ? chartUp : chartDown} />
      </td>
    </tr>
  );
}

export default TableRow;
