import React from "react";

const Search = ({ search, setInput }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="search">
      <input className="input" type="text" onChange={inputHandler} placeholder="請輸入要搜尋的關鍵字" />
      <button onClick={search}>Search</button>
    </div>
  );
};

export default Search;
