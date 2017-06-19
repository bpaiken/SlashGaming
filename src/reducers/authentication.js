const authentication = (state = [], action) => {
    switch (action.type) {
    case 'LOGIN':
        console.log("authentication reducer running");
        console.log(action);
        return [
        ...state,
        {
            authenticated: true
        }
        ]
    default:
        return state
    }
}

export default authentication