import axios from 'axios';
import  {React, useState, useEffect} from 'react';
import MeetupItem from '../MeetupItem/MeetupItem';
import {Box, CircularProgress} from '@mui/material';
import './AllMeetup.css';

export default function AllMeetup() {

  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetup, setLoadedMeetup] = useState([]);

  useEffect(()=>{
	axios.get('https://meetup-react-acb2e-default-rtdb.firebaseio.com/meetups.json')
	 .then(res => {
		 const meetups = [];
		 for(const key in res.data){
			const meetup = {
				id : key,
				...res.data[key]
			};
			meetups.push(meetup);
		 }
		 setIsLoading(false);
		 setLoadedMeetup(meetups);
	 })
  },[])
 
  if(isLoading){
	return (
		<Box sx={{ display: 'flex' }}>
      		<CircularProgress />
    	</Box>
	);
  }
  return (
   <div className="meetup_body">
     {
        loadedMeetup.map((meetup)=>(
			<MeetupItem
				key = {meetup.id}
				id = {meetup.id}
				title = {meetup.titte}
				date = {meetup.date}
				img = {meetup.image}
				desc = {meetup.desc}
				isFav ={meetup.isFav}
			/>
        )
		)
     }
   </div>
  );
}
