import React from "react";
import './Thumbnail.css';

const Thumbnail = ({ src, alt }) => {
    return (
        <div className='thumbnail'>
            <img className='image' alt={alt} src={src} />
        </div>
    )
}

export default Thumbnail;