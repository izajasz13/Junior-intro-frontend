export default (state = { tasks: [], currentTask: '' }, action) => {
    switch (action.type) {
        case 'FETCH_SECTION':
            return action.payload;
        default:
            return state;
    }
};
