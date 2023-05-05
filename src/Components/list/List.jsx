import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import apiCall from "../../api/Api";

function List(props) {
  const { tableHeader, dataSource, fieldsName } = props;
  const [data, setData] = useState(null);
  const fieldToshow = fieldsName === null ? tableHeader : fieldsName;

  useEffect(() => {
    async function getData() {
      const endpoint = dataSource;
      const method = "GET";
      const responseData = await apiCall(endpoint, method);
      setData(responseData.data);
    }
    getData();
  }, [setData, dataSource]);
  return (
    <Table striped>
      <thead>
        <tr>
          {tableHeader &&
            tableHeader.map((header) => {
              return <th>{header}</th>;
            })}
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((line) => {
            return (
              <tr>
                {fieldToshow &&
                  fieldToshow.map((fieldName) => {
                    return <td>{line[fieldName]}</td>;
                  })}
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
}

export default List;
