import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './redux/countslice'

export default function Counter() {
 const dispatch=useDispatch()
 const count = useSelector((state)=>state.counterReduce.count)
 //state to store user input value
 const [amount,setamount]=useState("")
 //function for validation and dispatch
 const handleIncrement=()=>{
  if(amount===""){
    alert("Please Fill The Form Completely")
  }else{
    dispatch(incrementByAmount(Number(amount)))
   
  }
 }
 const borderColor = count > 0 ? "green" : count < 0 ? "red" : "white";
  return (
    
   <div>
       <div className='d-flex align-items-center justify-content-center mt-5'style={{width:"100%"}}>
            <div className='counterframe d-flex align-items-center justify-content-center' style={{ border: `2px solid ${borderColor}` }}>
                <div className='result' style={{color:`${borderColor}`}}>{count}</div>
             </div>
       </div>
         <div className='mt-5 d-flex align-items-center justify-content-center'>
            <div className="btn btn-warning me-2" onClick={()=>dispatch(decrement())}><i className="fa-solid fa-minus  "></i></div>
            <div className="btn btn-danger me-2 " onClick={()=>{dispatch(reset());setamount("");}}>Reset</div>
            {/* increment */}
            <div className="btn btn-success" onClick={()=>{dispatch(increment());}}><i className="fa-solid fa-plus "></i></div>
         </div>
         <div className='d-flex justify-content-center mt-3'>
           <input type="text" className='form-control me-1'placeholder='Increment Amount'  style={{width:'180px'}}
            onChange={e=>setamount(e.target.value)} value={amount}/>

           <button className='btn btn-primary' onClick={handleIncrement}><i className='fa-solid fa-plus'></i></button>
         </div>
   </div>
  )
}
