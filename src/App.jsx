import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServerPage from './pages/ServerPage';
import DomainPage from './pages/DomainPage';
import CloudPage from './pages/CloudPage';
import AiPage from './pages/AiPage';
import WalletPage from './pages/WalletPage';

const App = () => (
	<Router>
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/server' element={<ServerPage />} />
			<Route path='/domain' element={<DomainPage />} />
			<Route path='/cloud' element={<CloudPage />} />
			<Route path='/ai' element={<AiPage />} />
			<Route path='/wallet' element={<WalletPage />} />
		</Routes>
	</Router>
);

export default App;
