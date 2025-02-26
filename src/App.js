// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/header';
import SideBar from './components/sideBar';
import Profile from './components/profile';
import CommunityInfo from './components/CommunityInfo';

const App = () => {
	console.log('hello i love u')
	return (
		<div className='app-wrapper'>
			<Header />
			<div className='content'>
				<SideBar />
				<Profile />
				<CommunityInfo />
			</div>
		</div>
	);
};

export default App;
