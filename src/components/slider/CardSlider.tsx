import React, {useRef, useState} from 'react'
import {ChevronLeft} from '@styled-icons/bootstrap/ChevronLeft'
import {ChevronRight} from '@styled-icons/bootstrap/ChevronRight'
import './cardslider.scss'

interface cardProp {
    title: string;
    artist: string;
    price: number;
    discount: number | null;
    img: string;
    color: string;
    formats: string[];
}

interface cardProps {
    cardprop: cardProp[],
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
    const diskSVG = 'img/disc.svg';
    const vinylSVG = 'img/vinyl.svg';
    const cassetteSVG = 'img/cassette.svg';


  return (

    <div className='card-wrapper'>
    <div className='card-header'><span>{header}</span></div>
    <div className='card-slider'>
        {length > 4 && <ChevronLeft   className='arrow-type left-arrow' onClick={handleLeftClick}/>}
        <div ref={sliderRef} className='cards'>
        {cardprop.map((card) => (
             <div key={card.title} className='card'>
                <div className='cover'>
                    <img src={card.img}/>
                </div>

                <div className='card-info'>
                    <div className='album-data'>
                        <div className='title'>{card.title} - </div>
                        <div className='artist'> {card.artist}</div>
                    </div>    
                    
                    <div className='price'>
                        {card.discount && <div className='discount' style={{ backgroundColor: card.color }}>{card.discount} ₽</div>}
                        <div className={`${card.discount ? 'initial' : 'no-discount'} `}>{card.price} ₽</div>
                    </div>

                    <div className='formats' >
                        {card.formats.map((format) => (
                            <div className='format'>
                                {format == 'disk' && <img src={diskSVG} title='Available on CD'/>}
                                {format == 'cassette' && <img src={cassetteSVG} title ='Available on Cassette'/>}
                                {format == 'vinyl' && <img src={vinylSVG} title = 'Available on Vinyl'/>}

                            </div>
                        ))}
                    </div>

                </div>
            </div>
        ))}

        </div>
        {length > 4 && <ChevronRight className='arrow-type right-arrow' onClick={handleRightClick}/>}

    </div>
    </div>
  )
}

export default CardSlider