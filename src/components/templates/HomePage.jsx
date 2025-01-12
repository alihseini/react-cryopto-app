import { useEffect, useState } from "react";
import Table from "../modules/Table";
import { getApi } from "../../services/api";
import Pagination from "../modules/Pagination";

function HomePage() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const response = await fetch(getApi(page));
      const result = await response.json();
      setData(result);
      setIsLoading(false);
    };
    fetchData();
  }, [page]);

  return (
    <>
      <Table data={data} isLoading={isLoading} />
      <Pagination page={page} setPage={setPage} />
    </>
  );
}

export default HomePage;
