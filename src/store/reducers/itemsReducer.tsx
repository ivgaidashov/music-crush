import {ItemsAction} from '../actions/index'
import {CardProp} from '../../interfaces'
import {ItemActionTypes} from '../action-types/index'

const initialState: CardProp[] = [
    {id: 1,title: 'Renaissance', artist: 'Beyoncé', genre:'pop', new: false, price: 600, discount: 500, img: 'img/albums/pop_renaissance.jpg', color: '#000000', formats: ['disk', 'vinyl']},
    {id: 2,title: 'Rush!', artist: 'Måneskin', genre:'rock',new: false, price: 550, discount: 400, img: 'img/albums/rock_rush.jpg', color: '#74A2BC', formats: ['disk', 'cassette']},
]

const reducer = (state: CardProp[] = initialState, action: ItemsAction) => {
    switch (action.type) {
        case ItemActionTypes.SET_ITEMS:
            return action.payload;
        default:
            return state
    }
}

export default reducer