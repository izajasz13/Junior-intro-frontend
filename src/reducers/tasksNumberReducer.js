export default (
    state = 1,
    action
) => {
    switch (action.type) {
        case 'LOGIN':
            return action.payload;
        default:
            return state;
    }
};
