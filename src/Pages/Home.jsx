import React from 'react'
import Header from '../Components/Header'
import { Button } from 'react-bootstrap'
import { Link, Navigate, useNavigate } from 'react-router-dom'

function Home() {

    const navigate = useNavigate();
    const handleRegister =()=>{
       
        navigate('/register')
   

 };

  return (
    <div>
        <Header bgColor='rgb(71, 71, 196)' />
        <div className='' >
            <img className='position-absolute w-100' src="https://th.bing.com/th/id/OIP.e-B1OdRaPpZdzNfsZiyxKwHaEK?w=1920&h=1080&rs=1&pid=ImgDetMain" alt=""  style={{height:'85vh'}} />
            <div  className='position-absolute text-light text-center' style={{marginTop:'10%',fontSize:'3rem'}}>
                <div >Welcome to <span className='fw-bolder'> LakeHead University!</span></div>
                <div className='fs-1'>New Student? Click Here</div>
                <Button onClick={handleRegister}> Register</Button>
            </div>
        </div>
        
        
    </div>
  )
}

export default Home