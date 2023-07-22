import {CardProp, CartItem} from '../../interfaces'
import {CartActionTypes} from '../action-types'

export type ItemsAction = {
    type: string;
    payload: CardProp[]
}

interface AddAlbum  {
    type: CartActionTypes.SET_NEW_ALBUM;
    payload: CartItem;
}

interface RemoveAlbum  {
    type: CartActionTypes.REMOVE_ALBUM;
    payload: number;
}

export type CartAction = AddAlbum | RemoveAlbum;