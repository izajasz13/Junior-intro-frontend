import heroku from '../apis/heroku';

export const login = (login, password) => async dispatch => {
    if (!login || !password) return;
    const response = await heroku.post('login/', { headers: { login, password } });
    localStorage.setItem('userId', response.data.userId);
    dispatch({ type: 'LOGIN', payload: response.data });
};
