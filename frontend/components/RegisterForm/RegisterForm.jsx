import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { async } from 'regenerator-runtime';
import './styles/RegisterForm.css';

const RegisterForm = () => {

	const [registerFormToggle, setRegisterFormToggle] = useState(false)
	const [userSelector, setUserSelector] = useState(true)
	const [registerFormTitle, setRegisterFormTitle] = useState('')
	const [typeUser, setTypeUser] = useState('')
	const refName = useRef('')
	const refOwnId = useRef('')
	const refTypeUser = useRef('')

	const showRegisterForm = (formName) => {
		setRegisterFormToggle(() => true)
		setUserSelector(() => false)
		if (formName === 'basicUser') setRegisterFormTitle(() => 'Usuario de consulta o Estudiante')
		if (formName === 'minterUser') setRegisterFormTitle(() => 'Generador de certificados')
		setTypeUser(() => formName)
	}

	const goBackUserSelector = () => {
		if (event) {
			event.preventDefault()
		}
		setRegisterFormToggle(() => false)
		setUserSelector(() => true)
	}

	const registerUser = async (typeUser) => {
		event?.preventDefault()
		const data = {
			[refName.current.name]: refName.current.value,
			[refOwnId.current.name]: refOwnId.current.value,
			[refTypeUser.current.name]: refTypeUser.current.value,
		}

	}


	return (<>
		<div className={"register-form-container"}>
			<div className={`user-selector ${userSelector ? "" : "hidden-element"}`}>
				<div>
					<p className='register-form-msg'>Ya realizaste el login 😉👍🏻</p>
					<p className='register-form-msg'>Ahora crearemos tu usuario en Trazblock, elije entre los dos tipos de cuenta</p>
				</div>
				<div className="type-user-options-container">
					<div onClick={() => showRegisterForm('basicUser')} className="card-option">
						<p className="card-option__user-type-name">
							Estudiante o solo consulta
						</p>
					</div>
					<div onClick={() => showRegisterForm('minterUser')} className="card-option">
						<p className="card-option__user-type-name">
							Generador de certificados
						</p>
					</div>
				</div>
			</div>
			<div className={`register-view ${registerFormToggle ? "" : " hidden-element"}`}>
				<div className="form-msg">
					<p className='register-form-msg'>Por ultimo necesitas llenar este formulario</p>
				</div>
				<div className="form-container">
					<div className="header-form">
						<span className='form-title'>{registerFormTitle}</span>
						<span className='register-form-btn-back' onClick={goBackUserSelector}>Volver</span>
					</div>
					<form action="" onSubmit={() => { registerUser(typeUser) }}>
						<div className="form-field">
							<label htmlFor="">{typeUser === "basicUser" ? "Nombre Completo" : "Nombre de Compañia"}</label>
							<input type="text" ref={refName} name='name' />
						</div>
						<div className="form-field">
							<label htmlFor="">{typeUser === "basicUser" ? "Identificacion Personal" : "Identificacion de Compañia"}</label>
							<input type="text" ref={refOwnId} name='ownId' />
						</div>
						<div className="form-field">
							<label htmlFor="">Tipo de Usuario</label>
							<input type="text" ref={refTypeUser} name='userType' readOnly value={typeUser} />
						</div>
						<div className="form-btn-container">
							<button className='btn btn-secondary' onClick={goBackUserSelector}>Cancelar</button>
							<button className='btn'>Registrar</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</>)
};

export default RegisterForm;
