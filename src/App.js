//import axios from 'axios'
//import {useState, useEffect} from 'react'
// https://gateway.marvel.com:443/v1/public/comics?limit=14&apikey=d30204ea1f06f4d40a105fddf5af4f3d
// key private: 1e88f6966723bbd8fa986aa7b6723feb4cf8f74f
// public key: d30204ea1f06f4d40a105fddf5af4f3d
// ts: 1
// 11e88f6966723bbd8fa986aa7b6723feb4cf8f74fd30204ea1f06f4d40a105fddf5af4f3d
// hash: 480c649c3ae3866ed8951e8af5dede01
/*
function App() {

  const [comics, setComics]= useState([]);

  useEffect(() =>{
    axios.get('https://gateway.marvel.com:443/v1/public/comics?ts=1&limit=14&apikey=d30204ea1f06f4d40a105fddf5af4f3d&hash=480c649c3ae3866ed8951e8af5dede01').then(res=>{
        setComics(res.data.data.results)
    }).catch(error=>console.log(error))
  },[])

  console.log(comics)

  return (
    <div className="App">
    
    <h1>Marvel</h1>

    <div className= "row row-cols-1 row-cols-md-2 g-4">

      {comics.map(c =>(

        <div className="col" key={c.id}>
        <div className="card" style={{width: "10rem", height: "12rem"}}>
        <img src={`${c.thumbnail.path}.${c.thumbnail.extension}`} className="card-img-top" style={{width:'100%', height:'100%'}} alt="imagem"/>
        <div className="card-body">
          <p className="card-text">{c.name}</p>
        </div>
      </div>
      </div>
      ))

      }

      </div>

   </div> 
  );
}

export default App;
*/


import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Usuarios from './pages/Usuarios'
import AdicionarUsuario from '../src/pages/AdicionarUsuario'
import Home from './pages/Home/Home'
import DetalhesUsuario from './pages/DetalhesUsuario'
import PaginaNaoEncontrada from './pages/PaginaNaoEncontrada'
import Header from './pages/header/Header'
import Login from './pages/Login'
import './App.css'


function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <main>
          <Switch>
            <Route path="/" exact>
              <Login />
            </Route>
            <Route path="/home" exact>
            <Home />
           </Route>
            <Route path="/usuarios/:id">
              <DetalhesUsuario />
            </Route>
            <Route path="/usuarios">
              <Usuarios />
            </Route>
            <Route path="/adicionar">
              <AdicionarUsuario />
            </Route>
            <Route path="*">
              <PaginaNaoEncontrada />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
