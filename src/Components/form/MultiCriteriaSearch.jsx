import MySelect from "./Select";
function MultiCriteriaSearch(props) {
  const {
    likeArray,
    equalArray,
    betWeenArray,
    selectArray,
    selectDataSourceArray,
  } = props;

  const handleSearch = () => {
    const likeQuery = buildLikeQuery();
    const equalQuery = buildEqualQuery();
    const betWeenQuery = buildBetWeenQuery();
    const selectQuery = buildSelectQuery();
    const query = likeQuery + equalQuery + betWeenQuery + selectQuery;
    console.log(query);
  };
  return (
    <div>
      {likeArray?.map((item, index) => {
        return (
          <div key={index}>
            <label htmlFor={item}>{item}</label>
            <input type="text" id={"like_" + item} name={item} />
          </div>
        );
      })}

      {equalArray?.map((item, index) => {
        return (
          <div key={index}>
            <label htmlFor={item}>{item}</label>
            <input id={"equal_" + item} type="text" name={item} />
          </div>
        );
      })}

      {betWeenArray?.map((item, index) => {
        return (
          <div key={index}>
            <label htmlFor={item}>{item}</label>
            <input id={"min_" + item} type="text" />
            <input id={"max_" + item} type="text" />
          </div>
        );
      })}

      {selectArray?.map((item, index) => {
        return (
          <div key={index}>
            <label htmlFor={item}>{item}</label>
            <MySelect
              dataSource={selectDataSourceArray[index]}
              name={item}
              id={item}
              displayField={item}
            />
          </div>
        );
      })}
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
export default MultiCriteriaSearch;

// ----------------- functions -----------------
const buildLikeQuery = () => {
  let query = "";
  likeArray?.forEach((item) => {
    const value = document.getElementById("like_" + item).value;
    if (value) {
      query += `&${item}=${value}`;
    }
  });
  return query;
};
const buildEqualQuery = () => {
  let query = "";
  equalArray?.forEach((item) => {
    const value = document.getElementById("equal_" + item).value;
    if (value) {
      query += `&${item}=${value}`;
    }
  });
  return query;
};
const buildBetWeenQuery = () => {
  let query = "";
  betWeenArray?.forEach((item) => {
    const min = document.getElementById("min_" + item).value;
    const max = document.getElementById("max_" + item).value;
    if (min && max) {
      query += `&${item}=${min},${max}`;
    }
  });
  return query;
};
const buildSelectQuery = () => {
  let query = "";
  selectArray?.forEach((item, index) => {
    const value = document.getElementById("equal_" + item).value;
    if (value) {
      query += `&${item}=${value}`;
    }
  });
  return query;
};
