import React, { useEffect, useState } from "react";
import otp from "../../Images/otp.png";
import apple_store from "../../Images/apple_store.png";
import google_play from "../../Images/google_play.png";
import style from "../../Styles/Signup.module.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom'

const Otp = () => {
  const [otps, setOtps] = useState("");
  const [disable, setDisable] = useState(true);
  const navigate=useNavigate()
  const [d,setD]=useState(0)
  const email = JSON.parse(localStorage.getItem("User")).email;
  const handleChange = (e) => {
    setOtps(e.target.value)
     setDisable(false)
    
  };
useEffect(()=>{
  axios.post("http://localhost:8080/otp/send",{email:email})
  .then(({data})=>setD(data))
  .catch((e)=>console.log(e))
},[])
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(otps)
    console.log(d)
    console.log(otps.length)
    if(otps.length===6){
      if(d==otps){
        navigate("/feed")
      }
      else{
        alert("Incorrect OTP")
      }
    }
    else{
      alert("Please Fill Valid OTP")
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={`${style.sign_main} ${style.signup}`}>
        <div className={style.date_of_birth}>
          <img src={otp} alt="img" className={style.img_date} />
          <h4>Just one more step</h4>
          <p>Enter the 6-digit code we sent to:</p>
          <span>
            {/* data from server */}
            {email}
          </span>
        </div>
        <input
          type="number"
          name="otp"
          placeholder="######"
          required
          onChange={handleChange}
          className={style.otp_input}
          value={otps}
          maxLength="6"
        />

        <button
          className={
            style.login_fb + " " + style.signup_btn + " " + style.confirm
          }
          type="submit"
          disabled={disable}
        >
          Confirm
        </button>

        <div className={style.change_req}>
          <span>Change Number</span>
          <hr />
          <span>Request new Code</span>
        </div>
      </div>
      <div className={style.have_ac}>
        <p>
          Have an account? <span>Log in</span>{" "}
        </p>
      </div>

      <p>Get the app.</p>
      <div className={style.getApp}>
        <img src={apple_store} alt="apple store" />
        <img src={google_play} alt="google play" />
      </div>
    </form>
  );
};

export default Otp;
