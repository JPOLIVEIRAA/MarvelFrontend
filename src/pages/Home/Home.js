import React, {useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import {ComicsWrapper, ComicBox, ComicThumbnail, ComicTitle, FavoriteButton, ComicDescription, ComicsTitle} from './styled'
import api from '../../services/api';

function Home() {
    const [comics, setComics]= useState([]);

  useEffect(() =>{
    axios.get('https://gateway.marvel.com:443/v1/public/comics?ts=1&limit=14&apikey=d30204ea1f06f4d40a105fddf5af4f3d&hash=480c649c3ae3866ed8951e8af5dede01').then(res=>{
        setComics(res.data.data.results)
    }).catch(error=>console.log(error))
  },[])

  console.log(comics)

  const favoriteCommic = useCallback(async (id, title, description, issueNumber, thumbnail, price) => {

    try{
      await api.post('/favorites', {
        id: parseInt(id),
        title,
        description: description === null ? title : description,
        issueNumber,
        thumbnail,
        price: price
      }).then(res => {
        console.log(res)
      })
    }catch(err){
      console.log(err)
    }
  }, [])

    return <>
            <ComicsTitle>Comics</ComicsTitle>
            <ComicsWrapper>
              {comics.map(item => (
                <ComicBox key={item.id}>
                <ComicThumbnail src={item.images.path} alt={item.upc}/>
                <ComicTitle>{item.title}</ComicTitle>
                <ComicDescription>{item.description}</ComicDescription>
                <FavoriteButton onClick={()=> favoriteCommic(item.id, item.title, item.description, item.issueNumber, item.thumbnail.path, item.prices)}>Favoritar</FavoriteButton>
              </ComicBox>
              ))}
            </ComicsWrapper>
           
        </>
    
}

export default Home 