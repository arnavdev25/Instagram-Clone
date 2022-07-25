import React, { useEffect, useState } from 'react'
import Footer from '../Components/Home/Footer'
import style from "../Styles/Login.module.css"
const Login = () => {
  const [FormData, setFormData] = useState({});
  const [btn,setBtn]=useState(true)
  const [types,setTypes]=useState("password")
  const [clickInp, setclickInp] = useState(false)
  const [pass,setPass]=useState(false)
  function handleBtn(){
      
        if(clickInp && pass){
          setBtn(false)
        }
        else{
          setBtn(true)
        }
        // console.log(pass)

  }
  useEffect(()=>{
    handleBtn()
  },[clickInp,pass])
  const handleChange = (e) => {
    const inputName = e.target.name;
      setFormData({
        ...FormData,
        [inputName]: e.target.value,
      });

      
      if(e.target.value===''){
        setclickInp(false)
     
    //   alert("hhh")
      }else{
          setclickInp(true)
        
      }
      if(inputName==="password"){
        if(e.target.value.length>=8){
          setPass(true)
        }
        // console.log(pass)
      }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (FormData) {
         console.log(FormData)
 
    } else {
      alert("Fill the details Correctly");
    }
  };
  const rightLogoOnClick=()=>{
    setTypes(types==="password" ? "text" : "password")
}
  return (
   <div>
     <div className={style.home}>
    <div className={style.box} style={{marginTop:"30px",width:"100%"}}>
        <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="instagram"/>
         <form onSubmit={handleSubmit}>
        
         <div className={style.label_float}>
          <input type="text" name="email"
       onChange={handleChange}
        placeholder=' '
           required />
            <label>Username or Mobile Number or Email</label>
            </div> 
            <br/>
            <div className={style.label_float}>     
                    <input name="password" placeholder=' '
                        onChange={handleChange}
                        required 
                        type={types}
                        />
                         <label>Password</label>
                         </div>
              <p onClick={rightLogoOnClick} className={style.show}
                        style={clickInp ? {display:'block'} : {display:'none'}}>{types==="password"? "Show" : "Hide"} </p>
                                    
            <input type="submit" disabled={btn} value="Login" />
         </form>
         <div className={style.or}>
           <div ></div>
           <div >or</div>
           <div ></div></div>
         <div style={{display:'flex',alignItems:"center",justifyContent:"center",fontSize:"13px",gap:"10px"}}>
            <img height="14px" width="14px" src="https://www.bing.com/th?id=OIP.aYVbqEFb2M-SWsBh_LafIQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2" alt="facebook"/>
            <span style={{color: "#385185",cursor:"pointer"}}>Login with Facebook</span>
         </div>
         <br/>
         <a style={{color:"rgba(var(--fe0,0,55,107),1)",fontSize:"13px"}} href="#" >Forgot Password?</a>
    </div>
    <div className={style.box} style={{fontSize:"13px",width:"100%"}}>
        <p style={{color: "rgba(var(--i1d,38,38,38),1)"}}>Don't have an account? <a style={{color:"rgba(var(--d69,0,149,246),1)"}} href="/signup">Sign up</a> </p>
    </div>
    <p style={{color: "rgba(var(--i1d,38,38,38),1)",marginBottom:"15px",fontSize:"13px"}}>Get the app</p>
    
    <div className={style.app}>
        <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt="playstore"/>
        <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt="apple"/>
    </div>
  
    </div>
    <br/>
    <Footer/>
    </div>
  )
}

export default Login
