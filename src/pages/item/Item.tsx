import React, {useEffect, useState} from 'react'
import {  useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { State } from '../../store/reducers'
import {CardProp} from '../../interfaces'
import  {ArrowDownShort} from '@styled-icons/bootstrap/ArrowDownShort'
import {ArrowUpShort} from '@styled-icons/bootstrap/ArrowUpShort'

import './item.scss'
import { useDispatch } from 'react-redux';
import {addNewAlbumToCart} from '../../store/action-creators/index'
import { bindActionCreators } from 'redux'


const Item = () => {
    let { id } = useParams();
    const [item, setItem] = useState<CardProp | undefined>()
    const [thumbnail, setThumbnail] = useState<string | undefined>()
    const [pickedFormat, setPickedFormat] = useState('CD')
    const [numberOfItems, setNumberOfItems] = useState(1)
    const [showTracklist, setShowTracklist] = useState(false)

    const state = useSelector((state: State) => state.items)

    const dispatch = useDispatch();
    const addAlbum = bindActionCreators(addNewAlbumToCart, dispatch)

    useEffect(() => {
      setItem(state.filter((song) => song.id === Number(id))[0])
    }, [id])

    useEffect(() => {
      setThumbnail(item && item.img[0])
    }, [item])

    useEffect(() => {
      const match = item && item.img.filter((image) => image.includes(pickedFormat.toLocaleLowerCase()))
      if (match && match?.length>0) {
        setThumbnail(match[0])
      }
      else {
        setThumbnail(item && item.img[0])
      }
    }, [pickedFormat])

  const onChangeThumnbail = (picture:string) => {
    setThumbnail(picture)
  }

  const descreaseItems = () => {
    numberOfItems > 1 && setNumberOfItems(numberOfItems - 1) 
  }

  const increaseItems = () => {
     setNumberOfItems(numberOfItems + 1) 
  }

  const onHandleFormat = (value:string) => {
    setPickedFormat(value)
    setNumberOfItems(1)
  }

  const onHandleTracklist = () =>
  {
    console.log('clicked')
    setShowTracklist(prevstate => !prevstate)
  }
  return (
   
    <div className='item-wrapper'>
      <div className='item-main'>
        <div className='item-images'>
          <div className='item-mainimage'><img src={'/' + thumbnail} /></div>
          {item && item.img.length > 1 && <div className='item-all-images'>

            {item?.img.map((picture)=>{
              return <div className={`item-image-box  `} onClick={() => onChangeThumnbail(picture)}><img className={`${thumbnail === picture ? 'highlight' : ' '}`} src={'/' + picture} /></div>
            })}
          </div>}
          {item && item.new && <div className='new-label' style={{ color: item?.color }}>NEW</div>}
        </div>

        <div className='item-description'>
            <div className='item-info'>
              <div className='price'>
                            {item?.discount && <div className='discount ' style={{ backgroundColor: item?.color }}>{item?.discount} ₽</div>}
                            <div className={`${item?.discount ? 'initial' : 'no-discount'} `} > {item?.price} ₽</div>
                        </div>
              <div className='item-title' style={{ color: item && item.color }}>{item && item.title}</div>
              <div className='item-artist'>{item && item.artist}</div>
              <div className='item-label'>Label: <span>{item && item.label}</span></div>
              <div className='item-genre'>Genre: <span>{item && item.genre}</span></div>
              <div className='how-many-items'>
                <div className='change-items' data-custom='decrease' onClick={descreaseItems}>-</div>
                <div className='current-nmb-of-items'>{numberOfItems}</div>
                <div className='change-items' data-custom='increase' onClick={increaseItems}>+</div>
              </div>
              <div className='item-formats'>
                Pick a Format:
              {
                item && item.formats.map((format) => {
                  return <div className={`format-type ${pickedFormat === format && 'picked-format'}`} style={{border: `1px dotted  ${item && item.color}`, backgroundColor: `${item && pickedFormat === format ? item.color : 'white'}` }} onClick={() => onHandleFormat(format)}>{format}</div>
                })
              }
              
              </div>
              {item &&<button className='add-to-cart' onClick={()=>addAlbum({...item, format: pickedFormat, count: numberOfItems})}>Add to the Cart</button>}
            </div>

            <div className='item-metacritic'>
              <span className='metacritic'>
                metacritic score
              </span>
              <span className='score' style={{ color: item && item.metacritic > 68 ? '#00FA9A' : '#F0E68C' }} >{item && (item.metacritic > 0 ? item.metacritic : 'n/a')}</span>
            </div>
        </div>
      </div> 
      <div className='tracklist-wrapper' >
        <div className='tracklist-header' style={{ color: item?.color }}>
          <p className='tracklist-logo' >Tracklist</p>
          <div onClick={()=>onHandleTracklist()} className='icon'> {showTracklist ? <ArrowUpShort/> : <ArrowDownShort/>}</div>
        </div>
        {showTracklist && <p className='tracklist-songs'>
          {
            item && item.tracklist.map((song, index) => {
              const number = index +1;
              return <p>  {number }. {song}</p>
            })
          }
        </p>}
      </div>
    </div>
  )
}

export default Item