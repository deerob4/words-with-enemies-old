import React from 'react';

import './stylesheets/main.css';
import '../node_modules/animate.css/animate.css';

import Menu from './components/Menu';

main();

function main() {
	const menu = document.createElement('div');

	document.body.appendChild(menu);

	React.render(<Menu />, menu);
}