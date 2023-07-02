import React, {useRef, useState} from 'react'
import Card from './Card'
import {CardProp} from '../../interfaces'
import {ChevronLeft} from '@styled-icons/bootstrap/ChevronLeft'
import {ChevronRight} from '@styled-icons/bootstrap/ChevronRight'
import './cardslider.scss'

interface cardProps {
    cardprop: CardProp[],
    header: string,
}

const CardSlider = ({cardprop, header} : cardProps) => {
    const [currentScroll, setCurrentScroll] = useState(0)
    const sliderRef = useRef<HTMLDivElement>(null)
    const handleLeftClick = () => {
        console.log('left')
        sliderRef!.current!.scrollTo(currentScroll-320, 0);
        setCurrentScroll(currentScroll-320)
    }

    const handleRightClick = () => {
        console.log('right')
        sliderRef!.current!.scrollTo(currentScroll+320, 0);
        setCurrentScroll(currentScroll+320)
    }

    const length = cardprop.length;



  return (

    <div className='card-wrapper'>
    <div className='card-header'><span>{header}</span></div>
    <div className='card-slider'>
        {length > 4 && <ChevronLeft   className='arrow-type left-arrow' onClick={handleLeftClick}/>}
        <div ref={sliderRef} className='cards'>
        {cardprop.map((card) => (
            <Card carddiv={card}/>
        ))}

        </div>
        {length > 4 && <ChevronRight className='arrow-type right-arrow' onClick={handleRightClick}/>}

    </div>
    </div>
  )
}

export default CardSlider