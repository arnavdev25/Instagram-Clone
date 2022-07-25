import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Login from "./Pages/Login";
import Otp from "./Pages/Signup/OTP";
import Signup from "./Pages/Signup/Signup1";
import Signup2 from "./Pages/Signup/Signup2";
import Welcome from "./Pages/Welcome";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login/>}/>
         <Route path="/signup" element={<Signup/>}/>
         <Route path="/signup/details" element={<Signup2/>}/>
         <Route path="/signup/otp" element={<Otp/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
