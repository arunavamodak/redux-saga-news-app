import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    articleContainer: {
        border: '1px solid #ccc',
        margin: '15px 0px',
        height: 'auto'
    },
    imageContainer: {
        height: "186px"
    },
    articleImage: {
        height: '100%',
        width: '100%'
    },
    infoContainer: {
        padding: theme.spacing(2, 4),
        textAlign: 'left'
    },
    title: {
        margin: '8px 0px',
        fontSize: '18px',
        fontWeight: '600',
        fontFamily: "'Lato', sans-serif"
    },
    author: {
        marginBottom: "15px",
        fontSize: '15px',
        fontFamily: "'Lato', sans-serif"
    },
    content: {
        fontSize: "17px",
        marginBottom: "20px"
    },
    time: {
        margin: "0",
        fontSize: '16px',
        fontFamily: "'Lato', sans-serif",
        color: theme.palette.text.secondary,
    }
}));

const NewsArticle = ({ article }) => {

    const classes = useStyles();

    const getTimeString = (string) => {
        return new Date(string).toLocaleString();
    }


    return (
        <Grid className={classes.articleContainer} container>

            <Grid item xs={12} sm={4}>
                <div className={classes.imageContainer}>
                    <img src={article["urlToImage"]} className={classes.articleImage} />
                </div>
            </Grid>

            <Grid item xs={12} sm={8}>
                <div class={classes.infoContainer}>
                    <Typography
                        noWrap
                        gutterBottom
                        className={classes.title}
                    >
                        <a href={article.url}>{article.title}</a>
                    </Typography>
                    <p className={classes.author}>By {article.author} from "{article.source.name}"</p>
                    <Typography
                        noWrap
                        gutterBottom
                        className={classes.content}
                    >
                        {article.description}
                    </Typography>
                    <p className={classes.time}>{getTimeString(article.publishedAt)}</p>
                </div>
            </Grid>

        </Grid>
    )
}

export default NewsArticle;