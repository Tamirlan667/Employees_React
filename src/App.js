import "./App.css";
import AppInfo from "./components/app-info/app-info";
import SearchPanel from "./components/search-panel/search-panel";
import AppFilter from "./components/app-filter/app-filter";
import EmployersList from "./components/employers-list/employers-list";
import EmployersAddForm from "./components/employers-add-form/employers-add-form";
import React from "react";
function App() {
  const [database, setDatabase] = React.useState([
    { name: "John C.", salary: 800, increase: false, id: 1 },
    { name: "Carl W.", salary: 3000, increase: false, id: 2 },
    { name: "Tamirlan", salary: 10000, increase: true, id: 3 },
  ]);
  var maxid = 4;
  const deleteItem = (id) => {
    // const index = database.findIndex((elem) => elem.id === id);
    // const before = database.slice(0, index);
    // const after = database.slice(index + 1);
    // const newArray = [...before, ...after];
    // setDatabase(newArray);
    setDatabase(database.filter((item) => item.id !== id));
  };
  const addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      id: maxid + 1,
    };
    const newArr = [...database, newItem];
    setDatabase(newArr);
  };
  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployersList data={database} deleteItem={deleteItem} />
      <EmployersAddForm addItem={addItem} />
    </div>
  );
}

export default App;
