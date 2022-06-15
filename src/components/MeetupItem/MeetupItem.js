import {React,useState, useContext} from 'react';
import axios from 'axios';
import style from './MeetupItem.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Menu,Card, MenuItem, CardHeader, CardMedia, CardContent,CardActions, Avatar, IconButton,Typography} from '@mui/material';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteContext from '../../store/favorite-context';

const ITEM_HEIGHT = 48;
export default function MeetupItem(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    axios.delete(`https://meetup-react-acb2e-default-rtdb.firebaseio.com/meetups/${props.id}.json`)
    .then((res)=>{
      toast.error('Deleted', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        });
    });
    setAnchorEl(null);
  };

  const context = useContext(FavoriteContext);
  const isFavorite = context.isFavorite(props.id);
  function toggleFavoriteHandler(){
    if(isFavorite){
      const isFav = {isFav : false}
      axios.patch(`https://meetup-react-acb2e-default-rtdb.firebaseio.com/meetups/${props.id}.json`,isFav)
      .then((res)=>{
        toast.error('Removed from favorite', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          });
      });
      context.removeFavorite(props.id);
    }
    else{
      const isFav = {isFav : true}
      axios.patch(`https://meetup-react-acb2e-default-rtdb.firebaseio.com/meetups/${props.id}.json`,isFav)
      .then((res)=>{
        toast.info('Added to favorite', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          });
      });
      context.addFavorite({
        id:props.id,
        title:props.title,
        date:props.date,
        desc:props.desc,
        isFav:props.isFav,
        img:props.img
      });
    }
  }
  return (
   <div className={style.meetup_body}>
     <ToastContainer />
      <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {props.abbr}
          </Avatar>
        }
        action={
          <>
          <IconButton aria-label="more" id="long-button" aria-controls={open ? 'long-menu' : undefined} aria-expanded={open ? 'true' : undefined}
           aria-haspopup="true" onClick={handleClick}> <MoreVertIcon /> </IconButton>
          <Menu id="long-menu" MenuListProps={{'aria-labelledby': 'long-button',}} anchorEl={anchorEl}
           open={open} onClose={handleClose}
           PaperProps={{
             style: {
               maxHeight: ITEM_HEIGHT * 4.5,
               width: '20ch',
             },
           }}>
          <MenuItem key='delete' onClick={handleClose}>
               Delete
          </MenuItem>
         </Menu>
          </>
        }
        title={props.title}
        subheader={props.date}
      />
      <CardMedia
        component="img"
        height="194"
        image={props.img}
        alt={props.title}
      />
      <CardContent>
        <Typography sx={{
            display: '-webkit-box',
            overflow: 'hidden',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 3,
          }} 
          variant="body2" color="text.secondary">
         {props.desc}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={toggleFavoriteHandler} aria-label="add to favorites">
         {isFavorite ? <FavoriteIcon color='error'/> : <FavoriteIcon/>} 
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
   </div>
  );
}
