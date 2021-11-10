import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    searchBarContainer: {
        maxWidth: '650px',
        margin: "auto",
        padding: "10px 15px"
    },
    input: {
        width: '100%',
        height: '52px'
    },
    button: {
        width: '100%',
        height: '54px'
    }
}));

function SearchBar({ handleSearch }) {

    const [search, setSearch] = useState("");

    const classes = useStyles();

    return (
        <div className={classes.searchBarContainer}>
            <Grid container spacing={2}>
                <Grid item xs={8} sm={9}>
                    <TextField className={classes.input} label="Search" type="text" variant="outlined" value={search} onChange={(e) => {
                        setSearch(e.target.value);
                    }} />
                </Grid>
                <Grid item xs={4} sm={3}>
                    <Button className={classes.button} variant="contained" color="primary" onClick={() => {
                        handleSearch(search);
                    }}>
                        Search
                    </Button>
                </Grid>
            </Grid>
        </div>

    );
}

export default SearchBar;
