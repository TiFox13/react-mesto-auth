import {React, useState} from "react";
import { Link, useNavigate } from 'react-router-dom'; 
import * as Auth from './Auth.js'



    function Register() {

      const navigate = useNavigate(); 
      const [formValue, setFormValue] = useState({
        password: '',
        email: '',

      })
      const [massage, setMessage] = useState('')

      function handleChange(e){
        const {name, value} = e.target;
    
        setFormValue({
          ...formValue,
          [name]: value
        });
      }
        
    
    function handleSubmit(e) {
 
      e.preventDefault()
        let {password, email} = formValue;
        Auth.register(email, password)
        .then(() => {
          setMessage('Вы успешно зарегистрировались!')
          navigate('/sign-in', {replace: true});
        })
        .catch(() => {
          setMessage('Что-то пошло не так! Попоробуйте еще раз.')
        })
 
    }
    

    return (
        <div className='auth'>
          <form className='form_auth'  onSubmit={handleSubmit} name='регистрация' method='post' >
            <h2 className="form__heading_auth">Регистрация</h2>
            <label className = "form__input-field_auth">
              <input onChange={handleChange} type="email" id ="email-input-register" value={formValue.email || ''} className="form__item_auth form__item_register-email" name="email" placeholder="Email" required minLength="2" maxLength="40" />
              <span className = "form__item-error account-name-input-error"></span>
            </label>
            <label className = "form__input-field_auth">
              <input onChange={handleChange} type="password" id ="password-input-register" value={formValue.password || ''} className="form__item_auth form__item_register-password" name="password" placeholder="Пароль" required minLength="4" maxLength="200" />
              <span className = "form__item-error account-about-input-error"></span>
            </label>
            <input type="submit"  className="save-button_auth" value='Зарегистрироваться' aria-label="Зарегистрироваться" />
          </form>
      <Link to='/sign-in' className="link link_auth">
         Уже зарегистрированы? Войти
         </Link>
        </div>
    )
}

export default Register;