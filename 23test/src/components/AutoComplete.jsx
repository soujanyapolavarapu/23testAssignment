import React, { useState, useEffect } from "react";
import "./AutoComponent.css";
import BackButtonComponent from "./BackComponent";

const AutoComplete = () => {
  /* states to render in browser */
  const [searchTerm, setSearchTerm] = useState("");
  const [state, setState] = useState([]);
  const [filterSearch, setFilterSearch] = useState([]);

  /*Fetching data using async, await */
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("data.json");
        const resData = await response.json();
        setState(resData);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  /* onChange event handler for input */
  const onChange = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
    /*setTimout for giving new search results for every 300ms */
    setTimeout(() => {
      if (!searchTerm) {
        return;
      }
      const results = state.filter((item) => {
        return (
          (item.title &&
            item.title.toLowerCase().search(searchTerm.toLowerCase()) > -1) ||
          (item.type &&
            item.label.toLowerCase().search(searchTerm.toLowerCase()) > -1)
        );
      });
      setFilterSearch(results);
    }, 300);
  };

  return (
    <>
      <BackButtonComponent />
      <h1 className="mainHeading">Search Event </h1>
      <span className="searchBar">
        <i className="fas fa-search icon" />
        <input
          className="inputField"
          type="text"
          onChange={onChange}
          placeholder="Search"
        />
      </span>
      {/* showing null if no charactors in input, to avoid old search results */}
      {searchTerm === "" ? null : (
        <div>
        {/* results showing for type photo */}
          <div>
            <h2 className="heading">Photos</h2>
            {filterSearch
              .filter((filteredItem) => filteredItem.type === "photo")
              .map((searchItems) => {
                return (
                  <div className="resultContainer" key={searchItems.id}>
                    <img
                      className="image"
                      src={searchItems.url}
                      alt="event image"
                    />
                    {searchItems.title}
                  </div>
                );
              })}
          </div>
          {/* results showing for type live */}
          <div>
            <h2 className="heading">Live Events</h2>
            {filterSearch
              .filter((filteredItem) => filteredItem.type === "live")
              .map((searchItems) => {
                return (
                  <div className="resultContainer" key={searchItems.id}>
                    <img
                      className="image"
                      src={searchItems.url}
                      alt="people images"
                    />
                    {searchItems.title}
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
};
export default AutoComplete;
