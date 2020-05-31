import React from 'react';
const Trigger = ({ triggerText, buttonRef, onClick }) => {
	return (
		<button
			className="btn btn-lg btn-danger center modal-button"
			ref={buttonRef}
			onClick={
				() => onClick()
			}
		>
			{triggerText}
		</button>
	);
};
export default Trigger;
