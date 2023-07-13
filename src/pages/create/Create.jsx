import React from 'react'
import Create from '../create/Create.scss'
import Nothing from '../../assets/images/Nothing.svg';
import { Link, useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate()
  return (
    
   
    
  <div className="create">
     <div className="create__container">
     <div className="middle-box">
        <h4 className='middle-box__text'>Вы пока не создали ни одного товара</h4>
        <img src={Nothing} alt="" style={{width: "500px"}}/>
        <div className="middle-box__btn">
       <button className='add-button' onClick={()=>navigate("/add")}>Add Product</button> 

        </div>
      </div>
      
     </div>
  </div>
    
  
     
    

    )
  }
  
  export default Add