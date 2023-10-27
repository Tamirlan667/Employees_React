import "./employers-add-form.sass";
import React from "react";
const EmployersAddForm = ({ addItem }) => {
  const [name, setName] = React.useState("");
  const [salary, setSalary] = React.useState(0);
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeSalary = (e) => {
    setSalary(e.target.value);
  };
  const onAdd = (e) => {
    e.preventDefault();
    addItem(name, salary);
  };
  // React.useEffect(() => {
  //   addItem(name, salary);
  // }, [name, salary]);
  return (
    <div className="app-add-form">
      <h3>Добавьте нового сотрудника</h3>
      <form className="add-form d-flex" onSubmit={onAdd}>
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Как его зовут?"
          value={name}
          onChange={onChangeName}
        />
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="З/П в $?"
          value={salary}
          onChange={onChangeSalary}
        />

        <button type="submit" className="btn btn-outline-light">
          Добавить
        </button>
      </form>
    </div>
  );
};
export default EmployersAddForm;
