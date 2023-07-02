import React from 'react'
import Slider from '../../components/slider/Slider'
import CardSlider from '../../components/slider/CardSlider'
import {setStoreItems} from '../../store/action-creators/index'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useSelector } from 'react-redux'
import { State } from '../../store/reducers'
import './home.scss'

const Home = () => {
  const dummydata = [
    {id: 1,title: 'Renaissance', artist: 'Beyoncé', genre:'Pop', new: false, price: 600, discount: 500, img: 'img/albums/pop_renaissance.jpg', color: '#000000', formats: ['CD', 'Vinyl']},
    {id: 2,title: 'Rush!', artist: 'Måneskin', genre:'Rock',new: false, price: 550, discount: 400, img: 'img/albums/rock_rush.jpg', color: '#74A2BC', formats: ['CD', 'Cassette']},
    {id: 3,title: 'Midnights', artist: 'Taylor Swift', genre:'Pop',new: false, price: 600, discount: 500, img: 'img/albums/pop_midnights.jpg', color: '#C1886C', formats: ['CD', 'Vinyl', 'Cassette']},
    {id: 4,title: 'Gloria', artist: 'Sam Smith', genre:'Pop',new: false, price: 500, discount: 450, img: 'img/albums/pop_gloria.jpg', color: '#524E3D', formats: ['CD', 'Cassette']},
    {id: 5,title: 'Planet Her', artist: 'Doja Cat', genre:'Rap',new: false, price: 500, discount: 450, img: 'img/albums/pop_planet.jpg', color: '#333B6E', formats: ['CD', 'Vinyl']},
    {id: 6,title: 'Ben', artist: 'Macklemore', genre:'Rap',new: false, price: 550, discount: 400, img: 'img/albums/rap_Ben.jpg', color: '#93BDCD', formats: ['CD', 'Vinyl']},
    {id: 7,title: 'Gag Order', artist: 'Kesha', genre:'Pop',new: true, price: 700, discount: null, img: 'img/albums/pop_gagorder.jpg', color: '#000000', formats: ['CD']},
    {id: 8,title: 'Jackman.', artist: 'Jack Harlow', genre:'Rap',new: true, price: 650, discount: null, img: 'img/albums/rap_jackman.jpg', color: '#74A2BC', formats: ['CD', 'Vinyl']},
    {id: 9,title: 'DYKTTTUOB', artist: 'Lana Del Rey', genre:'Pop',new: true, price: 620, discount: null, img: 'img/albums/pop_did_you_know.jpg', color: '#C1886C', formats: ['CD', 'Cassette']},
    {id: 10,title: 'DIWTTIY', artist: 'Caroline Polachek', genre:'Pop',new: true, price: 670, discount: 500, img: 'img/albums/pop_desire.jpg', color: '#524E3D', formats: ['CD', 'Vinyl']},
]

const dispatch = useDispatch();

const setNewItems = bindActionCreators(setStoreItems, dispatch)
setNewItems(dummydata)
const state = useSelector((state: State) => state.items)

const hotDeals = state.filter((album) => album.discount)
const newAlbums =state.filter((album) => album.new)

  return (
    <main className='home-main'>
      <Slider/>
      <CardSlider cardprop={hotDeals} header='Hot Deals'/>
      <CardSlider cardprop={newAlbums} header='New Items'/>

    </main>
  )
}

export default Home