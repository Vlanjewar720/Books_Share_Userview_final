import React from "react";
import { Input } from "@material-tailwind/react";
import { FcGoogle } from "react-icons/fc";
import {eyeOff} from "react-icons-kit/feather/eyeOff"
import {eye} from "react-icons-kit/feather/eye"

import { useForm } from "react-hook-form";
import { useState } from "react";
import Icon from "react-icons-kit";
import { Link } from "react-router-dom";

export default function Signup() {
  const[password,setPassword]=useState("")
  const [type,setType]=useState("password")
  const[icon,setIcon]=useState(eyeOff)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleToggle = ()=>{
    if(type==='password'){
      setIcon(eye)
      setType('text')
    }
    else{
      setIcon(eyeOff)
      setType('password')
    }
  }

  console.log(errors);
  return (
    <div className=" grid  md:grid-cols-2 sm:grid-cols-1  ">
      <div className=" lg:w-[100%]  ">
        <Link to='/'>

       
        <img
          className=" xl:ms-14  xl:mt- 
                         lg:ms- lg:mt- 
                         md:ms- md:mt- md:mb- 
                         sm:ms- sm:mt- sm:mb-
                         mt-4 "
          src="./logo1.png"
          alt="my img"
        /> </Link>

        <main className="grid grid-col justify-items-center  ">
          <form
            action=""
            className="lg:w-7/12  font-[JejuMyeongjo]"
            onSubmit={handleSubmit((data) => console.log(data))}
          >
            <h1 className=" text-3xl font-bold text-center">
              Create an account{" "}
            </h1>
            <section className="mb-4 mt-1">
              <Input
                variant="standard"
                {...register("name", { required: "name is required" })}
                color="green"
                label="Name*"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </section>

            <section className="mb-4">
              <Input
                variant="standard"
                {...register("email", {
                  required: "email is required",
                  pattern: {
                    value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                    message: "please enter valid email",
                  },
                })}
                color="green"
                label="Email*"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </section>

            <section className="mb-4">
              <Input
                variant="standard"
                type="text"
                {...register("phone", {
                  required: "phone is required",
                  pattern: {
                    value:/(\+)?(91)?( )?[6789]\d{9}/g,
                    message: "enter valid no",
                  },
                })}
                min={0}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                maxLength={10}
                color="green"
                label="Mobile Number*"
              />
              {errors.phone && (
                <p className="text-red-500">{errors.phone.message}</p>
              )}
            </section>

            {/* <section className="mb-1 flex  relative">
              

              <Input variant="standard" type="password" color="green" label="Password*"  />
              
              <span className=" cursor-pointer lg:ms-[520px] md:ms-[400px]  ms-[200px] mt-3 text-xl absolute" onClick={()=>console.log("jhgavfld")}>

              <BsFillEyeSlashFill />
              </span>
            </section> */}
            <div>
           <div className="mb-4 flex justify-end ">
              <Input
                  type={type}
                  {...register("password", {
                    required: "password is required",
                    pattern: {
                      value:
                        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                      message: `- at least 8 characters \n
- must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number\n
- Can contain special characters`,
                    },
                  })}
                  variant="standard"
                   color="green"
                  label="Password*"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                
             />
             <span class="flex justify-around items-center" onClick={handleToggle}>
                  <Icon class="absolute mr-10" icon={icon} size={25}/>
              </span>
            </div>
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
         </div>
   
            <br />
            <button className="bg-[#81A356] text-white p-2 rounded-xl w-full">
              Create Account
            </button>
            <br />
            <br />
            <div className="justify-center flex ">
              ___________ <div className="mt-2 px-2"> or </div>___________
            </div>
            <br />
            <button
              type="button" disabled
              className="flex items-center justify-center text-black pt-2  pb-2 rounded-xl w-full border border-spacing-3 border-black "
            >
              <FcGoogle className="mr-5 text-[30px]" />
              <span>Sign up with Google</span>
            </button>
            <br />
            <button
              type="button"
              disabled
              className="flex items-center justify-center text-black p-2 rounded-xl w-full border border-spacing-3 border-black "
            >
              <img
                src="./skill-icons_twitter.png"
                alt=""
                className=" mr-5 text-[32px]"
              />
              <span>Sign up with Twitter</span>
            </button>
            <br />
            <div className="text-center">
              Already Have an Account ?
              <span className="text-blue-500">
                <Link to="/login"> Log in</Link>
                
              </span>
            </div>
          </form>
        </main>
      </div>

      <div className=" lg:w-full  lg:h-screen xl:w-full xl:h-screen   md:w-full  md:h-screen ">
        <img
          src="./Cool.png"
          className="relative lg:w-full lg:h-screen xl:w-full xl:h-screen w-0 md:w-full md:h-screen   "
          alt="myimg"
        />
      </div>
    </div>
  );
}
