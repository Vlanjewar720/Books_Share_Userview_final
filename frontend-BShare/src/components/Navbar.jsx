
import React from "react";
import { BsCart3 } from 'react-icons/bs';
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Button,
  
} from "@material-tailwind/react";
import {
  ChevronDownIcon,

  Bars3Icon,
  XMarkIcon,

} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
 
 

const navListMenuItems  = [
    {
        title: "Bookstore",
        to:"/store"
    },
    {
        title: "Donate Books",
        to:"/donate"
    },
    {
        title: "Sell Books",
        to:"/sell"
    }
];
 
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
 
  const renderItems = navListMenuItems.map(
    ({ title, to}) => (
          // eslint-disable-next-line react/jsx-key
          <div key={title}>
            <MenuItem className="flex items-center gap-3 rounded-lg hover:bg-green-700 ">
            <Typography variant="h6" color="blue-gray"  className=" lg:text-center p-2 hover:text-white">
            <Link to={to} >
             {title }
             </Link>
            </Typography>
            </MenuItem>
          </div>
    )
  );

 //resource dropdown menu
  return (
    <React.Fragment> 
    <Menu
      open={isMenuOpen}
      handler={setIsMenuOpen}
      offset={{ mainAxis: 20 }}
      placement="bottom"
      >
      <MenuHandler>
        <Typography as="div" variant="small" className="font-normal ">
          <ListItem
            className="flex items-center gap-2 py-2 pr-4 hover:bg-green-700 hover:text-white active:bg-green-600"
            selected={isMenuOpen || isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
          >
            
            BOOKS
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`hidden h-3 w-3 transition-transform lg:block ${
                isMenuOpen ? "rotate-180" : ""
              }`}
            />
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`block h-3 w-3 transition-transform lg:hidden ${
                isMobileMenuOpen ? "rotate-180" : ""
              }`}
            />
          </ListItem>
        </Typography>
      </MenuHandler>
      <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
        <ul className="grid  gap-y-2">{renderItems}</ul>
      </MenuList>
    </Menu>
    <div className="block lg:hidden">
      <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
    </div>
  </React.Fragment>
  );
}
 
function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 ite  lg:flex-row lg:p-1 lg:pr-[40px]">
        <Link to="/">
      <Typography as="a"  variant="small" className="font-normal">
        <ListItem className="flex items-center gap-2 py-2 pr-10  hover:bg-green-700 hover:text-white">
          HOME
        </ListItem>
      </Typography>
        </Link>
   
      <Typography as="a"  variant="small" className="font-normal">
        <Link  to="/aboutus">
        <ListItem className="flex items-center gap-2 py-2 pr-10 hover:bg-green-700 hover:text-white">
          ABOUT US
        </ListItem>
        </Link>
      </Typography>

        <Link to="/donor">
      <Typography as="a"  variant="small" className="font-normal">
        <ListItem className="flex items-center gap-2 py-2 pr-10 hover:bg-green-700 hover:text-white">
        
          DONORS
        </ListItem>
      </Typography>
          </Link>

      <Typography as="a"  variant="small" className="font-normal">
        <Link to="/blogpage">
        <ListItem className="flex items-center gap-2 py-2 pr-10 hover:bg-green-700 hover:text-white">
          BLOGS
        </ListItem>
        </Link>
        
      </Typography>
     
      <NavListMenu />

        <Link to="/contactus">
      <Typography as="a"  variant="small" className="font-normal">
        <ListItem className="flex items-center gap-2 py-2 pr-10 hover:bg-green-700 hover:text-white ">
          CONTACT US
        </ListItem>
      </Typography>
        </Link>
        
      <Typography
        as="a"
        
        variant="small"
        className="font-normal"
      >
        <Link to="/cart">
        <ListItem className="flex items-center gap-2 py-2 -mt-1 pr-10 hover:bg-green-700 hover:text-white " >
          <BsCart3 className="h-[18px] w-[18px]" />
        </ListItem>
        </Link>
      </Typography>
      <Typography >
       
      <Menu>
      <MenuHandler>
        {/* <Button>Open Menu</Button> */}
        <ListItem>
      <Avatar src="./user-profile.png" alt="avatar" className="w-6 h-6 ite  sm:items-center lg:-mt-4 "  variant="rounded" />
      </ListItem>
      </MenuHandler>
      <MenuList>
        <MenuItem>Edit </MenuItem>
        <MenuItem>View</MenuItem>
        <Link to ='/myproduct'>
        <MenuItem>My Books </MenuItem>
        </Link>
        <Link to ='/cart'>
        <MenuItem>My Carts </MenuItem>
        </Link>
        
        <Link to ='/orderdetails'>
        <MenuItem>My Orders </MenuItem>
        </Link>
        <MenuItem>Logout</MenuItem>
      </MenuList>
    </Menu>

      
      </Typography>
    </List>
  );
}
 
export default function Example() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  return (
    <> <div className="flex justify-center items-center"> <div className="2xl:container 2xl:w-full lg:w-full w-full relative ">  
     <Navbar className="fixed top-0 left-0 right-0 inset-auto  z-10 block h-max w-full rounded-none border border-white/80 bg-white bg-opacity-80 py-2 px-4 text-black shadow-lg backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-white-900 lg:pl-10">
        
        <Link to='/'>
        <img src="./images/logo.jpeg" className='h-12' alt='LOGO' />
          </Link>
     
        <div className="hidden lg:block">
          <NavList />
        </div>
      

      
        <IconButton
          variant="text"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        
      </Collapse>
    </Navbar>
    </div>       </div>
    </>

  );
}