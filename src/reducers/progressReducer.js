export default (state = 1, action) => {
    console.log(action.payload)
    switch (action.type) {
        case 'EDIT_PROGRESS':
            return action.payload
        default:
            return state
    }
}