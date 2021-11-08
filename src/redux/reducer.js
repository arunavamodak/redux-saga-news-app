import * as types from "./actionTypes";

const initialState = {
    news: {},
    error: null,
    loading: false
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_NEWS_START:
            return {
                ...state,
                loading: true
            }

        case types.FETCH_NEWS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                news: action.payload
            }
        case types.FETCH_NEWS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
};

export default newsReducer;