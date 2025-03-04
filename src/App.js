import './App.css';
import React from 'react';
import Header from './components/header';
import SideBar from './components/sideBar';
import CommunityInfo from './components/CommunityInfo';
import { BrowserRouter } from 'react-router-dom';
import BodyRoutes from './routers';

const App = () => {
	return (
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
	);
};

export default App;
