import React, { useState } from 'react'
import { useHistory } from 'react-router'
import api from '../services/api'


function Login(){
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const history = useHistory()
  
  const onSubmitHandler = async (event) => {
    event.preventDefault()
       try{
        await api.post('/auth/authenticate', {
            email,
            password
        })
       .then(resposta => {
          setPassword('')
          setEmail('')
          localStorage.setItem('marvelToken', resposta.data.token);
          localStorage.setItem('marvelUser', JSON.stringify(resposta.data.user));
          history.push('/home')
        })
       }catch(err){
           console.log(err)
       }
    }

    return (
      <div className="AdicionarUsuario">
        <h2>Login</h2>
        <form onSubmit={onSubmitHandler}>
          <div className="Linha">
            <div className="Coluna">
            </div>
            <div className="Linha">
            <div className="Coluna">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
                required>
              </input>
            </div>
          </div>
            <div className="Coluna">
              <label>Senha</label>
              <input
                type="text"
                name="password"
                value={password}
                onChange={event => setPassword(event.target.value)}
                required>
              </input>
            </div>
          </div>
          <button type="submit">
            Logar
        </button>
        </form>
      </div>
    )
  }


export default Login