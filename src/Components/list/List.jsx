import { useEffect, useState } from "react";
import apiCall from "../../api/Api";
import MyTable from "./Table";

function List(props) {
  const { tableHeader, dataSource, fieldsName } = props;
  const [data, setData] = useState(null);
  const [current_page, setCurrent_page] = useState(1);
  const [filters, setFilters] = useState(null);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [hasPrevPage, setHasPrevPage] = useState(false);

  useEffect(() => {
    async function getData() {
      const endpoint = dataSource + `?_page=${current_page}&_limit=5`;
      const method = "GET";
      const responseData = await apiCall(endpoint, method);
      responseData !== null
        ? setData(responseData)
        : alert("error : responseData === null in List.jsx");
    }
    getData();
  }, [setData, dataSource, current_page]);

  const handlePagination = (incrementation) => {
    setCurrent_page(current_page + incrementation);
  };

  return (
    <div>
      <MyTable data={data} tableHeader={tableHeader} fieldsName={fieldsName} />
      <ul>
        <li>{current_page}</li>
        <li>
          <button
            onClick={() => {
              handlePagination(1);
            }}
          >
            next page
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              handlePagination(-1);
            }}
          >
            prev page
          </button>
        </li>
      </ul>
    </div>
  );
}

export default List;
