import React from 'react';
import {FaTimes, FaPen, FaRegCircle} from 'react-icons/fa';

const Icon = ( {name} ) =>{
    switch (name) {
        case "cross":
            return <FaTimes />
        case "circle":
            return <FaRegCircle />
        default:
            return <FaPen />;
    }
}

export default Icon;