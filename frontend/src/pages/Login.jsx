import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import BrazilianSpeak from '../images/BrazilianSpeak.png'
import './login.css'

function Login() {
    const [state, setState] = useState({ email: '', password: '', isDisabled: true});
    const navigate = useHistory();

    const handleChange = async ({ target }) => {
        const { name, value } = target;
        const verifyValidate = validation();
        setState({  ...state, [name]: value, isDisabled: !(verifyValidate)  });
      };
    
     const validation = () => {
        const { email, password } = state;
        const minLength = 6;
        const passwordValidate = password.length >= minLength;
        const regularExpressionEmailValidate = /\S+@\S+\.\S+/;
        return regularExpressionEmailValidate.test(email) && passwordValidate;
      };
    return (
      <>
        <div className="divInput">
          <div id='div-login'>
            <img src={BrazilianSpeak} alt="" />
            <label>
              Email: 
              <input
                name="email"
                type="text"
                placeholder="Escreva seu email"
                value={ state.email }
                onChange={ handleChange }
              />
            </label>
            <label>
              Senha: 
              <input
                type="password"
                name="password"
                placeholder="Escreva sua senha"
                value = { state.password }
                onChange={ handleChange }
              />
            </label>
            <button
              className="buttonLogin"
              data-testid="btn-settings"
              type="button"
              disabled = { state.isDisabled }
              onClick={ () => navigate.push('/dashboard') }
            >
              Login
            </button>
            <a href="">Esqueceu a senha?</a>
          </div>
        </div>
      </>
    )
  }
  
export default Login;