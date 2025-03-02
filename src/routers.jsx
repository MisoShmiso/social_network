import React from 'react';
import Feed from './components/Feed';
import Dialogs from './components/Dialogs';
import Friends from './components/Friends';
import Groups from './components/Groups';
import Photos from './components/Photos';
import Music from './components/Music';
import Settings from './components/Settings';
import Dialog from './components/Dialog';
import { Route, Routes } from 'react-router-dom';

const BodyRoutes = () => {
	return (
		<Routes>
			<Route
				path='/feed'
				element={<Feed />}
			/>
			<Route
				path='/messages'
				element={<Dialogs />}
			/>
			<Route
				path='/messages/:id'
				element={<Dialog />}
			/>
			<Route
				path='/friends'
				element={<Friends />}
			/>
			<Route
				path='/groups'
				element={<Groups />}
			/>
			<Route
				path='/photos'
				element={<Photos />}
			/>
			<Route
				path='/music'
				element={<Music />}
			/>
			<Route
				path='/settings'
				element={<Settings />}
			/>
		</Routes>
	);
};

export default BodyRoutes;
