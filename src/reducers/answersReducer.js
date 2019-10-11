export default (state = [], action) => {
    switch (action.type) {
        case 'POST_ANSWER':
            return [...state, action.payload];
        default:
            return state;
    }
};
