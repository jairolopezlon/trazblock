import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { async } from 'regenerator-runtime';
import './styles/CompanyInterface.css';
import CardCertificate from './CardCertificate';





const CompanyInterface = () => {

	const [formShown, setFormShown] = useState(false)
	const refStudentName = useRef('')
	const refAddress = useRef('')
	const refCertificateName = useRef('')
	const [certificatesData, setCertificatesData] = useState({})

	const certificateFormToggle = () => {
		setFormShown((currentValue) => !currentValue)
	}
	const certificateFormClose = () => {
		setFormShown(() => false)
	}

	const createCertificate = async () => {
		event?.preventDefault()
		const data = {
			[refStudentName.current.name]: refStudentName.current.value,
			[refAddress.current.name]: refAddress.current.value,
			[refCertificateName.current.name]: refCertificateName.current.value,
		}

		console.log(data)
	}
	const getCertificatesGenerated = () => {
		import('./../../data').then(module => {
			setCertificatesData(() => module.data)
		})
	}

	getCertificatesGenerated()


	return (<>
		<div className="certificate-section">

			<div className="certificate-form-section">
				<div className="actions-certificate-form">
					<button onClick={certificateFormToggle} className='btn btn-secondary' >{formShown ? "Cerrar formulario de certificados" : "Abrir formulario de certificados"}</button>
				</div>
				<div className={`certificate-form-container ${formShown ? "" : "hidden-element"}`} >
					<div className="form-container">
						<div className="header-form">
							<span className='form-title'>Creacion de Certificados</span>
							<span className='register-form-btn-back' onClick={certificateFormClose}></span>
						</div>
						<form action="" onSubmit={createCertificate}>
							<div className="form-field">
								<label htmlFor="">Nombre estudiante</label>
								<input type="text" ref={refStudentName} name='studentName' />
							</div>
							<div className="form-field">
								<label htmlFor="">Wallet Id (Address)</label>
								<input type="text" ref={refAddress} name='address' />
							</div>
							<div className="form-field">
								<label htmlFor="">Nombre Certificado</label>
								<input type="text" ref={refCertificateName} name='certificateName' />
							</div>
							<div className="form-btn-container">
								<button className='btn btn-secondary' onClick={certificateFormClose}>Cancelar</button>
								<button className='btn'>Crear</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div className="certificate-list-section">
				<div className="certificate-list-section-header">
					<span>Certificados generados</span>
				</div>
				<div className="certificate-list-container" >
					{certificatesData && Object.entries(certificatesData).map(certificateData => (
						<CardCertificate key={certificateData[0]} {...certificateData[1]} />
					))}
				</div>

			</div>
		</div>
	</>);
};

export default CompanyInterface;
