
const intialState = {
    name : 'AlwinDev'
}

const globalReducer = (state = intialState, action) => {
    
    if(action.type === 'UPDATE_NAME'){
        return {
            ...state,
            name: "Alwinto"
        }
    }
    return state;
}

export default globalReducer;