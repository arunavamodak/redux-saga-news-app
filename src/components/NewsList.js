import React, { } from "react";
import { makeStyles } from '@material-ui/core/styles';
import NewsArticle from "./NewsArticle";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    newsListContainer: {
        padding: '15px 50px',
        maxWidth: '1050px',
        margin: 'auto'
    },
    searched: {
        textAlign: 'left',
        fontFamily: "'Lato', sans-serif",
        fontSize: "18px"
    }
}));

const NewsList = ({ query, data }) => {

    const classes = useStyles();

    const generateKey = () => {
        return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    }

    const articles = data.news.articles ? data.news.articles.map(item =>
        <Grid item xs={12} key={generateKey()}>
            <NewsArticle key={item.url} article={item} />
        </Grid>
    ) : [];

    return (
        <div className={classes.newsListContainer}>
            <div>
                {
                    query.length && data.news.totalResults ?
                        (
                            <p className={classes.searched}>Showing <b>{data.news.totalResults}</b> results for "<b>{query}</b>"</p>
                        ) : null
                }
            </div>


            <Grid container>
                {articles}
            </Grid>
        </div>
    )
};

export default NewsList;