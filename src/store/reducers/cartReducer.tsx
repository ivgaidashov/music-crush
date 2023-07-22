import {CartItem} from '../../interfaces'
import { CartAction } from '../actions'
import {CartActionTypes} from '../action-types'

const cartReducer = (state: CartItem[] | null = null, action: CartAction) => {
    switch(action.type) {
        case CartActionTypes.SET_NEW_ALBUM:
            let newCart = state;
            newCart ? newCart.push(action.payload) : newCart = [action.payload]
            return newCart
        default:
            return state
    }
}

export default cartReducer