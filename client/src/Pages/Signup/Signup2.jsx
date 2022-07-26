import React, { useState } from 'react'
import style from '../../Styles/Signup.module.css'
import dateOfBirth from '../../Images/dateOfBirth.png'

import apple_store from '../../Images/apple_store.png'
import google_play from '../../Images/google_play.png'

const Signup2 = () => {
const [dates, setdates] = useState({
  month: 'January', date: '1', year: '2022'
})

const handleChange=(e)=>{
  let inputName=e.target.name;

  setdates({
    ...dates,
    [inputName]: e.target.value
  })
}

const handleSubmit=(e)=>{
e.preventDefault();
console.log(dates)
}

  return (
    <form onSubmit={handleSubmit}>

    <div className={`${style.sign_main} ${style.signup}`}>
            <div className={style.date_of_birth} >
      <img src={dateOfBirth} alt="img" className={style.img_date}/>
<h4>Add your date of birth</h4>
<p>This won't be part of your public profile.</p>
<span className={style.why_need}>Why do I need to provide my date of birth?</span>
      
</div>
<div className={style.select_div}>
  <select name="month" id="month" onChange={handleChange}>
    <option value="January">January</option>
    <option value="February">February</option>
    <option value="March">March</option>
    <option value="April">April</option>
    <option value="May">May</option>
    <option value="June">June</option>
    <option value="July">July</option>
    <option value="August">August</option>
    <option value="September">September</option>
    <option value="October">October</option>
    <option value="November">November</option>
    <option value="December">December</option>
  </select>


  <select name="date" id="date" onChange={handleChange}>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
    <option value="11">11</option>
    <option value="12">12</option>
    <option value="13">13</option>
    <option value="14">14</option>
    <option value="15">15</option>
    <option value="16">16</option>
    <option value="17">17</option>
    <option value="18">18</option>
    <option value="19">19</option>
    <option value="20">20</option>
    <option value="21">21</option>
    <option value="22">22</option>
    <option value="23">23</option>
    <option value="24">24</option>
    <option value="25">25</option>
    <option value="26">26</option>
    <option value="27">27</option>
    <option value="28">28</option>
    <option value="29">29</option>
    <option value="30">30</option>
  </select>

  <select name="year" id="year" onChange={handleChange}>
    <option value="2022">2022</option>
    <option value="2021">2021</option>
    <option value="2020">2020</option>
    <option value="2019">2019</option>
    <option value="2018">2018</option>
    <option value="2017">2017</option>
    <option value="2016">2016</option>
    <option value="2015">2015</option>
    <option value="2014">2014</option>
    <option value="2013">2013</option>
    <option value="2012">2012</option>
    <option value="2011">2011</option>
    <option value="2010">2010</option>
    <option value="2009">2009</option>
    <option value="2008">2008</option>
    <option value="2007">2007</option>
    <option value="2006">2006</option>
    <option value="2005">2005</option>
    <option value="2004">2004</option>
    <option value="2003">2003</option>
    <option value="2002">2002</option>
    <option value="2001">2001</option>
    <option value="2000">2000</option>
    <option value="1999">1999</option>
    <option value="1998">1998</option>
    <option value="1997">1997</option>
    <option value="1996">1996</option>
    <option value="1995">1995</option>
    <option value="1994">1994</option>
    <option value="1992">1992</option>
    <option value="1991">1991</option>
    <option value="1990">1990</option>
    <option value="1989">1989</option>
    <option value="1988">1988</option>
    <option value="1987">1987</option>
    <option value="1986">1986</option>
    <option value="1985">1985</option>
    <option value="1984">1984</option>
    <option value="1983">1983</option>
    <option value="1982">1982</option>
    <option value="1981">1981</option>
    <option value="1980">1980</option>
  </select>
</div>


<p className={style.date_para}>You need to enter the date you were born on

  <br />
  <br />
Use your own date of birth, even if this account is for a business, pet or something else</p>

<button className={style.login_fb + " " + style.next_btn} type='submit'>Next</button>

<h4 className={style.go_back}>Go Back</h4>



      </div>



<div className={style.have_ac}>
<p>Have an account? <span >Log in</span> </p>
</div>

<p>Get the app.</p>
<div className={style.getApp}>
<img src={apple_store} alt="apple store" />
<img src={google_play} alt="google play" />
</div>


</form>
  )
}

export default Signup2