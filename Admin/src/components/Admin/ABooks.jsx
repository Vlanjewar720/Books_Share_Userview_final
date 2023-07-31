import React from "react";
import { useState } from "react";
const books = [
  {
    id: "1",
    title: "Reasoning",
    src: "./bkimg/booksOne.png",
    desc: "Available 1500",
  },
  {
    id: "2",
    title: "Marathi",
    src: "./bkimg/booksTwo.png",
    desc: "Available 600",
  },
  {
    id: "3",
    title: "Hindi",
    src: "./bkimg/booksThree.png",
    desc: "Available 100",
  },
  {
    id: "4",
    title: "Physics",
    src: "./bkimg/booksFour.png",
    desc: "Available 1000",
  },
  {
    id: "5",
    title: "Gate",
    src: "./bkimg/booksFive.png",
    desc: "Available 400",
  },
  {
    id: "6",
    title: "General",
    src: "./bkimg/booksSix.png",
    desc: "Available 900",
  },
];

const Wbooks = [
  {
    id: "1",
    title: "Hindi",
    src: "./bkimg/booksThree.png",
    desc: "Available 300",
  },
  {
    id: "2",
    title: "Physics",
    src: "./bkimg/booksFour.png",
    desc: "Available 900",
  },
  {
    id: "3",
    title: "Gate",
    src: "./bkimg/booksFive.png",
    desc: "Available 500",
  },
  {
    id: "4",
    title: "General",
    src: "./bkimg/booksSix.png",
    desc: "Available 250",
  },
  {
    id: "5",
    title: "Reasoning",
    src: "./bkimg/booksOne.png",
    desc: "Available 100",
  },
  {
    id: "6",
    title: "Marathi",
    src: "./bkimg/booksTwo.png",
    desc: "Available 200",
  },
 
];
const Ambooks = [
  {
    id: "1",
    title: "Physics",
    src: "./bkimg/booksFour.png",
    desc: "Available 1000",
  },
  {
    id: "2",
    title: "Marathi",
    src: "./bkimg/booksTwo.png",
    desc: "Available 400",
  },
  {
    id: "3",
    title: "General",
    src: "./bkimg/booksSix.png",
    desc: "Available 800",
  },
  {
    id: "4",
    title: "Gate",
    src: "./bkimg/booksFive.png",
    desc: "Available 300",
  },
  {
    id: "5",
    title: "Reasoning",
    src: "./bkimg/booksOne.png",
    desc: "Available 500",
  },
 
  {
    id: "6",
    title: "Hindi",
    src: "./bkimg/booksThree.png",
    desc: "Available 200",
  },
 
 
];
const states = ['Maharashtra']
    const cities = {
      // 'Select-States': ['Select-City'],
      'Maharashtra': ['Nagpur', 'Wardha', 'Amravati'],
     
    }
export default function Abooks() {   
  
    const [selectedState, setSelectedState] = useState("");
    const [Citys, setCitys] = useState("");


  
  return (
    <div className=" ">
     
      <div className="row float-right w-50 mt-3 m-0">
        <div className="col-sm-10 col-md-4 col-lg-4 sm:text-">
            <select onChange={(e) => { setSelectedState(e.target.value) }}>
            <option selected disabled>Select-State</option>
            {
              states.map(state => {      
                return <option value={state}>{state}</option>
              
              })
            }
           </select>
        </div>{" "}
        &nbsp;&nbsp;
        <div className="col-sm-10 col-md-4 col-lg-4">
            {selectedState && <select onChange={(e) => { setCitys(e.target.value) }}>
            <option selected disabled>Select-City</option>
            {
              cities[selectedState].map(city => {
                return <option value={city}>{city}</option>
              })
            }
          </select>}
        </div>
      </div>

       {Citys === 'Nagpur' ? 
      <div className="overflow-scroll relative flex w-full h-[70vh] sm:overflow-scroll justify-center ">                                                
        <div className="row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-around items-center gap-5 p-3 mt-2">
          {books &&
            books.map((book, i) => (
              <div
                key={i}
                className=" relative flex w-full max-w-[20rem] p-2 rounded-md bg-white bg-clip-border text-gray-700 shadow-md"
              >
                <div className=" w-2/6 overflow-hidden bg-white bg-clip-border text-gray-700">
                  <img
                    src={book.src}
                    alt="image"
                    className="h-full w-full object-cover p-2"
                  />
                </div>
                <div className="p-6">
                  <p className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                    {book.title}{" "}
                  </p>
                  <p className="mb-2 block font-sans text-2md font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {book.desc}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
        : null}

         {Citys === 'Wardha' ? 
      <div className="overflow-scroll relative flex w-full h-[70vh] sm:overflow-scroll justify-center " >                                                
        <div className="row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-around items-center gap-5 p-3 mt-2">
          {Wbooks &&
            Wbooks.map((book, i) => (
              <div
                key={i}
                className=" relative flex w-full max-w-[20rem] p-2 rounded-md bg-white bg-clip-border text-gray-700 shadow-md"
              >
                <div className=" w-2/6 overflow-hidden bg-white bg-clip-border text-gray-700">
                  <img
                    src={book.src}
                    alt="image"
                    className="h-full w-full object-cover p-2"
                  />
                </div>
                <div className="p-6">
                  <p className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                    {book.title}{" "}
                  </p>
                  <p className="mb-2 block font-sans text-2md font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {book.desc}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
        : null}

{Citys === 'Amravati' ? 
      <div className="overflow-scroll relative flex w-full h-[70vh] sm:overflow-scroll justify-center "  >                                                
        <div className="row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-around items-center gap-5 p-3 mt-2">
          {Ambooks &&
            Ambooks.map((book, i) => (
              <div
                key={i}
                className=" relative flex w-full max-w-[20rem] p-2 rounded-md bg-white bg-clip-border text-gray-700 shadow-md"
              >
                <div className=" w-2/6 overflow-hidden bg-white bg-clip-border text-gray-700">
                  <img
                    src={book.src}
                    alt="image"
                    className="h-full w-full object-cover p-2"
                  />
                </div>
                <div className="p-6">
                  <p className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                    {book.title}{" "}
                  </p>
                  <p className="mb-2 block font-sans text-2md font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {book.desc}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
        : null}

    </div>
  );
}


// import { useState } from "react";
// import './App.css';


// function App() {
//   const states = ['UP', 'Delhi', 'Gujrat']
//   const cities = {
//     'UP': ['f', 'g', 'l'],
//     'Delhi': ['a', 'b'],
//     'Gujrat': ['tr', 'trt', 'rtt'],
//   }

//   const [selectedState, setSelectedState] = useState('')
//   console.log(selectedState)
//   return (
//     <div>
//       CASCADING DROPDOWNS :
//       <select onChange={(e) => { setSelectedState(e.target.value) }}>
//         {
//           states.map(state => {
//             return <option>{state}</option>
//           })
//         }
//       </select>

//       {selectedState && <select>
//         {
//           cities[selectedState].map(city => {
//             return <option>{city}</option>
//           })
//         }
//       </select>}

//     </div>
//   );
// export default App();

