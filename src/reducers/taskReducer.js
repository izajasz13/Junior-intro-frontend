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
        case 'LOGOUT':
            return {
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
            };
        default:
            return state;
    }
};
