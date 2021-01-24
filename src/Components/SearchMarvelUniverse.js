import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Category from './Category';
import MarvelData from './MarvelData';

const SearchMarvelUniverse = () => {
    const [input, setInput] = useState('');
    const [searchInput, setSearchInput] = useState('');
    const [title, setTitle] = useState();

    const setInputValue = (input) => {
        setInput(input);
    }

    const setOnSearchTex = (input) => {
        setSearchInput(input);
    }

    const filterData = () => {
        setOnSearchTex(input);
    }

    return (
        <div>
            <Category setTitle={setTitle} setInput={setInput} />
            <SearchBar
                input={input}
                placeholder={`Seach ${title}`}
                onChange={setInputValue}
                onMouseEnter={filterData}
            />
            <h1>{'Marvel' + title}</h1>
            <MarvelData input={searchInput} title={title} />
        </div>
    )
}

export default SearchMarvelUniverse;