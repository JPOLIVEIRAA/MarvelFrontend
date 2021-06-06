import styled from 'styled-components'

export const ComicsWrapper = styled.div`
width: 102vw;
height: 100%;
display: flex;
flex-wrap: wrap;
padding: 20px;
`;

export const ComicBox = styled.div`
width: 250px;
height: 350px;
display: flex;
flex-direction: column;
padding: 10px;
border: 1px solid gray;
margin-right: 20px;
margin-bottom: 20px;
`;

export const ComicThumbnail = styled.img`
width: 100%;
height: 200px;
`;

export const ComicTitle = styled.span`
margin: 0 auto;
font-weight: bold;
color: royalblue;
font-size: 16px;
`;

export const ComicDescription = styled.span`
margin: 0 auto;
font-weight: 400;
color: gray;
font-size: 14px;
overflow-y: scroll;
`;

export const ComicsTitle = styled.h1`
margin-left: 20px;
color: black;
font-size: 38px;
margin-bottom: 10px;
margin-top: 15px;
`;

export const FavoriteButton = styled.button`
margin: 0 auto;
width: 200px;
border-radius: 15px;
background-color: red;
color: whitesmoke;
border: none;
outline: none;
margin-top: 20px;
`;