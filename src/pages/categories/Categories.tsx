import React, {useState} from 'react'
import Filter from '../../components/filter/Filter'
import Card from '../../components/slider/Card'
import './categories.scss'
import {setStoreItems} from '../../store/action-creators/index'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useSelector } from 'react-redux'
import { State } from '../../store/reducers'

const Categories = () => {

  const state = useSelector((state: State) => state.items)
  
  const [filteredItems, setFilteredItems] = useState(state)

  return (
    <div className='main-categories'>
      <div className='filter'>
        <Filter setFilteredItems={setFilteredItems}/>
      </div>
      <div className='categories-list'>
        {filteredItems.map((item) =>  (
            <Card carddiv={item}/>
        ))}
      </div>
    </div>
  )
}

export default Categories