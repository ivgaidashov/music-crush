import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import {ShoppingBasket} from '@styled-icons/remix-line/ShoppingBasket'
import './cart.scss'
import { CartItem } from '../../interfaces'
import { useSelector } from 'react-redux'
import { State } from '../../store/reducers'

const Cart = () => {
  const [showCart, setShowCart] = useState(false);


  /*const items:CartItem[] = [
    {count: 1, format: 'CD', id: 11, title: 'Chromatica', artist: 'Lady Gaga', genre:'Pop',new: false, price: 700, discount: null, img: ['img/albums/pop_chromatica.png', 'img/albums/pop_chromatica_cassette.png', 'img/albums/pop_chromatica_vinyl.jpg', ], color: '#C50035', formats: ['CD', 'Cassette', 'Vinyl'],
    label: 'Interscope', tracklist: ["Chromatica I", 	"Alice", "Stupid Love", 	"Rain on Me", "Free Woman", "Fun Tonight", "Chromatica II", 	"911", "Plastic Doll", 	"Sour Candy", 	"Enigma", "Replay", "Chromatica III"	, "Sine from Above", "1000 Doves","Babylon"], metacritic: 79},
    {count: 2, format: 'Cassette', id: 12, title: 'Crash ', artist: 'Charli XCX', genre:'Pop', new: true, price: 500, discount: 350, img: ['img/albums/pop_crash.jpg', 'img/albums/pop_crash_cassette.jpg' ], color: '#C50035', formats: ['CD', 'Cassette'],
    label: 'Atlantic', tracklist: ["Crash", 	"New Shapes", 	"Good Ones", 	"Constant Repeat", "Beg for You", 	"Move Me", "Baby", 	"Lightning", "Every Rule", 	"Yuck", 	"Used to Know Me" ,"Twice"], metacritic: 79},
    
  ]*/

  const items = useSelector((state:State) => state.cart)
  console.log(items)
  return (
    <div tabIndex={0} className='cart-wrapper' onClick={() =>!showCart && setShowCart(true)} onBlur={()=>{setTimeout(() => {showCart && setShowCart(false)}, 100)}} >
        <ShoppingBasket />
        <span>0</span>
        {showCart && items && <div  className='cart-main' >
            {
                items.map((item)=>{
                    return <div className='item-wrapper'>
                        <div className='thumbnail'>
                        <Link to={`/item/${item.id}`}><img src={'/' + item.img[0]}  /></Link>
                        </div>
                        <div className='format'>
                            {item.format}
                        </div>
                        <div className='count-price'>
                            {item.count} X {item.discount ? item.discount : item.price} ₽
                        </div>
                    </div>
                })
            }
            <div className='total'>
            Total: {items.reduce(function (acc, obj) { return acc + (obj.discount ? obj.discount * obj.count : obj.price * obj.count); }, 0)} ₽
            </div>

            <div className='check-out'>
                Check Out
            </div>
        </div>}
    </div>
  )
}

export default Cart