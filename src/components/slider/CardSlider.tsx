import React, {useRef, useState} from 'react'
import {ChevronLeft} from '@styled-icons/bootstrap/ChevronLeft'
import {ChevronRight} from '@styled-icons/bootstrap/ChevronRight'

import './cardslider.scss'

interface cardProp {
    title: string
}

interface cardProps {
    cardprop: cardProp[],
}



const CardSlider = ({cardprop} : cardProps) => {
    const [currentScroll, setCurrentScroll] = useState(0)
    const sliderRef = useRef<HTMLDivElement>(null)
    const handleLeftClick = () => {
        sliderRef!.current!.scrollTo(0, 0);

    }

    const handleRightClick = () => {
        const currentwidth = sliderRef!.current?.clientWidth
            if (currentwidth! - currentScroll < 320) {
                sliderRef!.current!.scrollTo(12000, 0);
                setCurrentScroll(currentwidth!)
            }
            else {
                sliderRef!.current!.scrollTo(currentScroll+320, 0);
                setCurrentScroll(currentScroll+320)
            }
        
    }
  return (


    <div className='card-slider'>
        <ChevronLeft   className='arrow-type left-arrow' onClick={handleLeftClick}/>
        <div ref={sliderRef} className='cards'>
        {cardprop.map((card) => (
             <div key={card.title} className='card'>
                {card.title}
            </div>
        ))}

        </div>
        <ChevronRight className='arrow-type right-arrow' onClick={handleRightClick}/>

    </div>
  )
}

export default CardSlider