// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/header';
import SideBar from './components/sideBar';
import Feed from './components/Feed';
import CommunityInfo from './components/CommunityInfo';

const App = () => {
	return (
		<div className='app-wrapper'>
			<Header />
			<div className='content'>
				<SideBar />
				<Feed />
				<CommunityInfo />
			</div>
		</div>
	);
};

export default App;
