import React from "react";

function Header({ onAddClick }) {
  return (
    <>
      <div className="header">
        <h1>TaskFlow</h1>
        <button onClick={onAddClick}>+ Add Task</button>
      </div>
    </>
  );
}

export default Header;
