import {React, useState} from "react";
import { Link, useNavigate } from 'react-router-dom'; 
import * as Auth from './Auth.js'


function Login({handleLogin}) {

  const navigate = useNavigate(); 

  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
  })
  const [massage, setMessage] = useState('')

  function handleChange(e){
    const {name, value} = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }
 

 function handleSubmit(e){
    e.preventDefault();
     
    if (!formValue.email || !formValue.password){
      return;
    }

    Auth.login(formValue.email, formValue.password)
      .then((data) => {
        if (data.token){
          localStorage.setItem('jwt', data.jwt)

          handleLogin();

          setFormValue({email: '', password: ''});
          navigate('/');
        }
      })
      .catch(() => {
        setMessage('Что-то пошло не так! Попоробуйте еще раз.')
        console.log(massage)
      })
    }

 return (
    <div className='auth'>
   <form className='form_auth' onSubmit={handleSubmit} name='вход' method='post' >
     <h2 className="form__heading_auth">Вход</h2>
     <label className = "form__input-field_auth">
       <input onChange={handleChange} type="email" id ="email-input" className="form__item_auth form__item_register-email" name="email" placeholder="Email" required minLength="2" maxLength="40" />
       <span className = "form__item-error account-name-input-error"></span>
     </label>
     <label className = "form__input-field_auth">
       <input onChange={handleChange} type="password" id ="password-input" className="form__item_auth form__item_register-password" name="password" placeholder="Пароль" required minLength="4" maxLength="200" />
       <span className = "form__item-error account-about-input-error"></span>
     </label>
     <input type="submit"  className="save-button_auth" value='Войти' aria-label="Войти" />
   </form>
 
 </div>
 )
}

export default Login;