import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";
  import CountButton from './Components/CountButton.jsx';
  // import Timer from './Components/Timer';
  import ToggleButton from './Components/ToggleButton';
  import ArrayOfObject from './Components/ArrayOfObject';
  import NavBar from './Components/Navbar';
import TimerClass from './Components/TimerClass.jsx';

 
const Routers = () => {
    return ( 
        <div className="container">
        <Router>
        <NavBar/>
          <Routes>
            <Route path="/" element={<Navigate replace to="/count" />} />
            <Route path="/count" element={<CountButton />} />
            {/* <Route path="/timer" element={<Timer />} /> */}
            <Route path="/timer" element={<TimerClass/>} />
            <Route path="/togglebg" element={<ToggleButton />} />
            <Route path="/arraylist" element={<ArrayOfObject />} />
          </Routes>
        </Router>
         
       </div>
     );
}
 
export default Routers;