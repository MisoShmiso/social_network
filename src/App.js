import './App.css';
import React from 'react';
import Header from './components/header';
import SideBar from './components/sideBar';
import store from './models';
import { StoreContext } from './models/StoreContext';
import CommunityInfo from './components/CommunityInfo';
import { BrowserRouter } from 'react-router-dom';
import BodyRoutes from './routers';

const App = ({ state }) => {
	return (
		<StoreContext.Provider value={{ store }}>
			<BrowserRouter>
				<div className='app-wrapper'>
					<Header />
					<div className='content'>
						<SideBar />
						<BodyRoutes />
						<CommunityInfo />
					</div>
				</div>
			</BrowserRouter>
		</StoreContext.Provider>
	);
};

export default App;
