export default (
    state = {
        title: 'Instalacja VS Code',
        description: 'Zainstaluj Visual Studio Code na swoim komputerze.',
        prize: {
            exp: 3,
            coins:5,
        },
        questions: [{
            question: 'Czy zaintalowałeś VS Code?',
            answers: [
                {
                    number: 1,
                    content: 'Tak',
                },
                { 
                    number: 2,
                    content: 'Nie'
                }
            ]
        }],
        answers: [
            1
        ]
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
