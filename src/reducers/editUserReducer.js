export default (state = {}, action) => {
    return { 
        type: 'EDIT_USER',
        payload: { 
            coins: state.coins + 5,
            experience: state.experience + 3,
            currentTaskNumber: 2,
            ...state,
        }
    }
}