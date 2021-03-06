import React, { useState } from 'react';
import './Dropdown.css';

function Dropdown(props) {
    const options = props.options;
    const optionTags = [];

    const createOptionTags = () => {
        let i = 0;
        for (let each of options) {
            optionTags.push(<option value={each} key={i}>{each}</option>);
            i++;
        }
        return optionTags;
    }

    const updateValue = (e) => {
        props.onChange(e.target.selectedIndex);
    }

    return (
        <select onChange={updateValue} className={`dropdown-dropdown ${props.className}`}>
            {createOptionTags()}
        </select>
    )
}

export default Dropdown;
