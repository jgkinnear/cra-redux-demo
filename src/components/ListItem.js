import React from 'react';

export const ListItem = ({id, onClick, children, strikeThrough}) => {

	let style = {

	};

	if (strikeThrough) {
		style.textDecoration = 'underline';
		style.color = 'grey';
	}

	const handleClick = () => {
		onClick(id);
	};

	return <li onClick={handleClick} style={style}>{children}</li>
};