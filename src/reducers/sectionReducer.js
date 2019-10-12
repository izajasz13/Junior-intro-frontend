export default (state = { taskList: [], userState: '' }, action) => {
    switch (action.type) {
        case 'FETCH_SECTION':
            return action.payload;
        default:
            return state;
    }
};
