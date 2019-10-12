import heroku from '../apis/heroku';

export const login = (username, password) => async dispatch => {
    if (!username || !password) return;
    const response = await heroku.post('login/', { username, password });
    if (!response.data._id) return;
    localStorage.setItem('userId', response.data._id);
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

export const fetchTask = id => async dispatch => {
    const userId = localStorage.getItem('userId');
    if (!id || !userId) return;
    const response = await heroku.get('task/' + id, { headers: { userId } });
    dispatch({
        type: 'FETCH_TASK',
        payload: response.data
    });
};

export const postAnswer = (taskId, answer) => async dispatch => {
    const userId = localStorage.getItem('userId');
    if (!taskId || !answer || !userId) return;
    const response = await heroku.post('answer/', { body: { userId, taskId, answer } });
    if (!response.data.correctAnswerNumber) return;
    dispatch({
        type: 'POST_ANSWER',
        payload: { answer, taskId, correctAnswerNumber: response.data.correctAnswerNumber }
    });
};
