import React, { useState } from 'react'
import { useHistory } from 'react-router'
import api from '../services/api'


function AdicionarUsuario(){
  // bom dia

  const [nome, setNome] = useState('')  
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const history = useHistory()
  

  const onSubmitHandler = async (event) => {
    event.preventDefault()


        await api.post('/auth/register', {
          email,
          nome,
          password
      })
     .then(resposta => {
        setNome('')
        setPassword('')
        setEmail('')
        localStorage.setItem('marvelToken', resposta.data.token);
        localStorage.setItem('marvelUser', JSON.stringify(resposta.data.user));
        history.push('/home')
      })
    }




    return (
      <div className="AdicionarUsuario">
        <h2>Adicionar Usuário</h2>
        <form onSubmit={onSubmitHandler}>
          <div className="Linha">
            <div className="Coluna">
              <label>Nome</label>
              <input
                type="text"
                name="nome"
                value={nome}
                onChange={event => setNome(event.target.value)}
                required>
              </input>
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
          <button type="submit">
            Adicionar
        </button>
        </form>
      </div>
    )
  }


export default AdicionarUsuario