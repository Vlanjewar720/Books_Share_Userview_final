import React from 'react'
import Count from './Counter';
import { BsCheckLg } from "react-icons/bs";
import {BsCurrencyRupee } from "react-icons/bs";
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom';
import { Radio } from '@material-tailwind/react';
function Cart() {

    function handalremove (){
      document.getElementById('box').hidden=true;
    }
    function handalremoves (){
      document.getElementById('boxx').hidden=true ;
    }
    function handalremovess (){
      document.getElementById('boxxx').hidden=true;
    }

  return (
    <>
      <Navbar/>
    <div className='mt-24'>
      

          <div className="container mt-5">
            <div className="row shadow p-3 bg-white rounded border">
                <div className="col-md-9 col-sm-12 ">
                  <p className=' mx-5 text-start font-semibold  '> Address </p>  
                  <p className=' mx-5 text-start lg:my-2'>Near Datta Mandir , Rajani Apartment, Nagpur MH Pin : 440022</p>

                </div>
                <div className="col-md-3 col-sm-12 justify-content-center d-flex items-center">
                  <input id="blue" type='radio' name="color" color="blue" defaultChecked className='mt-4 mx-3 ' />
                  <button type="button" className="btn btn-outline-secondary rounded px-5 mt-4 w-46 h-10  "> Edit </button>           
               </div>     
           </div>

           <div className="row shadow p-4 bg-white rounded border mt-5">
                <div className="col-md-9 col-sm-12 ">
                  <p className='d-flex mx-5 text-start text-sm-center '> Delivery Address </p>            
                </div>
                <div className="col-md-3 col-sm-12 justify-content-center d-flex ">
                  <Link to="/address" type="button" className="btn btn-outline-secondary rounded px-5 mt-1 "> +Add </Link>           
               </div>     
           </div>

            <div className="row shadow bg-white rounded border mt-5">
               <div className="col-12 "style={{backgroundColor:'#81A356'}}>
                 <p className='d-flex mx-5 my-auto p-2 text-start text-white'style={{Color:'#000000'}}> My Carts </p>         
               </div>
                    
           </div>
           <div className="row shadow bg-white rounded border mt-1 p-4" id='box'>
               <div className="col-md-3 col-sm-12 ">
                 <p className='d-flex my-auto p-2 justify-content-center'> 
                    <img src="./IMG1.jpg" alt="home" width="109" height="125" className='img-fluid' />
                 </p>         
               </div>
               <div className="col-md-6 col-sm-12 text-start">
                 <span> 
                    Ikigai: The Japanese secret to a long and happy life [Hardcover] García, Héctor and Miralles, Francesc  
                 </span>   <br /><br />

                 <div className='flex items-center'>
                  <p><BsCurrencyRupee/></p>
                  <p><b>212</b></p>
                 </div>

                 <div className='flex items-center text-[14px]' >
                <p className=''> <BsCurrencyRupee/></p>

                 <p><span><s>424</s></span>&nbsp;<span className='text-[12px] text-green-800'> 50% &nbsp; off</span></p>      
                 </div>
               </div> 
               <div className="col-md-2 col-sm-12 justify-content-end  ">
                <Count/>
                <center>

                  <button type="button" className="btn btn-outline-secondary rounded  mt-3 " onClick={handalremove}> Remove </button>           
                </center>
               </div> 
                    
           </div>
            
           <div className="row shadow bg-white rounded border p-4" id='boxx'>
               <div className="col-md-3 col-sm-12">
                 <p className='d-flex my-auto p-2 justify-content-center '> 
                    <img src="./IMG2.jpg" alt="home" width="109" height="125" className='img-fluid' />
                 </p>         
               </div>
               <div className="col-md-6 col-sm-12 text-start">
                 <span> 
                 SSC General studies Theory Book Based on Latest TCS Pattern Chapter wise English Medium
                 </span>   <br /><br />
                 <div className='flex items-center'>
                  <p><BsCurrencyRupee/></p>
                  <p><b>310</b></p>
                 </div>

                 <div className='flex items-center text-[14px]' >
                <p className=''> <BsCurrencyRupee/></p>

                 <p><span><s>620</s></span>&nbsp;<span className='text-[12px] text-green-800'> 50% &nbsp; off</span></p>      
                 </div>    
               </div> 
               <div className="col-md-2 col-sm-12 justify-content-end ">
               <Count/>
               <center>

                  <button type="button" className="btn btn-outline-secondary rounded  mt-3 mb-2"onClick={handalremoves}> Remove </button>           
               </center>
               </div> 
                    
           </div>

           <div className="row shadow bg-white rounded border p-4" id='boxxx'>
               <div className="col-md-3 col-sm-12">
                 <p className='d-flex my-auto p-2 justify-content-center '> 
                    <img src="./IMG3.jpg" alt="home" width="109" height="125" className='img-fluid' />
                 </p>         
               </div>
               <div className="col-md-6 col-sm-12 text-start">
                 <span> 
                 Word Power root Words
                 </span>   <br /><br />
                 <div className='flex items-center'>
                  <p><BsCurrencyRupee/></p>
                  <p><b>95</b></p>
                 </div>

                 <div className='flex items-center text-[14px]' >
                <p className=''> <BsCurrencyRupee/></p>

                 <p><span><s>190</s></span>&nbsp;<span className='text-[12px] text-green-800'> 50% &nbsp; off</span></p>      
                 </div>    
               </div> 
               <div className="col-md-2 col-sm-12 justify-content-end  ">
               <Count/>
                      <center>

                  <button type="button" className="btn btn-outline-secondary rounded  mt-3 mb-2 " onClick={handalremovess}> Remove </button>           
                      </center>
               </div> 
                    
           </div>

           <div className="row bg-white rounded mt-4 mb-4 ">
           <div className="col-sm-12 d-grid gap-2 d-sm-flex justify-content-sm-end ">
            <Link to='/summary'>
              <button type="button" className="btn rounded px-5 text-white" style={{backgroundColor:'#81A356'}}> Continue </button>           
            </Link>
               </div> 
                    
           </div>





        </div>
         
 </div>
 </>
  )
}

export default Cart