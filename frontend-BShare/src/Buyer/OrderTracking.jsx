import React from 'react';
import  Navbar  from '../components/Navbar';
import { Button, Stepper, Step, CardHeader, Typography } from '@material-tailwind/react';
import { CiEdit } from "react-icons/ci";
import { Link } from 'react-router-dom';


const OrderTracking = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  // Replace this with your actual order tracking data

  return (
  <>
 <div>
  <Navbar/>
 </div>
 <div className='container border border-spacing-2 mt-24 bg-[#F2F1F1] '>
  <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 shadow my-2 xl:grid-cols-3 2xl:grid-cols-3'>
    <div className='bg-[white] p-3 leading-6 shadow'>
      <h3 className='font-semibold'>Delivery Address</h3>
      <p>Sahil Rangari</p>
      <p>Plot no. 201, Hingna road , Nagpur</p>
      <p>Maharashtra - 440016</p>
      <p>Contact No. : 9030520480</p>
     <Button type='button'  className='rounded-sm flex gap-1 items-center capitalize py-2 px-3 bg-white border border-spacing-1 text-black hover:border-spacing-0'><CiEdit className='text-xl'/> Edit Address</Button>
    </div>

    {/* card 2nd */}
    <div className='bg-[white] p-3 leading-7 shadow'>
      <h3 className='font-semibold'>Contact Us</h3>
      <p>Email : <span>booksshare@gmail.com</span></p>
      <p>Call : <span> 0552-0505-8221</span></p>
      <p>Maharashtra - 440016</p>
      <Link className='text-[blue] text-sm'> Need Help ?</Link>
    </div>

    {/* card 3rd  */}
    <div className='bg-[white] p-3 leading-8 shadow'>
      <div>
        <h3 className='font-semibold'>Price Details</h3>
       <table>
        <tr>
          <td>Items Price </td>
          <td>&emsp;₹637 <span>(3 items)</span></td>
        </tr>
        <tr>
          <td>Shipping</td>
          <td className='text-[green]'>&emsp;Free *</td>
        </tr>
        <tr>
          <td>Total Amount </td>
          <td>   &emsp;₹ 637/-</td>
        </tr>
       </table>
      </div>
    </div>

  </div>

  <div className='bg-white border-spacing-1'>
  <div className="w-full py-4 px-8">
      <CardHeader floated={false}  color='blue-gray' className="grid h-24  rounded-none m-0 place-items-center">
        <div className="w-full px-20 pt-4 pb-8">
          <Stepper
            activeStep={activeStep}
            lineClassName="bg-[green]"
            activeLineClassName="bg-black"
          >
            <Step
              className="h-4 w-4 !bg-[] text-[green]] cursor-pointer"
              activeClassName="ring-0 !bg-white text-white"
              completedClassName="!bg-white text-white"
              onClick={() => setActiveStep(0)}
            >
              <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                <Typography variant="h6" color="inherit">Order Placed</Typography>
              </div>
            </Step>
            <Step
              className="h-4 w-4 !bg-blue-gray-50 text-white/75 cursor-pointer"
              activeClassName="ring-0 !bg-white text-white"
              completedClassName="!bg-white text-white"
              onClick={() => setActiveStep(1)}
            >
              <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                <Typography variant="h6" color="inherit">Confirmed</Typography>
              </div>
            </Step>
            <Step
              className="h-4 w-4 !bg-blue-gray-50 text-white/75 cursor-pointer"
              activeClassName="ring-0 !bg-white text-white"
              completedClassName="!bg-white text-white"
              onClick={() => setActiveStep(2)}
            >
              <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                <Typography variant="h6" color="inherit">Ready to Ship</Typography>
              </div>
            </Step>
            <Step
              className="h-4 w-4 !bg-blue-gray-50 text-white/75 cursor-pointer"
              activeClassName="ring-0 !bg-white text-white"
              completedClassName="!bg-white text-white"
              onClick={() => setActiveStep(3)}
            >
              <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                <Typography variant="h6" color="inherit">In Transit</Typography>
              </div>
            </Step>
            <Step
              className="h-4 w-4 !bg-blue-gray-50 text-white/75 cursor-pointer"
              activeClassName="ring-0 !bg-white text-white"
              completedClassName="!bg-white text-white"
              onClick={() => setActiveStep(4)}
            >
              <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                <Typography variant="h6" color="inherit">Delivered</Typography>
              </div>
            </Step>
          </Stepper>
        </div>
      </CardHeader>
    </div>
  </div>

 </div>
  </>
  );
};

export default OrderTracking;
