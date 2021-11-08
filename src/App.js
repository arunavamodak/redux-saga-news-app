import './App.css';
import SearchBar from "./components/SearchBar";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as types from "./redux/actionTypes";

function App() {

  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const handleSearch = () => {
    dispatch({ type: types.FETCH_NEWS_START, payload: search });

    setSearch("");
  }

  return (
    <div className="App">
      <h1>News App</h1>
      <SearchBar search={search} setSearch={setSearch} handleSearch={handleSearch} />
    </div>
  );
}

export default App;