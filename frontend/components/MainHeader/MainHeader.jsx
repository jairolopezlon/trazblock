import React from 'react';
import { useState } from 'react';
import './styles/MainHeader.css';

const MainHeader = () => {

	const [walletConnected, setWalletConnected] = useState(false)
	const [userAddress, setUserAddress] = useState('')

	const toggleConnection = () => {
		setWalletConnected((currentValue) => !currentValue)
	}

	return (
		<div className="main-header-bg">
			<div className="main-header-container">
				<div className="branding-container">
					<span className="branding-name">Trazblock</span>
				</div>
				<div className="main-header-options">
					<a href="https://wallet.testnet.near.org/profile" target={"_blank"} className={`user-address ${userAddress === '' ? 'hidden-element' : ''}`}>{userAddress}</a>
					<button onClick={toggleConnection} className='btn main-header-option__connect-btn' >{walletConnected ? 'Logout' : 'Login'}</button>
				</div>
			</div>
		</div>
	);
};

export default MainHeader;
