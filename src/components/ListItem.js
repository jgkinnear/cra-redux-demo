import React from 'react';

export const ListItem = ({onClick, children, strikeThrough}) => {

	let style = {

	};

	if (strikeThrough) {
		style.textDecoration = 'underline';
		style.color = 'grey';
	}

	return <li onClick={onClick} style={style}>{children}</li>
};