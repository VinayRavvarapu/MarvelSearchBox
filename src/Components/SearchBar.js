import React, { useState } from 'react';

const SearchBar = ({ input, placeholder, onMouseEnter, onChange }) => {
    const [searchHistory, setSearchHistory] = useState([]);

    const handleOnClick = () => {
        onMouseEnter(input);
        if (searchHistory?.length === 5) {
            searchHistory.pop();
            searchHistory.unshift(input)
            setSearchHistory(searchHistory);
        } else {
            searchHistory.unshift(input)
            setSearchHistory(searchHistory);
        }
        console.log('Last 5 search Keys');
        console.log(searchHistory);
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <label htmlFor="search">
                <input
                    id="search"
                    style={{ width: "200px", background: "#F2F1F9", border: "none", padding: "10px", marginBottom: '20px' }}
                    value={input}
                    placeholder={placeholder}
                    onChange={(e) => onChange(e.target.value)}
                />
                Search Marvel Universe
            </label>
            <button style={{ border:'none', textAlign:'center', cursor:'pointer',  padding: '15px 32px', backgroundColor: 'lightblue'}} onClick={handleOnClick}>Search</button>
        </div>

    );
}

export default SearchBar;