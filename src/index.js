import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StoreContext } from './models/StoreContext';
import store from './models';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<StoreContext.Provider value={{ store }}>
			<App />
		</StoreContext.Provider>
	</React.StrictMode>
);

reportWebVitals();
