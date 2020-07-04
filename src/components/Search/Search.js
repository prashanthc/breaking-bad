import React, { useState } from 'react';

const Search = ({ handleQuery }) => {
    const [text, setText] = useState('');

    const onChange = (val) => {
        setText(val);
        handleQuery(val);
    };

    return (
        <section className="search">
            <form>
                <input 
                    type="text"
                    value={text}
                    className="form-control"
                    placeholder="Search Characters..."
                    onChange={(e) => onChange(e.target.value)}
                />
            </form>
        </section>
    )
};

export default Search;
