import React from "react";
import "./SearchResult.css";
function SearchResult(props) {
  const data = props.result.map((data, i) => {
    return (
      <div className="result" key={data.name}>
        <img className="resultImg" src={data.image} alt={data.name}></img>
        <div className="resultName"> {data.name}</div>
      </div>
    );
  });

  return (
    <div
      className="searchResult"
      style={{
        display: props.result.length !== 0  ? "block" : "none",
      }}
    >
      {data}
    </div>
  );
}

export default SearchResult;
