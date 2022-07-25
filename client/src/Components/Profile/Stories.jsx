import React from 'react'
import styled from 'styled-components'

const Storydiv = styled.div`
margin:1.25rem;
display :grid;
grid-template-columns:repeat(4,6.875rem);
grid-template-rows: auto;

.upperborder{
border:0.0625rem solid gray;
border-radius: 50%;
margin:0.3125rem;
}

.imgtag{
 width:5.4375rem;
 height:5.4375rem; 
 border:0.0625rem solid gray ;
 margin:0.125rem;
 border-radius: 50%;
}
@media (max-width: 798px) {
  margin:1.25rem;
display :grid;
grid-template-columns:repeat(4,10.74vw);
grid-template-rows: auto;

.upperborder{
border:0.0625rem solid gray;
border-radius: 50%;
margin:0.3125rem;
}

.imgtag{
 width:8.496vw;
 height:13.161vh; 
 border:0.0625rem solid gray ;
 margin:0.125rem;
 border-radius: 50%;
}
h4{
  font-size: 10px;
}

}
@media all and (min-width:50px) and (max-width:600px) {
margin:1.25rem;
display :grid;
grid-template-columns:repeat(4,12.74vw);
grid-template-rows: auto;

.upperborder{
/* border:0.0625rem solid gray; */
border:none;
border-radius: 50%;
/* margin:0.3125rem; */
}

.imgtag{
 width:6.496vw;
 height:8.161vh; 
 /* border:0.0625rem solid gray ; */
 /* margin:0.125rem; */
 border-radius: 50%;
}
h4{
  font-size:10px;
}

}

`



export const Stories = ({Stories}) => {

  return (
    <Storydiv>
     {Stories.map((el)=>{
        return <div key={el.id} > <div className='upperborder'><img className='imgtag' src={el.imgurl} alt ='' /></div>
        <h4>{el.plateform}</h4></div>
     })}
    </Storydiv>
  )
}
