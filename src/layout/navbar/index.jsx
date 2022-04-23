import React, { useState } from 'react'
import {Link} from "react-router-dom";
import { BsMinecartLoaded } from "react-icons/bs";
import "./style.css";
const Navbar = () => {
  const [useoption, usersetoption] = useState(false)
  const wallet = () => {
    usersetoption(true)
  }
  const storeNft = () => {

  }
  return (
    <div>
      <div className="navbar_header">
        <div className="left_header">
          <span><Link to="store" id="estimate_underline">Store</Link></span>
          <span>Merchandise</span>
          <span>About</span>
          <span>Roadmap</span>
          <span>FAQ</span>
        </div>
        <div className="right_header">
          <span>USD</span>
          <span><BsMinecartLoaded /></span>
          {
            useoption === false ? <span className="button_login" onClick={() => wallet()}>Login</span> : <span className="button_login" onClick={() => wallet()}><img src="./coin/image-429@2x.png" alt="" id="coin" />Ki.fg.warm</span>
          }
        </div>
        
      </div>
    </div>
  );
};
export default Navbar;
