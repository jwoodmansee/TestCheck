import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import Router from './components/Router';

ReactDOM.render(
	<Router />,
	document.getElementById('app')
);

module.hot.accept();