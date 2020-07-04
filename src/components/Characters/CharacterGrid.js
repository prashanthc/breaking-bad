import React from 'react';
import CharacterItem from './CharacterItem';
import Loader from '../Loader/Loader';

const CharacterGrid = ({ items, isLoading }) => {
    return isLoading ? (<Loader />) : (
        <section className="cards">
            {items.map(item => (
                <CharacterItem key={item.char_id} item={item} />
            ))}
        </section>
    )
};

export default CharacterGrid;
