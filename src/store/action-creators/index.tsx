import { ItemActionTypes } from "../action-types";
import { CardProp } from "../../interfaces";
import { ItemsAction } from "../actions";
import {Dispatch} from 'redux'

export const setStoreItems = (items: CardProp[]) => {
    return (dispatch: Dispatch<ItemsAction>) => {
        dispatch({
            type: ItemActionTypes.SET_ITEMS,
            payload: items
        })
    }
}