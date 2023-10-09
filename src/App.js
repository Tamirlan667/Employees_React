import "./App.css";
import AppInfo from "./components/app-info/app-info";
import SearchPanel from "./components/search-panel/search-panel";
import AppFilter from "./components/app-filter/app-filter";
import EmployersList from "./components/employers-list/employers-list";
import EmployersAddForm from "./components/employers-add-form/employers-add-form";
function App() {
  const data = [
    { name: "John C.", salary: 800, increase: false, id: 1 },
    { name: "Carl W.", salary: 3000, increase: false, id: 2 },
    { name: "Tamirlan", salary: 10000, increase: true, id: 3 },
  ];
  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployersList data={data} />
      <EmployersAddForm />
    </div>
  );
}

export default App;
