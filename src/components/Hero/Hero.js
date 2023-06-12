import React from "react";
import './Hero.css';
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";

import hero_image_back from "../../assets/hero_image_back.png";

import Heart from "../../assets/heart.png";

import Calories from "../../assets/calories.png";
import {motion} from "framer-motion";
import NumberCounter from "number-counter";
import { Link } from "react-scroll";



const Hero=()=>{
    const transition ={type:"spring",duration:3 }
    const moblie =window.innerWidth<=768?true:false;
  
    return(
        <>
          {/*this is main hero section */}
    <div className="hero" id="home">
        <div className="blur hero-blur"> </div>
        {/* this is main left section*/}
<div className="left-h">
    <Header/>
    {/* the best ad section */}
    <div className="the-best-ad">
        <motion.div
            initial={{left:moblie?"165px":"238px"}}
            whileInView={{left:"8px"}}
            transition={{...transition,type:"tween"}}
>
        </motion.div>
        <span>the best fitness club in the town</span>
    </div>
{/* hero text section*/}
    <div className="hero-text">
        <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
        </div>
        <div><span>Ideal Body</span></div>
        <div><span>
        In here we will help 
            you to shape and
            Build your ideal Body
            and live up your life
            to fullest
        </span>
           


        </div>
    </div>

    {/* figures sections*/}

    <div className="figures">
        <div>
        <span><NumberCounter end={140} start={100} delay="4" preFix="+" /></span>
        <span>Expert Coachs</span>
        </div>
        <div>
        <span>
            <NumberCounter end={978} start={850} delay="4" preFix="+"/>
        </span>
        <span>Members Joined</span>
        </div>
        <div>
        <span>
        <NumberCounter end={50} start={25} delay="4" preFix="+"/>
        </span>
        <span>Fitness Programs</span>
        </div>
    </div>

{/* buttons section */}

    <div className="hero-buttons">
        <button className="btn">Get Started</button>
        <button className="btn">Learn More</button>
    </div>

</div>

{/* this is main left section */}
<div className="right-h">

<button className="btn"><Link to="testi">Join Now</Link></button>

    <motion.div className="heart-rate" transition={{transition}}   
     initial={{right:"-1rem"}}
     whileInView={{right:"4rem"}}
    >
        <img src={Heart} alt=""/>
        <span>Heart Rate</span>
        <span> <NumberCounter end={116} start={50} delay="4" postFix="bpm" /> </span>

    </motion.div>
    {/* hero img sec */}

    <img src={hero_image} alt=" " className="hero-image"/>
    <motion.img 
     transition={{transition}}   
     initial={{right:"23rem"}}
     whileInView={{right:"30rem"}}
    src={hero_image_back} alt=" " className="hero-image-back"/>
    {/*calories */}
    <motion.div className="calories" 
     transition={{transition}}   
     initial={{right:"45rem"}}
     whileInView={{right:"35rem"}}>
        <img src={Calories} alt=" "/>
        <div className="kcal-d" >
        <span> Calories Burned  </span>
        <span> <NumberCounter end={220} start={150} delay="4" postFix="kcal" /></span>
        </div>
     
    </motion.div>
    </div>
    </div>
    </>)
} 
export default Hero;