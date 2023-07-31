import { useState} from "react";
import BarChart from"./BarChart"
// import LineChart from "./LineChart";
import PieChart from "./PieChart";
 import { UserData } from "./Data";
// import "../App.css";

function DataChart() {

  const [userData, setUserData] = useState({  
    labels: UserData.map((data) => data.student),
    datasets: [
      {
        label: "Month",
        data: UserData.map((data) => data.Persent),
        backgroundColor: ["pink", "#fde047", "blue", "#134e4a", "#4ade80"],
        borderColor: "gray",
        borderWidth: 2,
        barPercentage: 0.5,
        barThickness: 30,
        minBarLength: 1,
      
      },
    ],

  } );
   
  return (
    < >
      {/* <h2>MONTHLY PROGRSS</h2> */}
        
        <div className=" align-items-center flex flex-wrap  flex-row justify-around rounded-md bg-white shadow-md">
          <BarChart chartData={userData}  />
        </div>
          {/* <div style={{ width: 400 }}>
            <LineChart chartData={userData} />
          </div> */}
        <div className="align-items-center flex flex-wrap  flex-row justify-around rounded-md bg-white shadow-md lg:p-5 xl:p-5">
          <PieChart chartData={userData} />
        </div>
    
    </>
 
   )
};

export default DataChart;


  // const [userData, setUserData] = useState({
  //   labels: apiData.map((data) => data.Name),
  //   datasets: [
  //     {
  //       label: "Student Detail Persentag",
  //       data: apiData.map((data) => data.Persent),
  //       backgroundColor: ["red", "green", "blue","yellow","lime",],
  //       borderColor: "black",
  //       borderWidth: 2,
  //     },
  //   ],
  // });

  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT
