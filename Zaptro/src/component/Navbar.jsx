import { Link, NavLink } from 'react-router-dom'
import { MapPin, } from "lucide-react";
import { FaCaretDown } from "react-icons/fa"
import { IoCartOutline } from "react-icons/io5";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { useCart } from '../context/CartContext';


function Navbar() {
  const location = false
  const {productItems}=useCart()
  return (
    <div className="bg-white py-3 shadow-2xl">
      <div className="max-w-6xl mx-auto flex justify-between items-center ">
        <div className="flex gap-7 item-center">
          <Link to={"/"}>
            <h1 className="font-bold text-3xl"><span className="text-red-500">Z</span>eptro</h1>
          </Link>
          <div className="flex gap-1 cursor-pointer text-grey-700 item-center">
            <MapPin className="text-red-500" />
            <span className="font-semibold">{location ? <div></div> : "Add Address"}</span>
            <FaCaretDown />
          </div>

        </div>
        <nav className="flex gap-7 item-center">
          <ul className="flex gap-7 item-center text-xl font-semibold ">
            <NavLink to="/" className={({ isActive }) => `${isActive ? "border-b-3 transition-all border-red-500" : "text-black-600"} cursor-pointer`}><li>Home</li></NavLink>
            <NavLink to="/product" className={({ isActive }) => `${isActive ? "border-b-3 transition-all border-red-500" : "text-black-600"} cursor-pointer`} ><li>Product</li></NavLink>
            <NavLink to="/about" className={({ isActive }) => `${isActive ? "border-b-3 transition-all border-red-500" : "text-black-600"} cursor-pointer`}><li>About</li></NavLink>
            <NavLink to="/contact" className={({ isActive }) => `${isActive ? "border-b-3 transition-all border-red-500" : "text-black-600"} cursor-pointer`}> <li>Contact</li></NavLink>
          </ul>
          <Link to="/cart" className="relative">
            <IoCartOutline className="h-7 w-7" />
            <span className='bg-red-500 px-2 w-6 h-6 rounded-full absolute -top-3 -right-3 text-white '>{productItems.length}</span>
          </Link>
          <div>
            <header>
              <SignedOut>
                <SignInButton className="w-20 h-8 rounded-md text-white bg-red-500"/>
              </SignedOut>
              <SignedIn>
                <UserButton/>
              </SignedIn>
            </header>
          </div>

        </nav>
      </div>
    </div>
  )
}

export default Navbar