import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
	useEffect(() => {
		AOS.init({ once: true, duration: 900, offset: 40 });
	}, []);

	return (
		<footer className='bg-black text-white mt-20 px-4 sm:px-6 lg:px-16 py-10 sm:py-12' data-aos='fade-up'>
			<div className='grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 mb-10'>
				<div>
					<h3 className='font-black text-lg sm:text-xl mb-2'>BIG DATA</h3>
					<p className='text-xs sm:text-sm text-gray-400'>
						National Reserve System Of Resource Funding
						<br />
						All Rights Reserved
					</p>
				</div>
				<div>
					<h4 className='font-bold mb-2'>DATA CENTER</h4>
					<ul className='text-xs sm:text-sm text-gray-400 space-y-1'>
						<li>Web Hosting</li>
						<li>Cloud Hosting</li>
						<li>Dedicated Server</li>
						<li>Shared Hosting</li>
						<li>VPS Hosting</li>
					</ul>
				</div>
				<div>
					<h4 className='font-bold mb-2'>Domain Search</h4>
					<ul className='text-xs sm:text-sm text-gray-400 space-y-1'>
						<li>New Domain</li>
						<li>Search Domains</li>
						<li>Search AI</li>
						<li>Club Big Data</li>
					</ul>
				</div>
				<div>
					<h4 className='font-bold mb-2'>Hello</h4>
					<ul className='text-xs sm:text-sm text-gray-400 space-y-1'>
						<li>Customers</li>
						<li>Support Portal</li>
						<li>Video Tutorials</li>
						<li>Live Chat</li>
					</ul>
				</div>
			</div>
			<div className='flex flex-wrap justify-between items-center text-gray-500 text-xs border-t border-gray-800 pt-6'>
				<div className='flex gap-3 sm:gap-5'>
					<span>BIG DATA</span>
					<span>WALLET</span>
					<span>LICENSE</span>
				</div>
				<div>&copy; {new Date().getFullYear()} Big Data. All rights reserved.</div>
			</div>
		</footer>
	);
};

export default Footer;
