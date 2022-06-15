import React from 'react';
import {useNavigate} from 'react-router-dom';
import Alert from '@mui/material/Alert';
import axios from 'axios';
import NewMeetupForm from '../NewMeetupForm/NewMeetupForm';
import styles from './NewMeetup.module.css';

function NewMeetup(){
  const navigate = useNavigate();
  function addMeetupHandler(meetup){
    axios({
      url: "https://meetup-react-acb2e-default-rtdb.firebaseio.com/meetups.json",
      method: "POST",
      data:meetup,
      headers:{
        'Content-Type':'application/json'
      }
    }) 
    // Handle the response from backend here
    .then((res) => {
      navigate("/", { replace: true });
     })

    // Catch errors if any
    .catch((err) => { });
  }
  return(
  <div className={styles.NewMeetup}>
    <NewMeetupForm onAddMeetUp = {addMeetupHandler}/>
  </div>
  )
}

export default NewMeetup;
