import React from 'react'
import Slider from '../../components/slider/Slider'
import CardSlider from '../../components/slider/CardSlider'
import './home.scss'

const Home = () => {
  return (
    <main className='home-main'>
      <Slider/>
      <CardSlider cardprop={[{title:'one'}, {title:'two'}, {title:'three'}, {title:'four'}, {title:'five'}, {title:'six'}, {title:'seven'}, {title:'eight'}, {title:'nine'}]}/>
    </main>
  )
}

export default Home