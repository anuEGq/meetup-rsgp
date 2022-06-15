import {React, useRef} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './NewMeetupForm.module.css';
import './StyleNewMeetUpForm.css';

function NewMeetupForm(props){
const myFormRef = useRef();
const titleInputRef = useRef();
const dateRef = useRef();
const imageRef = useRef();
const descRef = useRef();
const isFavRef = useRef();
function onSubmitHandler(event){
 event.preventDefault();

 const title = titleInputRef.current.value;
 const date = dateRef.current.value;
 const image = imageRef.current.value;
 const desc = descRef.current.value;
 const isFav = isFavRef.current.checked;

 const meetup = {
   titte : title,
   date : date,
   image : image,
   desc : desc,
   isFav : isFav
 }
props.onAddMeetUp(meetup);
toast.success('Successfully Added', {
  position: "bottom-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  });
//  console.log(meetup);
myFormRef.current.reset();
}

return(
  <div className={styles.NewMeetupForm}>
<ToastContainer/>
<div className="container">
  <form ref={myFormRef} onSubmit={onSubmitHandler}>
    <h1>New Meetup</h1>
    <div className="form-group">
      <input type="text" required="required" ref={titleInputRef}/>
      <label htmlFor="input" className="control-label">Title</label><i className="bar"></i>
    </div>
    <div className="form-group">
      <input type="date" required="required" ref={dateRef}/>
      <label htmlFor="input" className="control-label">Date</label><i className="bar"></i>
    </div>
    <div className="form-group">
      <input type="text" required="required" ref={imageRef}/>
      <label htmlFor="input" className="control-label">Image</label><i className="bar"></i>
    </div>
    <div className="form-group">
      <textarea required="required" ref={descRef}></textarea>
      <label htmlFor="textarea" className="control-label">Description</label><i className="bar"></i>
    </div>
    <div className="checkbox">
      <label>
        <input value='off' type="checkbox" ref={isFavRef}/><i className="helper"></i>Add to favourite
      </label>
    </div>
    <div className="button-container">
    <button type="submit" className="button"><span>Submit</span></button>
  </div>
  </form>
</div>
  </div>
)
}

export default NewMeetupForm;
