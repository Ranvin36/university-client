import React, { useState } from "react";
import "./PaymentTable.css";

const SearchableDropdown = ({ options, placeholder = "Select an option", onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");

  const filteredOptions = options.filter((opt) =>
    opt.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    setSearch("");
    if (onSelect) onSelect(option);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        {selected || placeholder}
        <span className="arrow">{isOpen ? "▲" : "▼"}</span>
      </div>

      {isOpen && (
        <div className="dropdown-menu">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="dropdown-search"
            placeholder="Search..."
          />
          <ul className="dropdown-list">
            {filteredOptions.length === 0 ? (
              <li className="dropdown-item disabled">No results found</li>
            ) : (
              filteredOptions.map((opt, index) => (
                <li key={index} onClick={() => handleSelect(opt)} className="dropdown-item">
                  {opt}
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchableDropdown;
