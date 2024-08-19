import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

function Jammming() {
  return <h1 className="h1">Jammming</h1>;
}

function SearchBar() {
  return (
    <div className="search__div">
      <input
        type="text"
        className="search__bar"
        placeholder="Search for a song"
      ></input>
    </div>
  );
}

function SearchButton() {
  return (
    <div className="search__btn__div">
      <button className="search__btn"></button>
    </div>
  );
}

function SearchResults() {
  return (
    <div className="search__result__div">
      <h2>Search Results</h2>
    </div>
  );
}

function TrackList() {
  return (
    <div className="tracklist">
      <h2>Tracklist</h2>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Jammming />
    <SearchBar />
    <SearchButton />
    <SearchResults />
    <TrackList />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
