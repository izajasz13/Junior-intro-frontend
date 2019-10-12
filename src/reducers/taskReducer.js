export default (
    state = {
        description: '',
        prize: {
            exp: 0,
            coins: 0
        },
        questions: [],
        answers: {
            number: 0,
            content: []
        }
    },
    action
) => {
    switch (action.type) {
        case 'FETCH_TASK':
            return action.payload;
        default:
            return state;
    }
};
