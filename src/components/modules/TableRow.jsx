import chartDown from "../../assets/chartDown.svg";
import chartUp from "../../assets/chartUp.svg";
import styles from "./TableRow.module.css";

function TableRow({
  coin: {
    name,
    symbol,
    image,
    price_change_percentage_24h,
    total_volume,
    current_price,
  },
}) {
  return (
    <tr className={styles.tr}>
      <td>
        <div className={styles.coin}>
          <img src={image} alt="coin image" />
          <p>{symbol.toUpperCase()}</p>
        </div>
      </td>
      <td>{name}</td>
      <td>${current_price.toLocaleString()}</td>
      <td
        className={
          price_change_percentage_24h > 0 ? styles.success : styles.error
        }
      >
        {price_change_percentage_24h.toFixed(2)}%
      </td>
      <td>${total_volume.toLocaleString()}</td>
      <td>
        <img src={price_change_percentage_24h > 0 ? chartUp : chartDown} />
      </td>
    </tr>
  );
}

export default TableRow;
