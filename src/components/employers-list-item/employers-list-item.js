import "./employers-list-item.css";
import React from "react";
const EmployersListItem = ({ name, salary, deleteItem }) => {
  const [increase, setIncrease] = React.useState(false);
  let classNames = "list-group-item d-flex justify-content-between";
  if (increase) {
    classNames += " increase like";
  }
  const onIncrease = () => {
    setIncrease(!increase);
  };
  return (
    <li className={classNames}>
      <span className="list-group-item-label">{name}</span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={salary + "$"}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm "
          onClick={() => onIncrease()}
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button
          type="button"
          className="btn-trash btn-sm "
          onClick={deleteItem}
        >
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};
export default EmployersListItem;
