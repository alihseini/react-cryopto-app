import { useEffect, useState } from "react";
import Table from "../modules/Table";
import { getApi } from "../../services/api";
import Pagination from "../modules/Pagination";
import Search from "../modules/Search";

function HomePage() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [currency, setCurrency] = useState("usd");

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(getApi(page, currency));
        const result = await response.json();
        setIsLoading(false);
        result ? setData(result) : alert(result.status.error_message);
      } catch (error) {
        alert(error.message);
      }
    };
    fetchData();
  }, [page, currency]);

  return (
    <>
      <Search currency={currency} setCurrency={setCurrency} />
      <Table data={data} isLoading={isLoading} currency={currency} />
      <Pagination page={page} setPage={setPage} />
    </>
  );
}

export default HomePage;
