import React from 'react'

const CardCertificate = ({ userName, dateMinted, certificateName }) => {
    return (<>
        <div className="certificate-card">
            <div className="certificate-card-header">
                <span className="certificate-card__title">{certificateName}</span>
                <span className="certificate-card__date">{dateMinted}</span>
            </div>
            <span className="certificate-card__student-name">{userName}</span>
        </div>
    </>)
}


export default CardCertificate