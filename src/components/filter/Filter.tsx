import React, { useState, useEffect } from 'react'
import { useSearchParams } from "react-router-dom";

import { CardProp } from '../../interfaces'
import './filter.scss'
import { useSelector } from 'react-redux'
import { State } from '../../store/reducers'

interface FilteredProps {
    setFilteredItems: React.Dispatch<React.SetStateAction<CardProp[]>>
}

const Filter = ({ setFilteredItems }: FilteredProps) => {

    let [searchParams] = useSearchParams();
    const genre = searchParams.get('genre')

    const setInitialGenreObject = (genre: string | null) => {
        return genre ? { 'Pop': genre === 'Pop', 'Rock': genre === 'Rock', 'Rap': genre === 'Rap' } : { 'Pop': true, 'Rock': true, 'Rap': true }
    }

    const initialFormatState = { 'CD': true, 'Vinyl': true, 'Cassette': true }
    const allItems = useSelector((state: State) => state.items)

    const [genreFilters, setGenreFilters] = useState(setInitialGenreObject(genre));
    const [formatFilters, setFormatFilters] = useState(initialFormatState);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(2000);

    const handleGenreFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        const clickedGenre = e.target.name
        const newGenreFilters = { ...genreFilters, [clickedGenre]: !genreFilters[clickedGenre as keyof typeof genreFilters] }
        setGenreFilters(newGenreFilters)
    }

    const handleFormatFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        const clickedFormat = e.target.name
        const newFormatFilters = { ...formatFilters, [clickedFormat]: !formatFilters[clickedFormat as keyof typeof formatFilters] }
        setFormatFilters(newFormatFilters)
    }

    const handleMinPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.valueAsNumber;
        if (newValue > 0 && newValue < maxPrice) {
            setMinPrice(newValue)
        }
    }

    const handleMaxPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.valueAsNumber;
        if (newValue > minPrice) {
            setMaxPrice(newValue)
        }
    }

    const filterItemsByGenre = (data: CardProp[]) => {
        return data.filter((album) => (genreFilters[album.genre as keyof typeof genreFilters] === true))
    }

    const filterItemsByFormat = (data: CardProp[]) => {
        /* getting from an object an array of its keys that are truthy */
        const filteredFormats = (Object.entries(formatFilters).map((genre) => { if (genre[1] === true) {return genre[0]} else {return null} })).filter(n => n) /*getting rid of null values */
        return data.filter((album) => (
            album.formats.some(r=> filteredFormats.includes(r))
        ))
    }

    const filterByPrice = (data: CardProp[]) => {
        return data.filter((album) => album.discount? album.discount >= minPrice && album.discount <= maxPrice : album.price >= minPrice && album.price<= maxPrice)
    }

    useEffect(() => {
        setFilteredItems(allItems)
    }, [])

    useEffect(() => {
        setGenreFilters(setInitialGenreObject(genre))
        setFormatFilters(initialFormatState)
        setMinPrice(0)
        setMaxPrice(2000)
        setFilteredItems(allItems)
       }, [genre]);
 

    useEffect(() => {
        let result = allItems;
        result = filterItemsByGenre(result);
        result = filterItemsByFormat(result);
        result = filterByPrice(result)
        setFilteredItems(result)
    }, [minPrice, maxPrice, genreFilters, formatFilters])


    return (
        <>
            <p className='filter-header'>Filters</p>
            <div className='genres-filter'>
                <p className='filter-title'>Genres</p>
                {Object.entries(genreFilters).map((genre) => (<div>
                    <div className='input-container'> <input
                        className='filter-checkbox'
                        type="checkbox"
                        name={genre[0]}
                        value={genre[0]}
                        checked={genre[1] ? true : false}
                        onChange={handleGenreFilter}
                    />{genre[0]}
                    </div>
                </div>))
                }

            </div>

            <div>
                <p className='filter-title'>Price</p>
                <div className='price-range'>
                    <input  type='number' value={minPrice} onChange={handleMinPrice} /> 
                    <span> - </span>
                    <input type='number' value={maxPrice} onChange={handleMaxPrice} />

                </div>
            </div>

            <div>
                <p className='filter-title'>Format</p>
                {Object.entries(formatFilters).map((format) => (<div>
                    <div className='input-container'> <input
                        className='filter-checkbox'
                        type="checkbox"
                        name={format[0]}
                        value={format[0]}
                        checked={format[1] ? true : false}
                        onChange={handleFormatFilter}
                    />{format[0]}
                    </div>
                </div>))
                }
            </div>
        </>
    )

}

export default Filter