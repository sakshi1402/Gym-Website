import React from "react";
import './Header.css';
import Logo from "../../assets/logo.png";
import bars from "../../assets/bars.png";
import { useState } from "react";
import { Link } from "react-scroll";
  
const Header=()=>{

    const moblie =window.innerWidth<=768?true:false;
    const [getMenu,setMenu]=useState(false);
     const menuHander=()=>{
        setMenu(true);
     }
     const onOffMenu=()=>{
        setMenu(false);
     }
    return(<div  className="header">
        <img className="logo" src={Logo} alt="logo"/>
        {(getMenu=== false && moblie===true)?(
            <div style={{backgroundColor:"var(--appColor)" ,padding:"0.56rem",borderRadius:"5px",}} onClick={menuHander}><img src={bars} style={{width:"1.5rem",height:"1.5rem"}} alt=" "/></div>
        ):
        <ul className="header-menu">
        <li onClick={onOffMenu}><Link 
        to="home"
        span={true}
        smooth={true}
        activeClass={true}
        >Home</Link></li>
        <li onClick={onOffMenu}><Link to="program"
        span={true}
        smooth={true}>Programs</Link></li>
        <li onClick={onOffMenu}><Link to="reason"
        span={true}
        smooth={true}>Why us</Link></li>
        <li onClick={onOffMenu}><Link to="plan"
        span={true}
        smooth={true}>Plans</Link></li>
        <li onClick={onOffMenu}><Link to="testi"
        span={true}
        smooth={true}>Testimonials</Link></li>
    </ul>
    }

    </div>)
}
export default Header;