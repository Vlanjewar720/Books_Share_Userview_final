import React, { useState, Fragment } from "react";
import { BsCurrencyRupee } from "react-icons/bs";
import Navbar from "../components/Navbar";
import {
  Radio ,
  Input,
  Typography,
  Button,
  AccordionHeader,
  Accordion,
  AccordionBody,
  Card
} from "@material-tailwind/react";
import { GoCreditCard } from "react-icons/go";
import { Link } from "react-router-dom";



function Cart() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  function handalremove() {
    document.getElementById("box").hidden = true;
    document.getElementById("text1").hidden = true;
  }
  function handalremoves() {
    document.getElementById("boxx").hidden = true;
    document.getElementById("text2").hidden = true;
  }
  function handalremovess() {
    document.getElementById("boxxx").hidden = true;
    document.getElementById("text3").hidden = true;
  }

  return (
    <>
      <div>
        <Accordion open={open === 1}>
          <Navbar />
          <div className="mt-24">
            <div className="container ">
              <AccordionHeader onClick={() => handleOpen(1)}>
                <div className="row m-1 w-full shadow bg-white rounded border ">
                  <div
                    className="col-12 "
                    style={{ backgroundColor: "#81A356" }}
                  >
                    <p
                      className="d-flex mx-5 my-auto  p-2 text-start text-white"
                      style={{ Color: "#000000" }}
                    >
                      {" "}
                      Order Summary{" "}
                    </p>
                  </div>
                </div>
              </AccordionHeader>

              <AccordionBody>
                <div className="row m-1 shadow bg-white rounded border">
                  <div className="col-9 flex  items-center bg-[white] h-20">
                    <p className="d-flex   text-[23px] ps-4 text-start text-black ">
                      {" "}
                      Product's
                    </p>
                  </div>
                  <div className="col-3 flex -ms-4 items-center">
                    <p className="pe-6 ">
                      <span className="px-3 lg:text-[18px] xl:text-[18px] 2xl:text-[18px] text-[0px]">
                        Qty
                      </span>
                      <span className="px-3 lg:text-[18px] xl:text-[18px] 2xl:text-[18px] text-[0px]">
                        Each
                      </span>
                      <span className="px-3 lg:text-[18px] xl:text-[18px] 2xl:text-[18px] text-[0px]">
                        Total
                      </span>
                    </p>
                  </div>
                </div>

                <div
                  className="row shadow m-1 bg-white rounded border mt-1 p-4"
                  id="box"
                >
                  <div className="col-md-3 col-sm-12 ">
                    <p className="d-flex items-center my-auto p-2 justify-content-center">
                      <span className="pe-10 ">1.</span>
                      <img
                        src="./IMG1.jpg"
                        alt="home"
                        width="109"
                        height="125"
                        className="img-fluid"
                      />
                    </p>
                  </div>
                  <div className="col-md-6 col-sm-12 text-start">
                    <span>
                      Ikigai: The Japanese secret to a long and happy life
                      [Hardcover] García, Héctor and Miralles, Francesc
                    </span>{" "}
                    <br />
                    <br />
                    <div className="flex items-center">
                      <p>
                        <BsCurrencyRupee />
                      </p>
                      <p>
                        <b>212</b>
                      </p>
                    </div>
                    <div className="flex items-center text-[14px]">
                      <p className="">
                        {" "}
                        <BsCurrencyRupee />
                      </p>

                      <p>
                        <span>
                          <s>424</s>
                        </span>
                        &nbsp;
                        <span className="text-[12px] text-green-800">
                          {" "}
                          50% &nbsp; off
                        </span>
                        <button
                          type="button"
                          className="btn btn-outline-secondary rounded hover:bg-green-700 text-[10px] mx-2 "
                          onClick={handalremove}
                        >
                          {" "}
                          Remove{" "}
                        </button>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-12 justify-content-end  ">
                    <p className="pe-6 ">
                      <span className="px-3 lg:text-[18px] xl:text-[18px] 2xl:text-[18px] text-[0px]">
                        1
                      </span>
                      <span className="px-3 lg:text-[18px] xl:text-[18px] 2xl:text-[18px] text-[0px]">
                        ₹212
                      </span>
                      <span className="px-3 lg:text-[18px] xl:text-[18px] 2xl:text-[18px] text-[0px]">
                        ₹212
                      </span>
                    </p>
                  </div>
                </div>

                <div
                  className="row m-1 shadow bg-white rounded border p-4"
                  id="boxx"
                >
                  <div className="col-md-3 col-sm-12">
                    <p className="d-flex items-center my-auto p-2 justify-content-center ">
                      <span className="pe-10">2.</span>
                      <img
                        src="./IMG2.jpg"
                        alt="home"
                        width="109"
                        height="125"
                        className="img-fluid"
                      />
                    </p>
                  </div>
                  <div className="col-md-6 col-sm-12 text-start">
                    <span>
                      SSC General studies Theory Book Based on Latest TCS
                      Pattern Chapter wise English Medium
                    </span>{" "}
                    <br />
                    <br />
                    <div className="flex items-center">
                      <p>
                        <BsCurrencyRupee />
                      </p>
                      <p>
                        <b>310</b>
                      </p>
                    </div>
                    <div className="flex items-center text-[14px]">
                      <p className="">
                        {" "}
                        <BsCurrencyRupee />
                      </p>

                      <p>
                        <span>
                          <s>620</s>
                        </span>
                        &nbsp;
                        <span className="text-[12px] text-green-800">
                          {" "}
                          50% &nbsp; off
                        </span>
                        <button
                          type="button"
                          className="btn btn-outline-secondary hover:bg-green-700 rounded text-[10px] mx-2 "
                          onClick={handalremoves}
                        >
                          {" "}
                          Remove{" "}
                        </button>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-12 justify-content-end ">
                    <p className="pe-6 ">
                      <span className="px-3 lg:text-[18px] xl:text-[18px] 2xl:text-[18px] text-[0px]">
                        1
                      </span>
                      <span className="px-3 lg:text-[18px] xl:text-[18px] 2xl:text-[18px] text-[0px]">
                        ₹200
                      </span>
                      <span className="px-3 lg:text-[18px] xl:text-[18px] 2xl:text-[18px] text-[0px]">
                        ₹200
                      </span>
                    </p>
                  </div>
                </div>

                <div
                  className="row m-1 shadow bg-white rounded border p-4"
                  id="boxxx"
                >
                  <div className="col-md-3 col-sm-12">
                    <p className="d-flex items-center my-auto p-2 justify-content-center ">
                      <span className="pe-10">3.</span>
                      <img
                        src="./IMG3.jpg"
                        alt="home"
                        width="109"
                        height="125"
                        className="img-fluid"
                      />
                    </p>
                  </div>
                  <div className="col-md-6 col-sm-12 text-start">
                    <span>Word Power root Words</span> <br />
                    <br />
                    <div className="flex items-center">
                      <p>
                        <BsCurrencyRupee />
                      </p>
                      <p>
                        <b>95</b>
                      </p>
                    </div>
                    <div className="flex items-center text-[14px]">
                      <p className="">
                        {" "}
                        <BsCurrencyRupee />
                      </p>

                      <p>
                        <span>
                          <s>190</s>
                        </span>
                        &nbsp;
                        <span className="text-[12px] text-green-800">
                          {" "}
                          50% &nbsp; off
                        </span>
                        <button
                          type="button"
                          className="btn btn-outline-secondary hover:bg-green-700 rounded text-[10px] mx-2  "
                          onClick={handalremovess}
                        >
                          {" "}
                          Remove{" "}
                        </button>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-12 justify-content-end  ">
                    <p className="pe-6 ">
                      <span className="px-3 lg:text-[18px] xl:text-[18px] 2xl:text-[18px] text-[0px]">
                        1
                      </span>
                      <span className="px-3 lg:text-[18px] xl:text-[18px] 2xl:text-[18px] text-[0px]">
                        ₹225
                      </span>
                      <span className="px-3 lg:text-[18px] xl:text-[18px] 2xl:text-[18px] text-[0px]">
                        ₹225
                      </span>
                    </p>
                  </div>
                </div>

                {/* payment for books */}
                <div className="row m-1">
                  <div
                    className="lg:flex mb-3  flex-row-reverse justify-between p-2 shadow  bg-white rounded border "
                    id="boxxx"
                  >
                    <div className="border border-spacing-2 lg:ms-48 py-4 p-14 ">
                      <Typography>
                        <tr>
                          <td className="px-4">Order Subtotal</td>
                          <td className="px-4"> ₹637 /-</td>
                        </tr>
                        <tr>
                          <td className="px-4">Dicount</td>
                          <td className="px-4"> -(50%)</td>
                        </tr>
                        <tr>
                          <td className="px-4">Shipping Charges</td>
                          <td className="px-4">
                            <strike> ₹50</strike>{" "}
                            <span className="text-[green]">Free*</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4">Order Total</td>
                          <td className="px-4"> ₹637 /-</td>
                        </tr>
                      </Typography>
                    </div>
                    <div className="lg:ms-20 ms-[80px] flex py-4 items-center">
                      <Typography onClick={() => handleOpen(1)}>
                        <Button className="bg-[#388E3C] outline-1 rounded-[5px] text-[18px] px-12 py-3 hover:bg-green-500  capitalize  ">
                          Place Order
                        </Button>
                      </Typography>
                    </div>
                  </div>
                </div>
              </AccordionBody>
            </div>
          </div>
        </Accordion>
        <Accordion open={open === 2}>
      <div className="">
        <div className="container">
        <AccordionHeader onClick={() => handleOpen(2)}>
                <div className="grid m-1 w-full shadow bg-white rounded border ">
                  <div
                    className="grid-cols-1 "
                    style={{ backgroundColor: "#81A356" }}
                  >
                    <p
                      className="d-flex mx-5 my-auto  p-2 text-start text-white"
                      style={{ Color: "#000000" }}
                    >
                      {" "}
                     Checkout{" "}
                    </p>
                  </div>
                </div>
              </AccordionHeader>
              <AccordionBody>
                <div className='bg-[#EFE7E7] p-3 shadow-md'>
                <p className='grid w-full grid-cols-1 ps-4 text-[20px]'>Payment mode options</p>
                <div className='grid lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 h-full sm:grid-cols-1 gap-3 p-2'>
                  <div>
                    {/* card 1 */}
                    <Card className="my-2 ">
                      <div className='flex justify-start items-center shadow-md p-3 gap-2'>
                      
                        <input
                    id="push-nothing"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-900 text-green-900 focus:ring-green-900"
                  />                      
                    <GoCreditCard className="text-[30px] mx-3"/>
                      <p className="text-[20px]">Card</p>

                      </div>
                    </Card>
                    {/* card2 */}
                    <Card className="my-2">
                      <div className='flex justify-start items-center shadow-md px-3 gap-2'>
                      <input
                    id="push-nothing"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-900 text-green-900 focus:ring-green-900"
                  />    
                      
                    <img src="./Buyerimages/upiBuyer.png" alt="xzv" className="h-20 -ms-3" />
                      <p className="text-[20px]">UPI</p>

                      </div>
                    </Card>
                    {/* card 3 */}

                    <Card className="my-2">
                      <div className='flex justify-start items-center shadow-md px-3 gap-2'>
                   
                      
                      <input
                    id="push-nothing"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-900 text-green-900 focus:ring-green-900"
                  />    
                      
                    <img src="./Buyerimages/codBuyer.png"  className="h-14" alt="" />
                      <p className="text-[20px] ms-3">Cash On Delivery</p>

                      </div>
                    </Card>
                  </div>
                  <div className="shadow-md p-2 rounded-md leading-10 bg-[white]">
                    <h1 className="text-center md:text-[22px] text-[18px] my-2 mb-2">Order Summary</h1>
                    <p className="flex justify-around md:text-[22px] text-[18px] mt-2"><span>Item's price &emsp; :-</span><span>₹ 637 /-</span></p>
                    <p className="flex justify-around  border-b-8 pb-2 md:text-[22px] text-[18px]"><span>Delivery &emsp; :-</span><span>0.00 /-</span></p>
                 
                    <p className="flex justify-around md:text-[22px] pt-2  text-[18px]"><span>Order Total &emsp; :-</span><span>₹ 637/-</span></p>

                  </div>

                </div>
                
                </div>
                <div className="bg-[white] w-full justify-center p-4 flex">
                  <Link to='/orderplaced'>
                <Typography onClick={() => handleOpen(2)}>
                        <Button className="bg-[#388E3C] outline-1 rounded-[5px] text-[18px] px-12 py-3 hover:bg-green-500  capitalize  ">
                         Confirm Order
                        </Button>
                      </Typography>
                      </Link>
                </div>
              </AccordionBody>
        </div>
      </div>
     
      </Accordion>
     
      </div>
    </>
  );
}

export default Cart;
