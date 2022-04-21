import React, { useState } from "react";
import "./SearchBar.scss";
import SearchIcon from "@material-ui/icons/Search";
import Dropdown from "../dropdown/dropdown";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <div id="ww" className="d-flex">
        <div className="searchIcon px-4">
          {" "}
          <SearchIcon />
        </div>
        <input type="text" placeholder="Search products" onChange={handleFilter} />
        <div id="dropdown"><Dropdown /></div>
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href={value.link} target="_blank">
                <p>{value.title}</p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
