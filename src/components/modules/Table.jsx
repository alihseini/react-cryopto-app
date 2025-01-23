import { RotatingLines } from "react-loader-spinner";
import TableRow from "./TableRow";
import styles from "./Table.module.css";

function Table({ data, isLoading, currency, setChart, error }) {
  return error ? (
    <p className={styles.errorText}>{error}</p>
  ) : (
    <div className={styles.container}>
      {isLoading ? (
        <RotatingLines strokeColor="#533740" strokeWidth="2" />
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h</th>
              <th>Total Volume</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((coin) => (
              <TableRow
                coin={coin}
                key={coin.id}
                currency={currency}
                setChart={setChart}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Table;
