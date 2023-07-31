/* eslint-disable react/no-unescaped-entities */
import { RxCross1 } from "react-icons/rx";
import { Select, Option ,Button  } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const BookSellForm = () => {

  

  const handleSubmit = (event) => {
    event.preventDefault();
 
    toast.success("Your data submitted Succefully , You can courier at  G-5 Anand Rajani, Apartment IT park pin Code : 440022  ",{
      position: toast.POSITION.BOTTOM_CENTER
    },
    );
};
  return (
    <div>
      
      
      
      <div className="container  max-w-2xl border-spacing-2 border rounded-md  mt-3 mb-3 p-4 shadow bg-[#FFEADD]">
      {/* heading */}
      <div className="pb-6 flex items-center">
        <Link to="/">

        <img src="./logo1.png" className="lg:w-20 w-11 h-11 lg:h-16 -m-2" alt="" />
        </Link>
        <h2 className=" lg:p-4  lg:text-[28px] md:text-[24px] ms-8 lg:ms-20 text-[20px]">
          BooksShare - Sellers Form{" "}
        
        </h2>
      </div>

      {/* form */}
      <form action="" onSubmit={handleSubmit} >
      <div className=''>
        <div
          
          className="grid lg:grid-cols-2 md:grid-cols-2  grid-cols-1 gap-3"
        >
          <div className="lg:text-[20px] text-[18px]">
            <label htmlFor="">
              First Name <span className="text-[red]">*</span>
            </label>
            <input
            required
              type="text"
              className="w-full border border-black rounded ps-2 shadow-md "
            />
          </div>

          <div className="lg:text-[20px] text-[18px]">
            <label htmlFor="">
              Last Name <span className="text-[red]">*</span>
            </label>
            <input
              type="text"
              className="w-full border border-black rounded ps-2  shadow-md"
            />
          </div>
          <div className="lg:text-[20px] text-[18px]">
            <label htmlFor="">
              E-mail  <span className="text-[red]">*</span>
            </label>
            <input
              type="text"
              className="w-full border border-black rounded ps-2  shadow-md"
            />
          </div>

          <div className="lg:text-[20px] text-[18px]">
            <label htmlFor="">
              Mobile Number <span className="text-[red]">* </span>
            </label>
            <input
              type="text"
              className="w-full border border-black rounded ps-2 shadow-md"
            />
          </div>

          <div className="lg:text-[18px] text-[16px]">
            <label htmlFor="" className="">
              Full Address <span className="text-[red]">*</span>
            </label>
            <textarea name="" id=""  rows="3" className="w-full border border-black rounded ps-2 shadow-md"></textarea>
          </div>
          <div className="     lg:text-[20px] text-[18px]">
            <div>
              <label htmlFor="">Pin Code </label><br />
              <input type="text" maxLength={6} className="  border border-black rounded ps-2 mb-3 shadow-md" />
            </div>
            <div>
              <label htmlFor="">City in Maharashtra <span className="text-[red]">*</span></label>
              <div className="flex  flex-col gap-6" >
                <Select color="black" className="  border rounded bg-white " label="select city">
                  <Option>Nagpur  </Option>
                  <Option>Wardha </Option>
                  <Option>Yavatmal </Option>
                  <Option>Nashik </Option>
                  <Option>Amravati </Option>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* address */}
     
      <div className="grid items-center lg:grid-cols-2 grid-cols-1 md:grid-cols-2 md:mt-4 mt-2 gap-y-4">
        <div className="lg:text-[20px]  text-[18px] ">
          <label htmlFor="">Image of Book's</label><br />
          <input type="file" className="shadow-md w-60 " />

        </div> 
        <div>
        <Button variant="outlined" className="rounded-md outline-double lg:mt-4 hover:bg-[green] hover:text-white  px-3 py-2 border border-spacing-1">
       Upload
      </Button>
        </div>
      </div>


      <div className="grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2 mt-3 md:mt-4 gap-y-4">
      <div className="lg:text-[20px] text-[18px] ">
          <label htmlFor=""> No. of Book's</label><br />
          <input type="number" className="w-52 border border-black rounded ps-2 shadow-md" />

        </div>
         <div className="lg:text-[20px] text-[18px] ">
          <label htmlFor=""> Price of Book's</label><br />
          <input type="number" className="w-52 border border-black rounded ps-2 shadow-md" />

        </div>
      </div>
      <div>
        <center className="py-6">
       <Link to='/store'><Button  className="bg-[#f05345] font-normal px-4 py-2  text-white lg:text-[18px] text-[14px]">Cancel </Button></Link> 
       {/* <Link to='/' ><Button color="green" onClick={notify } 
        className="bg-[#81A356] font-normal px-4 py-2 lg:ms-8 lg:text-[18px] text-[14px]"> Submit</Button></Link> */}
        <Button color="green"
        type="submit"
         
         className="bg-[#81A356] font-normal px-4 py-2 lg:ms-8 ms-2 lg:text-[18px] text-[14px]">Submit</Button>

   
        </center>
      </div>
      <ToastContainer />
    </form>
    </div>
    </div>
    
  )
}

export default BookSellForm
