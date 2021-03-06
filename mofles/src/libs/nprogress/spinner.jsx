/**
 *  @version 1.0.0
 *  @author Trejocode - Tane Morgan, Sergio Trejo
 *  @description Componente Spinner 
*/

import * as React from 'react'

const Spinner = () => (
	<div
		style = {{
			display: 'block',
			position: 'fixed',
			right: 15,
			top: 15,
			zIndex: 1031,
		}} >
		<div
			style = {{
				animation: '400ms linear infinite spinner',
				borderBottom: '2px solid transparent',
				borderLeft: '2px solid #2bb593',
				borderRadius: '50%',
				borderRight: '2px solid transparent',
				borderTop: '2px solid #2bb593',
				boxSizing: 'border-box',
				height: 24,
				width: 24,
			}} />
	</div>
);

export default Spinner;