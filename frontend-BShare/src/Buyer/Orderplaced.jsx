import React from "react";
import Navbar from "../components/Navbar";
import { Card, Button } from "@material-tailwind/react";
import {  } from "react-bootstrap";
import { Link } from "react-router-dom";

const Orderplaced = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      {/* order header card */}
      <div className="container border border-spacing-2 mt-24 bg-[#F2F1F1] ">
        <div className="bg-[white]  p-2 shadow lg:mx-5 flex items-center ">
          <div>
            <img
              src="./Buyerimages/orederplacedbuyer.png"
              className="w-[45px] "
              alt=""
            />
          </div>
          <div className="lg:ms-3  ms-1">
            <p className="lg:text-[20px] text-[15px] text-[#042CFE]">
              Order Placed For ₹637
            </p>
            <p className="lg:text-[17px] text-[12px] capitalize">
              {" "}
              Your order has been confirmed & will be shipping soon
            </p>
          </div>
        </div>

        {/* delivery address */}
        <div className="grid lg:grid-cols-2 grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 my-2 lg:mx-5 gap-2 ">
          <div className="bg-[white]  p-2 shadow ">
            <div className=" flex items-center justify-center  gap-1 py-2">
              <img src="./Buyerimages/gaddi.png" className="w-[32px]" alt="" />
              <h3 className="lg:text-[22px] max-text-[22px] text-[16px]">
                Delivery Address
              </h3>
            </div>
            <hr />
            <div className="py-2 leading-8 lg:ps-3">
              <p className="lg:text-[18px] text-[14px]">Sahil Rangari</p>
              <p className="lg:text-[18px] text-[14px]">
                {" "}
                plot No. 201, Hingna road nagpur, Maharashtra-440016
              </p>
              <p className="lg:text-[18px] text-[14px]">
                {" "}
                Contact No. 9030520480
              </p>
            </div>
          </div>
          <div className="bg-[white]  p-2 shadow ">
            <div className=" flex items-center justify-center  gap-1 py-2">
              <img
                src="./Buyerimages/deatailchart.png"
                className="w-[32px]"
                alt=""
              />
              <h3 className="lg:text-[22px] max-text-[22px] text-[16px]">
                Order Details
              </h3>
            </div>
            <hr />
            <div className="py-2 leading-6 lg:ps-3 font-[JejuMyeongjo] ">
              <p className="lg:text-[18px] text-[14px] ">
                Order Date :- <span>10 / 07 / 2022</span>
              </p>
              <p className="lg:text-[18px] text-[14px]">
                {" "}
                Order ID :- <span>507712</span>
              </p>
              <p className="lg:text-[16px] text-[12px]">
                {" "}
                Estimated delivered in <span>18 Jul - 22 Jul</span>
              </p>
              <p className="lg:text-[18px] text-[14px] text-[black]">
                Mode of Payment :-{" "}
                <span className="text-[#15830B]">Cash On Delivary</span>
              </p>
            </div>
          </div>
        </div>
        {/* delivery address */}
        <div>
          <div className=" p-2 shadow lg:mx-5">
            {/* card one */}
            <Card className="my-3 px-6 ">
              <div className="lg:flex  justify-evenly items-center p-2">
                <div className="">
                  {" "}
                  <img src="./IMG1.jpg" alt="home" width="109" height="125" />
                </div>
                <div>
                  <p>
                    Ikigai: The Japanese secret to a long and happy life
                    [Hardcover] García, Héctor and Miralles, Francesc
                  </p>
                  <p>Order On : 12-07-2023</p>
                </div>
                <div>
                  <p>
                    Quantity : <span> 1</span>
                  </p>
                  <p>
                    Total Amount : <span> ₹212</span>
                  </p>
                </div>
              </div>
            </Card>
            {/* card two */}
            <Card className="my-3 px-6">
              <div className="lg:flex justify-evenly items-center p-2">
                <div>
                  {" "}
                  <img src="./IMG2.jpg" alt="home" width="109" height="125" />
                </div>
                <div>
                  <p>
                    Ikigai: The Japanese secret to a long and happy life
                    [Hardcover] García, Héctor and Miralles, Francesc
                  </p>
                  <p>Order On : 12-07-2023</p>
                </div>
                <div>
                  <p>
                    Quantity : <span> 1</span>
                  </p>
                  <p>
                    Total Amount : <span> ₹212</span>
                  </p>
                </div>
              </div>
            </Card>
            {/* card three */}
            <Card className="my-3 px-6">
              <div className="lg:flex justify-evenly items-center gap-3 p-2">
                <div>
                  {" "}
                  <img src="./IMG3.jpg" alt="home" width="109" height="125" />
                </div>
                <div>
                  <p>
                    Ikigai: The Japanese secret to a long and happy life
                    [Hardcover] García, Héctor and Miralles, Francesc
                  </p>
                  <p>Order On : 12-07-2023</p>
                </div>
                <div>
                  <p>
                    Quantity : <span> 1</span>
                  </p>
                  <p>
                    Total Amount : <span> ₹212</span>
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
        <div className="bg-[white] lg:mx-5 py-4">
        <div className="lg:flex items-center justify-around ">
          <p className="px-5 lg:text-[22px] text-[16px] font-semibold">Hope you enjoy your purchase , Thank you !</p>
          <p className="px-5 lg:text-[18px] text-[13px] ">Total Amount : <span> ₹ 637/-</span></p>
        </div>
        <div className="md:flex justify-center gap-5 my-2 shadow py-3">
            <center>
            <Link to='/trackorder'>
            <Button type="button" className="rounded-sm mx-2 capitalize px-6 py-2 my-2 bg-[#388E3C] sm:text-[16px] text-[14px] shadow-light-green-900">Track Order</Button>
            </Link>
            <Link to='/'>
            <Button type="button"  className="rounded-sm mx-2 capitalize px-6 py-2 bg-[#388E3C] sm:text-[16px] text-[14px] shadow-light-green-900">Continued</Button>
            </Link>
            </center>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Orderplaced;
