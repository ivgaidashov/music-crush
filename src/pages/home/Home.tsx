import React from 'react'
import Slider from '../../components/slider/Slider'
import CardSlider from '../../components/slider/CardSlider'
import './home.scss'

const hotDeals = [
  {title: 'Renaissance', artist: 'Beyoncé', price: 600, discount: 500, img: 'img/albums/pop_renaissance.jpg', color: '#000000'},
  {title: 'Rush!', artist: 'Måneskin', price: 550, discount: 400, img: 'img/albums/rock_rush.jpg', color: '#74A2BC'},
  {title: 'Midnights', artist: 'Taylor Swift', price: 600, discount: 500, img: 'img/albums/pop_midnights.jpg', color: '#C1886C'},
  {title: 'Gloria', artist: 'Sam Smith', price: 500, discount: 450, img: 'img/albums/pop_gloria.jpg', color: '#524E3D'},
  {title: 'Planet Her', artist: 'Doja Cat', price: 500, discount: 450, img: 'img/albums/pop_planet.jpg', color: '#333B6E'},
  {title: 'Ben', artist: 'Macklemore', price: 550, discount: null, img: 'img/albums/rap_Ben.jpg', color: '#93BDCD'},
]

const newAlbums = [
  {title: 'Gag Order', artist: 'Kesha', price: 700, discount: null, img: 'img/albums/pop_gagorder.jpg', color: '#000000'},
  {title: 'Jackman.', artist: 'Jack Harlo  ', price: 650, discount: null, img: 'img/albums/rap_jackman.jpg', color: '#74A2BC'},
  {title: 'DYKTTTUOB', artist: 'Lana Del Rey', price: 620, discount: null, img: 'img/albums/pop_did_you_know.jpg', color: '#C1886C'},
  {title: 'DIWTTIY', artist: 'Caroline Polachek', price: 670, discount: null, img: 'img/albums/pop_desire.jpg', color: '#524E3D'},
 
]


const Home = () => {
  return (
    <main className='home-main'>
      <Slider/>
      <CardSlider cardprop={hotDeals} header='Hot Deals'/>
      <CardSlider cardprop={newAlbums} header='New Items'/>

    </main>
  )
}

export default Home