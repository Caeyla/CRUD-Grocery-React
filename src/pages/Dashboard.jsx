import MultiCriteriaSearch from "../Components/form/MultiCriteriaSearch";
import MySelect from "../Components/form/Select";
import List from "../Components/list/List";

function Dashboard() {
  return (
    <div>
      <MultiCriteriaSearch 
        likeArray={["nom", "prenom"]}
        equalArray={["age"]}
        betWeenArray={["age"]}   
        selectArray={["sexe"]}       
      />
      {/* <List
        dataSource="/persons"
        fieldsName={["nom", "prenom", "age", "sexe"]}
      />
      <MySelect
        dataSource="/persons"
        name="personne"
        displayField="nom"
        valueField="id"
        queriesField={["sexe"]}
        queriesValue={["male"]}
      /> */}
    </div>
  );
}
export default Dashboard;
