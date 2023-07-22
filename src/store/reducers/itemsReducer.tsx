import {ItemsAction} from '../actions/index'
import {CardProp} from '../../interfaces'
import {ItemActionTypes} from '../action-types/index'

const initialState: CardProp[] = [
    {id: 22, title: 'Mainstream Sellout', artist: 'Machine Gun Kelly', genre:'Rock', new: false, price: 550, discount: null, img: ['img/albums/rock_mainstream.jpg', 'img/albums/rock_mainstream_vinyl.jpg' ], color: '#C478BC', formats: ['CD', 'Vinyl'],
    label: 'Interscope', tracklist: ["Born with Horns", "God Save Me", "Maybe", "Drug Dealer", "Wall of Fame", "Mainstream Sellout", "Make Up Sex", 	"Emo Girl", "5150", "Papercuts", "WW4", "Ay!", "Fake Love Don't Last", "Die in California", "Sid & Nancy", "Twin Flame"], metacritic: 55},
    {id: 23, title: 'Songs of Surrender', artist: 'U2', genre:'Rock', new: false, price: 710, discount: 610, img: ['img/albums/rock_u2.jpg', 'img/albums/rock_u2_vinyl.jpg' ], color: '#C50035', formats: ['CD', 'Vinyl'],
    label: 'Interscope', tracklist: ["One", "Where the Streets Have No Name", "Stories for Boys", "Walk On (Ukraine)", "Pride (In the Name of Love)", "City of Blinding Lights", "Ordinary Love", 	"Invisible", "Vertigo", "I Still Haven't Found What I'm Looking For", "The Fly", "If God Will Send His Angels", "Stay (Faraway, So Close!)", "Sunday Bloody Sunday", "I Will Follow", "40"], metacritic: 66},    
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