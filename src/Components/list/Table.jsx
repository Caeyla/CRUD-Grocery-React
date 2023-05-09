import Table from "react-bootstrap/Table";

function MyTable(props) {
  const { tableHeader, fieldsName,data} = props;
  const fieldToshow = fieldsName === null ? tableHeader : fieldsName;
  return (
    <Table striped>
      <thead>
        <tr>
          {fieldToshow &&
            fieldToshow.map((header) => {
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

export default MyTable;
