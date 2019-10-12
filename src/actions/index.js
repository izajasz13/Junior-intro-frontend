import heroku from '../apis/heroku';

export const login = (username, password) => async dispatch => {
    if (!username || !password) return;
    let response;
    try {
        response = await heroku.post('login/', { username, password });
    } catch (error) {
        return console.log('login error: ', error);
    }
    if (!response.data._id) return;
    localStorage.setItem('userId', response.data._id);
    dispatch({ type: 'LOGIN', payload: response.data });
};

export const logout = () => dispatch => {
    localStorage.setItem('userId', '');
    dispatch({ type: 'LOGOUT' });
};

export const fetchUser = id => async dispatch => {
    if (!id) return;
    let response;
    try {
        response = await heroku.get('user/' + id);
    } catch (error) {
        return console.log('fetchUser error: ', error);
    }
    dispatch({ type: 'FETCH_USER', payload: response.data });
};

export const fetchSection = id => async dispatch => {
    const userId = localStorage.getItem('userId');
    if (!id || !userId) return;
    let response;
    try {
        response = await heroku.get('section/' + id, { headers: { userId } });
    } catch (error) {
        return console.log('fetchSection error: ', error);
    }
    dispatch({
        type: 'FETCH_SECTION',
        payload: response.data
    });
};

export const fetchTask = id => async dispatch => {
    const userId = localStorage.getItem('userId');
    if (!id || !userId) return;
    let response;
    try {
        response = await heroku.get('task/' + id, { headers: { userId } });
    } catch (error) {
        return console.log('fetchTask error: ', error);
    }
    console.log(response.data);
    dispatch({
        type: 'FETCH_TASK',
        payload: response.data
    });
};

export const postAnswer = (taskId, answer) => async dispatch => {
    const userId = localStorage.getItem('userId');
    if (!taskId || !answer || !userId) return;
    let response;
    try {
        response = await heroku.post('answer/', { body: { userId, taskId, answer } });
    } catch (error) {
        return console.log('postAnswer error: ', error);
    }
    if (!response.data.correctAnswerNumber) return;
    dispatch({
        type: 'POST_ANSWER',
        payload: { answer, taskId, correctAnswerNumber: response.data.correctAnswerNumber }
    });
};
