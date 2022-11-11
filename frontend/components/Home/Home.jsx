import React from 'react';
import './style/Home.css'

const Home = () => {
	return (<>
		<div className="home-container">

			<p className='home-msg'>Para empezar realiza login con tu billetera de Near, o crea una cuenta en caso que no tengas una</p>
			<div className="options-container">
				<button className='btn btn-secondary'>Create Wallet</button>
				<button className='btn'>Login</button>
			</div>
		</div>
	</>);
};

export default Home;
