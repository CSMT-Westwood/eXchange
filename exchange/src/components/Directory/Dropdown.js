import React, { useState } from 'react';
import './dropdown.css';

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
        <select onChange={updateValue} className="dropdownMenu">
            {createOptionTags()}
        </select>
    )
}

export default Dropdown;
