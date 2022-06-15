import './App.css';
import {Route, Routes } from 'react-router-dom';
import AllMeetup from './components/AllMeetup/AllMeetup';
import NewMeetup from './components/NewMeetup/NewMeetup';
import FavouriteMeetup from './components/FavouriteMeetup/FavouriteMeetup';
import Navbar from './layout/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route index element={<AllMeetup />} />
          <Route path = 'favourite-meetup' element={<FavouriteMeetup />} />
          <Route path = 'new-meetup' element={<NewMeetup />} />
      </Routes>
    </div>
  );
}

export default App;
