import React from "react";

function FilterTabs({ filter, onChange }) {
  const tabs = ["all", "active", "done"];

  return (
    <div className="filter-tabs">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={filter === tab ? "active" : ""}
          onClick={() => onChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default FilterTabs;
