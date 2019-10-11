import heroku from '../apis/heroku';

export const login = (login, password) => async dispatch => {
    if (!login || !password) return;
    const response = await heroku.post('login/', { body: { login, password } });
    if (!response.data.userId) return;
    localStorage.setItem('userId', response.data.userId);
    dispatch({ type: 'LOGIN', payload: response.data });
};

export const fetchUser = id => async dispatch => {
    if (!id) return;
    const response = await heroku.get('user/' + id);
    dispatch({ type: 'FETCH_USER', payload: response.data });
};

export const fetchSection = id => async dispatch => {
    const userId = localStorage.getItem('userId');
    if (!id || !userId) return;
    const response = await heroku.get('section/' + id, { headers: { userId } });
    dispatch({
        type: 'FETCH_SECTION',
        payload: { taskList: response.data.taskList, userState: response.data.userState }
    });
};
