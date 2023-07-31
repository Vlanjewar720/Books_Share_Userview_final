
import { Route,Routes } from "react-router-dom"
import Landing from "./pages/Landing"
import ContactUs from "./pages/ContactUs"
import BookStorep from "./pages/Bookstorep"
import DonorForm from "./components/DonorForm"
import BookSellForm from "./components/BookSellForm"
import MyBooks from './components/MyBooks'

import Donor from "./pages/Donor"
import AboutUs from "./pages/Aboutus"
import Blog from "./pages/Blog"
import Cart from "./components/Cart"
import Signadi from "./pages/SignIn"
import Signupo from "./pages/Signup"
import 'bootstrap/dist/css/bootstrap.min.css';


import Aboutus from "./pages/Aboutus"
import Address from "./components/Address"

import Sidebar from "./components/sidebar"
import Yprofile from "./components/usermyprofile "
import OrderSummary from './Buyer/OrderSummary'
import Checkout from "./Buyer/Checkout"
import Orderplaced from "./Buyer/Orderplaced"
import OrderTracking from "./Buyer/OrderTracking"
import Orderdetails from "./Buyer/Orderdetails"
import Demo from "./components/Demo"

const App = () => {
  return (
    <div>
   

<Routes>
  
  <Route path="/" element={<Landing/>} />
  <Route path="/aboutus" element={<AboutUs/>}/>
  <Route path="/blogpage" element={<Blog/>}/>
  <Route path="/contactus" element={<ContactUs/>}/>
  <Route path="/donor" element={<Donor/>}/>
  <Route path="/store" element={<BookStorep/>}/>
  <Route path="/donate" element={<DonorForm/>}/>
  <Route path="/aboutus" element={<Aboutus/>}/>
  <Route path="/sell" element={<BookSellForm/>}/>
  <Route path="/cart" element={<Cart/>}/>
  <Route path="/login" element={<Signadi/>}/>
  <Route path="/register" element={<Signupo/>}/>
  <Route path="/address" element={<Address/>}/>
  <Route path="/ump" element={<Yprofile/>}/>
  <Route path="/sidebar" element={<Sidebar/>}/>
  <Route path="/summary" element={<OrderSummary/>}/>
  <Route path="/checkout" element={<Checkout/>}/>
  <Route path="/orderplaced" element={<Orderplaced/>}/>
  <Route path="/trackorder" element={<OrderTracking/>}/>
  <Route path="/orderdetails" element={<Orderdetails/>}/>
  <Route path="/demo" element={<Demo/>}/>
  <Route path="/myproduct" element={ <MyBooks /> } />
 
</Routes>

  </div>
  )
}
export default App