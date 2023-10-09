import "./App.css";
import AppInfo from "./components/app-info/app-info";
import SearchPanel from "./components/search-panel/search-panel";
import AppFilter from "./components/app-filter/app-filter";
import EmployersList from "./components/employers-list/employers-list";
import EmployersAddForm from "./components/employers-add-form/employers-add-form";
function App() {
  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployersList />
      <EmployersAddForm />
    </div>
  );
}

export default App;
