import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        width: '60ch',
        height: '52px'
    },
    button: {
        width: '17ch',
        height: '54px'
    }
}));

function SearchBar({ search, setSearch, handleSearch }) {

    const classes = useStyles();

    const handleTextChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField className={classes.input} label="Search" type="text" variant="outlined" value={search} onChange={(e) => {
                handleTextChange(e);
            }} />
            <Button className={classes.button} variant="contained" color="primary" onClick={handleSearch}>
                Search
            </Button>
        </form>
    );
}

export default SearchBar;
