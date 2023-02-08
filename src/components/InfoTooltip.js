import React from "react";


function InfoTooltip({massage, isOpen, onClose, status}) {


    return (
        <div className={isOpen ? `popup  popup_opened` : `popup`}>
        <div className='popup__container_auth'>
<button type="button" onClick={onClose} className="close-button" aria-label="закрыть."></button>
        <div className='form popup-auth-result'  method='post'>
            <div className={`auth-result-icon_${status}`} ></div>
            <h2 className='auth-result-heading'>{massage}</h2>
        </div>
       </div>
       </div>
    )
}

export default InfoTooltip;