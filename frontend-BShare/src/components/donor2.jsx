import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

import { Carousel } from "@material-tailwind/react";


export default function DonorC() {
  return (
    <><div>
 <Carousel transition= { {type: "tween", duration:2} } autoplay='true' loop className="rounded-xl"  style={{height:'30vmax'}} >
          <img
            src="./imgc/book3.jpg"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <img
            src="./imgc/book2.jpg"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <img
            src="./imgc/book1.jpg"
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </Carousel>
       

    </div>
      <br />
      <br />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ms-12 me-12 ">

        <div className=''>
          <Card color="transparent" shadow={false} className=" border-4 w-full ">
            <CardHeader
              color="transparent"
              floated={false}
              shadow={false}
              className="mx-0 flex items-center gap-3 pt-0 pb-2"
            >
              <Avatar
                className='ms-2 '

                size="xxl"
                variant="circular"
                src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBlb3BsZxxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="candice wu"
              />
              <div className="flex w-full flex-col">
                <div className="flex items-center justify-between text-[16px] mb-1">
                  <Typography variant="h4" color="blue-gray">
                    Kane Williamson
                  </Typography>

                </div>

                <Typography className='headi text-[16px] mb-2' color="blue-gray">New York,America</Typography>
                <Typography className='text-[16px]' style={{ color: '#00A51B' }}>Donated Books:481</Typography>
              </div>
            </CardHeader>
            {/* <CardBody className="mb-6 p-0">
        <Typography>
          &quot;I found solution to all my design needs from Creative Tim. I use
          them as a freelancer in my hobby projects for fun! And its really
          affordable, very humble guys !!!&quot;
        </Typography>
      </CardBody> */}
          </Card>
        </div>
        {/* className='text-[16px]' */}
        {/* 2   */}
        <div>
          <Card color="transparent" shadow={false} className=" border-4 w-full ">
            <CardHeader
              color="transparent"
              floated={false}
              shadow={false}
              className="mx-0 flex items-center gap-3 pt-0 pb-2"
            >
              <Avatar
                className='ms-2 '
                size="xxl"
                variant="circular"
                src="https://images.unsplash.com/photo-1607694793239-9936e3cfe782?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNpbmdsZSUyMHBlcnNvbiUyMHBob3RvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                alt="candice wu"
              />
              <div className="flex w-full flex-col">
                <div className="flex items-center text-[16px] justify-between mb-1">
                  <Typography variant="h4" color="blue-gray">
                    Rey Mesterio
                  </Typography>

                </div>
                <Typography className='text-[16px]] mb-2' color="blue-gray">Los Angeles,USA</Typography>
                <Typography className='text-[16px]' style={{ color: '#00A51B' }}>Donated Books:301</Typography>
              </div>
            </CardHeader>
            {/* <CardBody className="mb-6 p-0">
        <Typography>
          &quot;I found solution to all my design needs from Creative Tim. I use
          them as a freelancer in my hobby projects for fun! And its really
          affordable, very humble guys !!!&quot;
        </Typography>
      </CardBody> */}
          </Card>

        </div>
        <div>
          <Card color="transparent" shadow={false} className=" border-4 w-full ">
            <CardHeader
              color="transparent"
              floated={false}
              shadow={false}
              className="mx-0 flex items-center gap-3 pt-0 pb-2"
            >
              <Avatar
                className='ms-2 '
                size="xxl"
                variant="circular"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                alt="candice wu"
              />
              <div className="flex w-full flex-col">
                <div className="flex items-center justify-between text-[16px] mb-1">
                  <Typography variant="h4" color="blue-gray">
                    Sasha Gre
                  </Typography>

                </div>
                <Typography className='text-[16px] mb-2' color="blue-gray">London,UK</Typography>
                <Typography className='text-[16px]' style={{ color: '#00A51B' }}>Donated Books:471</Typography>
              </div>
            </CardHeader>
            {/* <CardBody className="mb-6 p-0">
        <Typography>
          &quot;I found solution to all my design needs from Creative Tim. I use
          them as a freelancer in my hobby projects for fun! And its really
          affordable, very humble guys !!!&quot;
        </Typography>
      </CardBody> */}
          </Card>
        </div>
        <div>
          <Card color="transparent" shadow={false} className=" border-4 w-full ">
            <CardHeader
              color="transparent"
              floated={false}
              shadow={false}
              className="mx-0 flex items-center gap-3 pt-0 pb-2"
            >
              <Avatar
                className='ms-2 '
                size="xxl"
                variant="circular"
                src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                alt="candice wu"
              />
              <div className="flex w-full flex-col">
                <div className="flex items-center justify-between  mb-1">
                  <Typography variant="h4" color="blue-gray">
                    Triple H
                  </Typography>

                </div>
                <Typography className='text-[16px] mb-2' color="blue-gray">Ottawa,Canada</Typography>
                <Typography className='text-[16px]' style={{ color: '#00A51B' }}>Donated Books:507</Typography>
              </div>
            </CardHeader>
            {/* <CardBody className="mb-6 p-0">
        <Typography>
          &quot;I found solution to all my design needs from Creative Tim. I use
          them as a freelancer in my hobby projects for fun! And its really
          affordable, very humble guys !!!&quot;
        </Typography>
      </CardBody> */}
          </Card>
        </div>
        <div>
          <Card color="transparent" shadow={false} className=" border-4 w-full ">
            <CardHeader
              color="transparent"
              floated={false}
              shadow={false}
              className="mx-0 flex items-center gap-3 pt-0 pb-2"
            >
              <Avatar
                className='ms-2 '
                size="xxl"
                variant="circular"
                src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                alt="candice wu"
              />
              <div className="flex w-full flex-col">
                <div className="flex items-center justify-between mb-1">
                  <Typography variant="h4" color="blue-gray">
                    Pratik Pande
                  </Typography>

                </div>
                <Typography className='text-[16px] mb-2' color="blue-gray">Jabalpur,MP,India</Typography>
                <Typography className='text-[16px]' style={{ color: '#00A51B' }}>Donated Books:401</Typography>
              </div>
            </CardHeader>
            {/* <CardBody className="mb-6 p-0">
        <Typography>
          &quot;I found solution to all my design needs from Creative Tim. I use
          them as a freelancer in my hobby projects for fun! And its really
          affordable, very humble guys !!!&quot;
        </Typography>
      </CardBody> */}
          </Card>
        </div>
        <div>
          <Card color="transparent" shadow={false} className=" border-4 w-full ">
            <CardHeader
              color="transparent"
              floated={false}
              shadow={false}
              className="mx-0 flex items-center gap-3 pt-0 pb-2"
            >
              <Avatar
                className='ms-2 '
                size="xxl"
                variant="circular"
                src="https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="candice wu"
              />
              <div className="flex w-full flex-col">
                <div className="flex items-center justify-between mb-1">
                  <Typography variant="h4" color="blue-gray">
                    Rutik Vaidya
                  </Typography>

                </div>
                <Typography className='text-[16px] mb-2' color="blue-gray">MH,India</Typography>
                <Typography className='text-[16px]' style={{ color: '#00A51B' }}>Donated Books:500</Typography>
              </div>
            </CardHeader>
            {/* <CardBody className="mb-6 p-0">
        <Typography>
          &quot;I found solution to all my design needs from Creative Tim. I use
          them as a freelancer in my hobby projects for fun! And its really
          affordable, very humble guys !!!&quot;
        </Typography>
      </CardBody> */}
          </Card>
        </div>
        <div><Card color="transparent" shadow={false} className=" border-4 w-full ">
          <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="mx-0 flex items-center gap-3 pt-0 pb-2"
          >
            <Avatar
              className='ms-2 '
              size="xxl"
              variant="circular"
              src="https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="candice wu"
            />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between mb-1">
                <Typography variant="h4" color="blue-gray">
                  Mark Anthony
                </Typography>

              </div>
              <Typography className='text-[16px] mb-2' color="blue-gray">Captown,South Africa</Typography>
              <Typography className='text-[16px]' style={{ color: '#00A51B' }}>Donated Books:241</Typography>
            </div>
          </CardHeader>
          {/* <CardBody className="mb-6 p-0">
        <Typography>
          &quot;I found solution to all my design needs from Creative Tim. I use
          them as a freelancer in my hobby projects for fun! And its really
          affordable, very humble guys !!!&quot;
        </Typography>
      </CardBody> */}
        </Card></div>

        <div><Card color="transparent" shadow={false} className=" border-4 w-full ">
          <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="mx-0 flex items-center gap-3 pt-0 pb-2"
          >
            <Avatar
              className='ms-2 '
              size="xxl"
              variant="circular"
              src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="candice wu"
            />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between mb-1">
                <Typography variant="h4" color="blue-gray">
                  Rey Mesterio
                </Typography>

              </div>
              <Typography className='text-[16px] mb-2' color="blue-gray">Los Angeles,USA</Typography>
              <Typography className='text-[16px]' style={{ color: '#00A51B' }}>Donated Books:521</Typography>
            </div>
          </CardHeader>
          {/* <CardBody className="mb-6 p-0">
        <Typography>
          &quot;I found solution to all my design needs from Creative Tim. I use
          them as a freelancer in my hobby projects for fun! And its really
          affordable, very humble guys !!!&quot;
        </Typography>
      </CardBody> */}
        </Card></div>


        <div>
          <Card color="transparent" shadow={false} className=" border-4 w-full ">
            <CardHeader
              color="transparent"
              floated={false}
              shadow={false}
              className="mx-0 flex items-center gap-3 pt-0 pb-2"
            >
              <Avatar
                className='ms-2 '
                size="xxl"
                variant="circular"
                src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="candice wu"
              />
              <div className="flex w-full flex-col gap-0.5">
                <div className="flex items-center justify-between mb-1">
                  <Typography variant="h4" color="blue-gray">
                    Ava Wick
                  </Typography>

                </div>
                <Typography className='text-[16px] mb-2' color="blue-gray">New York,America</Typography>
                <Typography className='text-[16px]' style={{ color: '#00A51B' }}>Donated Books:581</Typography>
              </div>
            </CardHeader>
            {/* <CardBody className="mb-6 p-0">
        <Typography>
          &quot;I found solution to all my design needs from Creative Tim. I use
          them as a freelancer in my hobby projects for fun! And its really
          affordable, very humble guys !!!&quot;
        </Typography>
      </CardBody> */}
          </Card>
        </div>
        <div>
          <Card color="transparent" shadow={false} className=" border-4 w-full ">
            <CardHeader
              color="transparent"
              floated={false}
              shadow={false}
              className="mx-0 flex items-center gap-3 pt-0 pb-2"
            >
              <Avatar
                className='ms-2 '
                size="xxl"
                variant="circular"
                src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="candice wu"
              />
              <div className="flex w-full flex-col gap-0.5">
                <div className="flex items-center justify-between mb-1">
                  <Typography variant="h4" color="blue-gray">
                    Vikas Rajput
                  </Typography>

                </div>
                <Typography className='text-[16px] mb-2' color="blue-gray">Nagpur,MH,India</Typography>
                <Typography className='text-[16px]' style={{ color: '#00A51B' }}>Donated Books:421</Typography>
              </div>
            </CardHeader>
            {/* <CardBody className="mb-6 p-0">
        <Typography>
          &quot;I found solution to all my design needs from Creative Tim. I use
          them as a freelancer in my hobby projects for fun! And its really
          affordable, very humble guys !!!&quot;
        </Typography>
      </CardBody> */}
          </Card>
        </div>
        <div>
          <Card color="transparent" shadow={false} className=" border-4 w-full ">
            <CardHeader
              color="transparent"
              floated={false}
              shadow={false}
              className="mx-0 flex items-center gap-3 pt-0 pb-2"
            >
              <Avatar
                className='ms-2 '
                size="xxl"
                variant="circular"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="candice wu"
              />
              <div className="flex w-full flex-col gap-0.5">
                <div className="flex items-center justify-between mb-1">
                  <Typography variant="h4" color="blue-gray">
                    Rowan Williamson
                  </Typography>

                </div>
                <Typography className='text-[16px] mb-2' color="blue-gray">New York,America</Typography>
                <Typography className='text-[16px]' style={{ color: '#00A51B' }}>Donated Books:271</Typography>
              </div>
            </CardHeader>
            {/* <CardBody className="mb-6 p-0">
        <Typography>
          &quot;I found solution to all my design needs from Creative Tim. I use
          them as a freelancer in my hobby projects for fun! And its really
          affordable, very humble guys !!!&quot;
        </Typography>
      </CardBody> */}
          </Card>
        </div>
        <div>
          <Card color="transparent" shadow={false} className=" border-4 w-full ">
            <CardHeader
              color="transparent"
              floated={false}
              shadow={false}
              className="mx-0 flex items-center gap-3 pt-0 pb-2"
            >
              <Avatar
                className='ms-2 '
                size="xxl"
                variant="circular"
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="candice wu"
              />
              <div className="flex w-full flex-col gap-0.5">
                <div className="flex items-center justify-between mb-1">
                  <Typography variant="h4" color="blue-gray">
                    Ken Block
                  </Typography>

                </div>
                <Typography className='text-[16px] mb-2' color="blue-gray">Utah,US</Typography>
                <Typography className='text-[16px]' style={{ color: '#00A51B' }}>Donated Books:351</Typography>
              </div>
            </CardHeader>
            {/* <CardBody className="mb-6 p-0">
        <Typography>
          &quot;I found solution to all my design needs from Creative Tim. I use
          them as a freelancer in my hobby projects for fun! And its really
          affordable, very humble guys !!!&quot;
        </Typography>
      </CardBody> */}
          </Card>
        </div>


      </div>


    </>
  )
}
// style={{backgroundColor: `${getrandomcolor()}`}}
// function getrandomcolor() {
//     return "#" + ((1<<24)*Math.random() | 0). toString(16);
// }
