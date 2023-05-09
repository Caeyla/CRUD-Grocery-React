import { useEffect, useState } from "react";
import apiCall from "../../api/Api";
function MySelect(props) {
  const {
    dataSource,
    name,
    id,
    displayField,
    valueField,
    urlParametersField,
    urlParameteresValue,
  } = props;
  const [data, setData] = useState(null);
  useEffect(() => {
    async function getData() {
      // check if urlParametersField and urlParameteresValue are not null then build query
      // else just call the endpoint
      const endpoint = (urlParametersField && urlParameteresValue) ? dataSource + buildQuery(urlParametersField, urlParameteresValue) : dataSource;
      const method = "GET";
      const responseData = await apiCall(endpoint, method);
      setData(responseData);
    }
    getData();
  }, [setData, dataSource, urlParametersField, urlParameteresValue]);

  const buildQuery = (urlParametersField, urlParameteresValue) => {
    urlParametersField?.length !== urlParameteresValue?.length &&
      alert(
        "error : urlParametersField.length !== urlParameteresValue.length in Select.jsx "
      );
    let query = "?1=1";
    for (let i = 0; i < urlParametersField?.length; i++) {
      query += `&${urlParametersField[i]}=${urlParameteresValue[i]}`;
    }
    return query;
  };

  return (
    <select name={name} id={id}>
      <option value={null}>--Please choose an option--</option>
      {data &&
        data.map((item, index) => {
          return (
            <option key={index}  value={valueField ? item[valueField] : item.id}>
              {item[displayField]}
            </option>
          );
        })}
    </select>
  );
}

export default MySelect;
