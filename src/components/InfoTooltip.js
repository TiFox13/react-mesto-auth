import React from "react";


function InfoTooltip({}) {
    return (
        <div className='popup' /*{isOpen ? `popup popup_${name} popup_opened` : `popup popup_${name}`}*/>
        <div className='popup__container_auth'>
<button type="button"  className="close-button" aria-label="закрыть."></button>
        <div className='form popup-auth-result'  method='post'>
            <div className='auth-result-icon_ok' ></div>
            <h2 className="auth-result-heading_ok">Вы успешно зарегистрировались!</h2>
        </div>
       </div>
       </div>
    )
}

export default InfoTooltip;