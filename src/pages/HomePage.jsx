import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ServerFeatures from '../components/ServerFeatures';
import ControlPanel from '../components/ControlPanel';
import Stats from '../components/Stats';
import Characteristic from '../components/Characteristic';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const HomePage = () => (
	<div className='bg-white font-sans text-black min-h-screen'>
		<Header />
		<Hero />
		<ServerFeatures />
		{/* <ControlPanel />
		<Stats />
		<Characteristic />
		<CTA />
		<Footer /> */}
	</div>
);

export default HomePage;
