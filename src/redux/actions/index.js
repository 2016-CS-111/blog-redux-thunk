// ACTION CREATOR
import _ from "lodash";
import JSON from "../../api/JsonPlaceholder";

export const fetchPostsAndAuthor = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    // const userIds = _.uniq(_.map(getState().posts, 'userId'));
    // userIds.forEach(id => dispatch(fetchAuthor(id)));
    // ### OR
    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchAuthor(id)))
        .value()
}

export const fetchPosts = () => async dispatch => {
    const response = await JSON.get('/posts');
    dispatch ({
        type: 'FETCH_POSTS',
        payload: response.data
    });
};


export const fetchAuthor = (id) => async dispatch => {
    const response = await JSON.get(`/users/${id}`);
    dispatch ({
        type: 'FETCH_AUTHOR',
        payload: response.data
    })
};

// ### Memoize Version
// export const fetchAuthor = (id) => dispatch => _fetchAuthor(id, dispatch);
// const _fetchAuthor = _.memoize(async (id, dispatch) => {
//     const response = await JSON.get(`/users/${id}`);
//     dispatch ({
//         type: 'FETCH_AUTHOR',
//         payload: response.data
//     })
// });