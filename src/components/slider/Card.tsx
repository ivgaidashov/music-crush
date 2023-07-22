import React from 'react'
import './card.scss'
import { CardProp } from '../../interfaces'
import {Link} from 'react-router-dom'

interface CardProps {
    carddiv: CardProp
}

const Card = ({ carddiv }: CardProps) => {

    const diskSVG = '/img/disc.svg';
    const vinylSVG = '/img/vinyl.svg';
    const cassetteSVG = '/img/cassette.svg';
    return (
        <Link to={`/item/${carddiv.id}`}>
            <div key={carddiv.title} className='card'>
                <div className='cover'>
                    <img src={'/' + carddiv.img[0]} />
                </div>

                <div className='card-info'>
                    <div className='album-data'>
                        <span className='title'>{carddiv.title} - </span>
                        <span className='artist'> {carddiv.artist}</span>
                    </div>

                    <div className='price'>
                        {carddiv.discount && <div className='discount' style={{ backgroundColor: carddiv.color }}>{carddiv.discount} ₽</div>}
                        <div className={`${carddiv.discount ? 'initial' : 'no-discount'} `}>{carddiv.price} ₽</div>
                    </div>

                    <div className='formats' >
                        {carddiv.formats.map((format) => (
                            <div className='format'>
                                {format == 'CD' && <img src={diskSVG} title='Available on CD' />}
                                {format == 'Cassette' && <img src={cassetteSVG} title='Available on Cassette' />}
                                {format == 'Vinyl' && <img src={vinylSVG} title='Available on Vinyl' />}

                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </Link>
    )
}

export default Card