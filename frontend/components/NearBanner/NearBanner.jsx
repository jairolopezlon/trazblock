import React from 'react';
import './styles/NearBanner.css';

const NearBanner = () => {
	return (<div className='nearbanner-container'>
		<div className="nearbanner-container-anchor">
			<p>Creado por</p>
			<a href="https://www.linkedin.com/in/jairolopezlon" target={"_blank"}>@JairoLopezLon</a>
			<a href="https://near.org/" target={"_blank"}>
				<img src="https://docs.near.org/img/near_logo_white.svg" alt="near logo" />
			</a>
		</div>
	</div >);
};

export default NearBanner;
