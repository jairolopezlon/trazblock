import React from 'react';
import { useState } from 'react';
import './styles/UserInterface.css';

import CardCertificate from './CardCertificate';


const UserInterface = () => {
	const [certificatesData, setCertificatesData] = useState({})

	const getCertificatesGenerated = () => {
		import('./../../data').then(module => {
			setCertificatesData(() => module.data)
		})
	}

	getCertificatesGenerated()
	return (<>
		<div className="certificate-section">
			<div className="certificate-list-section">
				<div className="certificate-list-section-header">
					<span>Certificados Obtenidos</span>
				</div>
				<div className="certificate-list-container">
					{certificatesData && Object.entries(certificatesData).map(certificateData => (
						<CardCertificate key={certificateData[0]} {...certificateData[1]} />
					))}
				</div>

			</div>
		</div>
	</>);
};

export default UserInterface;
