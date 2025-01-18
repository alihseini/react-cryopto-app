import { useEffect, useState } from "react";
import styles from "./Search.module.css";
import { searchApi } from "../../services/api";
import { RotatingLines } from "react-loader-spinner";

function Search({ currency, setCurrency }) {
  const [query, setQuery] = useState("");
  const [searchedData, setSearchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setSearchedData([]);
    if (!query) {
      setIsLoading(false);
      return;
    }
    const controller = new AbortController();
    const searching = async () => {
      try {
        const response = await fetch(searchApi(query), {
          signal: controller.signal,
        });
        const result = await response.json();
        result
          ? setSearchedData(result.coins) & setIsLoading(false)
          : alert(result.status.error_message);
      } catch (error) {
        if (error.name !== "AbortError") {
          alert(error);
        }
      }
    };

    setIsLoading(true);
    searching();

    return () => controller.abort();
  }, [query]);
  return (
    <div className={styles.search}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
      </select>
      {(!!searchedData.length || isLoading) && (
        <div className={styles.searchList}>
          {isLoading && (
            <RotatingLines
              strokeColor="#fff"
              strokeWidth="2"
              width="50px"
              height="50px"
            />
          )}
          <ul>
            {searchedData.map((coin) => (
              <li key={coin.id}>
                <img src={coin.thumb} alt={coin.name} />
                <p>{coin.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Search;
