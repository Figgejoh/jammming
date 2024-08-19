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
      <button className="search__btn">Search</button>
    </div>
  );
}

function MusicDiv() {
  return (
    <div className="music__container">
      <div className="results">
        <h2>Results</h2>
      </div>
      <div className="music__box">
        <h2>Now Playing</h2>
      </div>
      <div className="tracklist">
        <h2>Tracks</h2>
      </div>
    </div>
  );
}

function PlayBar() {
  return (
    <div className="playbar__div">
      <div className="playbar">
        <button className="prev playBtn">-</button>
        <button className="play playBtn">play</button>
        <button className="next playBtn">+</button>
        <button className="save__to__spotify playBtn">Save</button>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Jammming />
    <SearchBar />
    <SearchButton />
    <MusicDiv />
    <PlayBar />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
