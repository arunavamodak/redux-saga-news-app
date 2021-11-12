import SearchBar from "./components/SearchBar";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as types from "./redux/actionTypes";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import NewsList from "./components/NewsList";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function App() {

  const dispatch = useDispatch();

  const [query, setQuery] = useState("");
  const [alert, setAlert] = useState(false);

  const closeAlert = () => {
    setAlert(false);
  }

  const state = useSelector(state => state.data);

  const handleSearch = (search) => {
    if (search.length) {
      setQuery(search);
      dispatch({ type: types.FETCH_NEWS_START, payload: search });
    }
    else {
      setAlert(true);
    }

  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Redux Saga News App</h1>

      <SearchBar handleSearch={handleSearch} />

      <NewsList query={query} data={state} />

      <>
        <Backdrop open={state.loading} style={{ zIndex: "9999" }}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </>

      <>
        <Snackbar
          open={alert}
          autoHideDuration={3000}
          onClose={closeAlert}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <MuiAlert elevation={6} variant="filled" onClose={closeAlert} severity="warning">
            Search Can not be empty
          </MuiAlert>
        </Snackbar>
      </>
    </div>
  );
}

export default App;