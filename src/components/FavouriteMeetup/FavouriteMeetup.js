import {React, useContext} from 'react';
import MeetupItem from '../MeetupItem/MeetupItem';
import {Alert} from '@mui/material';
import styles from './FavouriteMeetup.module.css';
import FavoriteContext  from '../../store/favorite-context';

function FavouriteMeetup(){
  const favctx = useContext(FavoriteContext);
  const loadedMeetup  = favctx.favorite;
  let content;
  const favCount = favctx.totalFav;
  if(favCount === 0){
   content = <Alert severity="info">No Favorite Meetups</Alert>
  }
  else{
    content = loadedMeetup.map((meetup)=>(
			<MeetupItem
				key = {meetup.id}
				id = {meetup.id}
				title = {meetup.titte}
				date = {meetup.date}
				img = {meetup.img}
				desc = {meetup.desc}
				isFav ={meetup.isFav}
			/>
        )
		);
  }
  return (
  <div className={styles.FavouriteMeetup}>
  {
    content
  }
  </div>
  );
}


export default FavouriteMeetup;
