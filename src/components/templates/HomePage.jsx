import { useEffect, useState } from "react";
import Table from "../modules/Table";
import { getApi } from "../../services/api";

function HomePage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(getApi());
      const result = await response.json();
      setData(result);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <Table data={data} isLoading={isLoading} />
    </>
  );
}

export default HomePage;
