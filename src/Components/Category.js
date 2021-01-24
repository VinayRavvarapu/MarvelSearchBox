import React, { useEffect, useState } from 'react';

const Category = ({ setTitle, setInput }) => {
    const categories = ['Comics', 'Characters', 'Series'];
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    useEffect(() => {
        setTitle(selectedCategory);
    }, []);

    const handleChange = (e) => {
        setInput('');
        setTitle(e.target.value);
        setSelectedCategory(e.target.value);
    }

    return (
        <div>
            <h2>Select Category</h2>
            <div style={{ marginBottom: '30px' }}>
                {categories.map((category) => {
                    return (
                        <label htmlFor={category} key={category}>
                            <input
                                id={category}
                                type='radio'
                                value={category}
                                checked={selectedCategory === category}
                                onChange={handleChange}
                            />
                            {category}
                        </label>
                    );
                })}
            </div>
        </div>
    );
}

export default Category;