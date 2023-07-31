/* eslint-disable react/no-unescaped-entities */
import { Option, Button , Select } from "@material-tailwind/react";
import { useState, useEffect } from "react";

import { useForm } from "react-hook-form";
import { selectLoggedInUser } from "../features/auth/authSlice";
import {
  selectProduct,
  createProductAsync,
} from "features/product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const BookDetail = () => {
  const [all, setAll] = useState({});
  const dispatch = useDispatch();
  const [image, setImage] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const selectedCity = watch("city");

  const user = useSelector(selectLoggedInUser);

  return (
    <div>
      <div className="container  max-w-2xl border-spacing-2 border rounded-md  mt-3 mb-3 p-4 shadow bg-[#FFEADD]">
        {/* heading */}
        <div className="pb-6 flex items-center">
          <Link to="/">
            <img
              src="./logo1.png"
              className="lg:w-20 w-11 h-11 lg:h-16 -m-2"
              alt=""
            />
          </Link>
          <h2 className=" lg:p-4  lg:text-[28px] md:text-[24px] ms-8 lg:ms-20 text-[20px]">
            BooksShare - Sellers Form{" "}
          </h2>
        </div>

        {/* form */}
        <form
          action=""
          
        >
          <div className="">
            <div className="grid lg:grid-cols-2 md:grid-cols-2  grid-cols-1 gap-3">
              <div className="lg:text-[20px] text-[18px]">
                <label htmlFor="">First Name</label>
                <input
                  required
                  value={user.firstName}
                  className="w-full border border-black rounded ps-2 shadow-md "
                />
              </div>

              <div className="lg:text-[20px] text-[18px]">
                <label htmlFor="">Title</label>
                <input
                  type="text"
                  {...register("title")}
                  className="w-full border border-black rounded ps-2  shadow-md"
                />
              </div>
              <div className="lg:text-[20px] text-[18px]">
                <label htmlFor="">E-mail</label>
                <input
                  type="text"
                  value={user.email}
                  className="w-full border border-black rounded ps-2  shadow-md"
                />
              </div>

              <div className="lg:text-[20px] text-[18px]">
                <label htmlFor="">Mobile Number</label>
                <input
                  type="text"
                  value={user.phone}
                  className="w-full border border-black rounded ps-2 shadow-md"
                />
              </div>

              <div className="lg:text-[18px] text-[16px]">
                <label htmlFor="" className="">
                  Description
                </label>
                <textarea
                  {...register("description")}
                  id=""
                  rows="3"
                  className="w-full border border-black rounded ps-2 shadow-md"
                ></textarea>
              </div>
              <div className="     lg:text-[20px] text-[18px]">
                <div>
                  <label htmlFor="">Pin Code </label>
                  <br />
                  <input
                    {...register("pincode")}
                    maxLength={6}
                    className="  border border-black rounded mb-3 ps-2 shadow-md"
                  />
                </div>
                <div>
                  <label htmlFor="">City in Maharashtra </label>
                  <div className="flex  flex-col gap-6">
                   
                    <Select
                      className="  border rounded bg-white "
                      label="select city"
                      {...register("city")}>
                      <Option value="Nagpur">Nagpur</Option>
                      <Option value="Wardha">Wardha</Option>
                      <Option value="Yavatmal">Yavatmal</Option>
                      <Option value="Nashik">Nashik</Option>
                      <Option value="Amravati">Amravati</Option>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* address */}

          <div className="grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2 md:mt-4 gap-y-4">
            <div className="lg:text-[20px] text-[18px] ">
              <label htmlFor=""> No. of Book's</label>
              <br />
              <input
                type="number"
                required
                {...register("noofbooks")}
                className="w-52 border border-black rounded ps-3 shadow-md"
              />
            </div>
            <div className="lg:text-[20px] ms-3 text-[18px] ">
              <label htmlFor=""> Price of Books</label>
              <br />
              <input
                type="number"
                required
                {...register("noofbooks")}
                className="w-52 border border-black rounded ps-2 shadow-md"
              />
            </div>
          </div>

 
          <ToastContainer />
       
        
        <div className="grid items-center  mt-2 lg:grid-cols-2 grid-cols-1 md:grid-cols-2 md:mt-4 gap-y-4">
        <div className="lg:text-[20px] text-[18px] ">
          <label htmlFor="">Image of Book's</label><br />
          <input type="file"
           onChange={(e) => setImage(e.target.files[0])}
          className="shadow-md w-60 " />
          <p className="text-[12px]"><span className="text-[red]">*</span>Required price cover image</p>
        </div> 
        <div>
        <Button variant="outlined" className="rounded-md ms-3 outline-double lg:mt-4 hover:bg-[green] hover:text-white  px-3 py-2 border border-spacing-1"
        onClick={() => {
          const formData = new FormData();
          formData.append("img", image);
          axios.put(
            `http://localhost:5000/product/${user._id}/image`,
            formData,
            {}
            );
          }}
          
        >
       Upload
      </Button>
        </div>
      </div>

        <div>
            <center className="py-6">
              <Link to="/store">
                <Button className="bg-[#f05345] font-normal px-4 py-2  text-white lg:text-[18px] text-[14px]">
                  Cancel{" "}
                </Button>
              </Link>
            
              <Button
                color="green"
                type="submit"
                className="bg-[#81A356] font-normal px-4 py-2 lg:ms-8 ms-2 lg:text-[18px] text-[14px]"
              >
                Submit
              </Button>
            </center>
          </div>
              </form>
              <div className="lg:text-[14px] text-[12px] ">
    <h6>For courier the books to us at :- G-5 Anand Rajani Apartment, IT park pin Code : 440022</h6>
    {/* <h6>Or Our Courier Boys Will Reached to  and Pick Up The Books.</h6> */}
  </div>
      </div>
    </div>
  );
};

export default BookDetail;
