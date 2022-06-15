import {React, useContext} from 'react';
import MeetupItem from '../MeetupItem/MeetupItem'
import styles from './FavouriteMeetup.module.css';
import FavoriteContext  from '../../store/favorite-context';

function FavouriteMeetup(){
  const favctx = useContext(FavoriteContext);
  const loadedMeetup  = favctx.favorite;
  return (
  <div className={styles.FavouriteMeetup}>
  {
    loadedMeetup.map((meetup)=>(
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
		)
  }
  </div>
  );
}


export default FavouriteMeetup;
