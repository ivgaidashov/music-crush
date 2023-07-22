import { ItemActionTypes, CartActionTypes } from "../action-types";
import { CardProp, CartItem } from "../../interfaces";
import { ItemsAction, CartAction } from "../actions";
import {Dispatch} from 'redux'

export const setStoreItems = (items: CardProp[]) => {
    return (dispatch: Dispatch<ItemsAction>) => {
        dispatch({
            type: ItemActionTypes.SET_ITEMS,
            payload: items
        })
    }
}

export const addNewAlbumToCart = (newAlbum: CartItem) => {
    return (dispatch: Dispatch<CartAction>) => {
        dispatch({
            type: CartActionTypes.SET_NEW_ALBUM,
            payload: newAlbum
        })
    }
}