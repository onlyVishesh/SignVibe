import './App.css'
import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Convert from './Pages/Convert';
import Home from './Pages/Home';
import LearnSign from './Pages/LearnSign';
import Video from './Pages/Video';
import Navbar from './Components/Navbar';
import CreateVideo from './Pages/CreateVideo';
import Footer from './Components/Footer';
import Videos from './Pages/Videos';
import Feedback from './Pages/Feedback';

function App() {
  return(
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/convert' element={<Convert />} />
          <Route exact path='/learn-sign' element={<LearnSign />} />
          <Route exact path='/all-videos' element={<Videos />} />
          <Route exact path='/video/:videoId' element={<Video />} />
          <Route exact path='/create-video' element={<CreateVideo />} />
          <Route exact path='/feedback' element={<Feedback />} />
          <Route exact path='*' element={<Home/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;