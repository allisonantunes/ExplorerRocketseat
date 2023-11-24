export function cartReducer(state = [], action) { // iniciando com array vazio
    if(action.type === 'ADD_PRODUCT_TO_CARD') {
        return [ ...state, action.payload ]
    }
    return state
}