import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import DarkModeToggle from "./ToggleDarkMode";

export const Header = () => {
  const onlineStatus = useOnlineStatus();
  const [btnValue, setBtnValue]=useState("Login")

  // useEffect(()=>{},[])
    return (
      <div className=" flex justify-between shadow-lg m-0 mb-2 bg-white backdrop-filter backdrop-blur-sm bg-opacity-30  " >
        <img
          className="w-34 h-40"
          src={LOGO_URL}
        />
        <div className="flex items-center">
          <ul className="flex p-5 m-5">
            <li>
            {/* <button onClick={DarkModeToggle()}>Dark</button> */}
            </li>
            <li className="px-4">Status : {onlineStatus ? "✅": "🔴"}</li>
            <li className="px-4">
              <Link to="/">Home</Link>
            </li >
            <li className="px-4">
              <Link to="/cart">Cart</Link>
            </li >
            <li className="px-4">
              <Link to="/about">About-us</Link>
            </li>
            <li className="px-4">
              <Link to = "/grocery">Buy Groceries</Link>
            </li>
            <button onClick={()=>{
              btnValue==="login"
              ?setBtnValue("logout"): setBtnValue("login")
            }}>{btnValue}</button>
          
          </ul>
        </div>
      </div>
    );
  };

export default Header;

