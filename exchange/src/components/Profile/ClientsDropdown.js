import React from 'react';
import Select from 'react-select';

export default function ClientsDropdown(props) {

	const handleChange = (option) => {
		props.selectClient(option.value);
	};
	

	return (
		<Select
			value={props.selectedClient}
			onChange={handleChange}
			options={props.options}
		/>
	);

}
