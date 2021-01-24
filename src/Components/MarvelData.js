import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Thumbnail from './shared/Thumbnail';
import './css/Marvel.css';
import { charactersURL, comicsURL, seriesURL } from './MarvelURL';

const MarvelData = ({ input, title }) => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        var fetchURL;
        if (title?.toLowerCase() === 'characters') {
            fetchURL = charactersURL;
        } else if (title?.toLowerCase() === 'comics') {
            fetchURL = comicsURL;
        } else if (title?.toLowerCase() === 'series') {
            fetchURL = seriesURL;
        }
        setIsLoading(true);
        await axios.get(fetchURL)
            .then((response) => {
                if (response.status === 200) {
                    setData(response.data.data.results);
                    setFilteredData(response.data.data.results);
                }
            }).catch((response) => {
                if (response.toString().includes(401)) {
                    alert('Fetching failed with error 401')
                } else if (response.toString().includes(409)) {
                    alert('Fetching failed with error 409')
                }
            })
        setIsLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [title])

    useEffect(() => {
        filterData(input);
    }, [input])

    const filterData = (input) => {
        const filteredData = data.filter((item) => {
            let name = title.toLowerCase() === 'characters' ? item.name : item.title
            return name.toLowerCase().includes(input.toLowerCase())
        }
        );
        setFilteredData(filteredData);
    }


    return (isLoading ? <h3> Fetching API data...</h3> :
        <div className='container'>
            {filteredData?.map((item) => {
                if (item && !item.thumbnail.path.includes('image_not_available')) {
                    let name = title.toLowerCase() === 'characters' ? item.name : item.title
                    return (
                        <div className='preview' key={item.id}>
                            <Thumbnail src={item.thumbnail.path + '.' + item.thumbnail.extension} alt={name} />
                            <h4>{name}</h4>
                        </div>
                    )
                } else return null;
            })}
        </div>
    );
}

export default MarvelData;