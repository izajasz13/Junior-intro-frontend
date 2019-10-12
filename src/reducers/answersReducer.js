export default (state = [], action) => {
    switch (action.type) {
        case 'POST_ANSWER':
            return [...state, action.payload];
        case 'LOGOUT':
            return [];
        default:
            return state;
    }
};
