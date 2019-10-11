import heroku from '../apis/heroku';

export const login = (login, password) => async dispatch => {
    if (!login || !password) return;
    const response = await heroku.post('login/', { headers: { login, password } });
    localStorage.setItem('userId', response.data.userId);
    dispatch({ type: 'LOGIN', payload: response.data });
};

export const fetchTasks = id => async dispatch => {
    const userId = localStorage.getItem('userId');
    if (!id || !userId) return;
    const response = await heroku.get('section/' + id, { headers: { userId } });
    dispatch({
        type: 'FETCH_TASKS',
        payload: { taskList: response.data.taskList, userState: response.data.userState }
    });
};
