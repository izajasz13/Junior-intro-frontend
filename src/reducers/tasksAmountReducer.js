export default (state = 1, action) => {
    switch (action.type) {
        case 'LOGIN':
        case 'FETCH_USER':
            return action.payload.tasksAmount
        default:
            return state;
    }
};
