import { useEffect, useState } from "react";
import Table from "../modules/Table";
import { getApi } from "../../services/api";
import Pagination from "../modules/Pagination";
import Search from "../modules/Search";
import Chart from "../modules/Chart";

function HomePage() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [currency, setCurrency] = useState("usd");
  const [chart, setChart] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(getApi(page, currency));
        const result = await response.json();
        setIsLoading(false);
        if (!result.status) {
          setData(result);
          setError("");
        } else {
          setError("Something went wrong! Please try again later.");
        }
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, [page, currency]);

  return (
    <>
      <Search currency={currency} setCurrency={setCurrency} />
      <Table
        data={data}
        isLoading={isLoading}
        currency={currency}
        setChart={setChart}
        error={error}
      />
      {!error && <Pagination page={page} setPage={setPage} />}
      {!!chart && <Chart chart={chart} setChart={setChart} />}
    </>
  );
}

export default HomePage;
