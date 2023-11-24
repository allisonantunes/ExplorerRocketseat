import { createStore, combineReducers } from 'redux'
import { cartReducer } from './reducers/card'

const rootReducer = combineReducers({
    cartProducts: cartReducer
})

export const store = createStore(rootReducer)