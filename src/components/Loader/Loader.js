import React from 'react'
import spinner from '../../img/spinner.gif'

const Loader = () => {
    return (
        <img
            alt="Spinner"
            src={spinner}
            style={{display: 'block', width: '200', margin: 'auto'}}
        />
    )
}

export default Loader;