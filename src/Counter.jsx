import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './redux/countslice'

export default function Counter() {
 const dispatch=useDispatch()
 const count = useSelector((state)=>state.counterReduce.count)
  return (
    
   <div>
       <div className='d-flex align-items-center justify-content-center mt-5'style={{width:"100%"}}>
            <div className='counterframe d-flex align-items-center justify-content-center' >
                <div className='result'>{count}</div>
             </div>
       </div>
         <div className='mt-5 d-flex align-items-center justify-content-center'>
            <div className="btn btn-warning me-2" onClick={()=>dispatch(decrement())}><i className="fa-solid fa-minus  "></i></div>
            <div className="btn btn-danger me-2 " onClick={()=>dispatch(reset())}>Reset</div>
            {/* increment */}
            <div className="btn btn-success" onClick={()=>dispatch(increment())}><i className="fa-solid fa-plus "></i></div>
         </div>
   </div>
  )
}
