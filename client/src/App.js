import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Home/Footer";
import { SingleUser } from "./Pages/Profile";
import FeedPage from "./Pages/Feedpage";
import Login from "./Pages/Login";
import Otp from "./Pages/Signup/OTP";
import Signup from "./Pages/Signup/Signup1";
import Signup2 from "./Pages/Signup/Signup2";
import Welcome from "./Pages/Welcome";
import {Reels} from "./Components/Profile/Reels"
import {Videos} from "./Components/Profile/Videos"
import {Tagged} from "./Components/Profile/Tagged"
import { Posts } from "./Components/Profile/Posts";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login/>}/>
         <Route path="/signup" element={<Signup/>}/>
         <Route path="/signup/details" element={<Signup2/>}/>
         <Route path="/signup/otp" element={<Otp/>}/>
         <Route path="/feed" element={<FeedPage/>}/> 
         <Route path="/profile" element={<SingleUser/>}/>
         <Route path="/profile/reels" element={<Reels/>}/>
         <Route path="/profile/videos" element={<Videos/>}/>
         <Route path="/profile/tagged" element={<Tagged/>}/>
         <Route path="/profile/posts" element={<Posts/>}/>

      </Routes>
     
      <Footer />
    </div>
  );
}

export default App;
