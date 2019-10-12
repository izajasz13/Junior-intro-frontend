export default (
    state = { _id: '', username: '', name: '', email: '', currentTask: null, coins: 0, experience: 0 },
    action
) => {
    switch (action.type) {
        case 'LOGIN':
            return action.payload;
        case 'FETCH_USER':
            return action.payload;
        default:
            return state;
    }
};
