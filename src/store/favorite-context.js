import {createContext, useState} from 'react';
import React from 'react';

const FavoriteContext = createContext({
    favorite:[],
    totalFav:0,
    addFavorite : (favoritemeetup)=>{},
    removeFavorite : (meetupId)=>{},
    isFavorite : (meetupId)=>{}
});

export function FavoriteContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);
    const context = {
        favorite: userFavorites,
        totalFav: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        isFavorite: isFavoriteHandler

    }
    function addFavoriteHandler(favoritemeetup){
        setUserFavorites((prevUserFavorite)=>{
            return prevUserFavorite.concat(favoritemeetup);
        })

    }
    function removeFavoriteHandler(meetupId){
        setUserFavorites((prevUserFavorite)=>{
            return prevUserFavorite.filter((meetup)=>{
                return meetup.id !== meetupId
            })
        })
    }
    function isFavoriteHandler(meetupId){
        return userFavorites.some((meetup)=>meetup.id === meetupId);
    }
    return (
        <FavoriteContext.Provider value = {context}>
            {props.children}
        </FavoriteContext.Provider>
    )
}

export default FavoriteContext;