export default (state = { tasks: [], currentTask: '' }, action) => {
    switch (action.type) {
        case 'FETCH_SECTION':
            return action.payload;
        case 'LOGOUT':
            return { tasks: [], currentTask: '' };
        default:
            return state;
    }
};
