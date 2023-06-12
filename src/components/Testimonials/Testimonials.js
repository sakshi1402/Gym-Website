
import React from "react";
import { useState } from "react";
import "./Testimonials.css";
import {testimonialsData} from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import {motion} from "framer-motion";
const Testimonials=()=>{
    const transition ={type:"spring",duration:3 }
    const [getSelected,setSelected]= useState(0);
    const tLength =testimonialsData.length;
  
    const onLeftHandler=()=>{
        
        getSelected===0?setSelected(tLength-1):setSelected((prev)=> prev-1)
    }
  
    const onRightHandler=()=>{
        
        getSelected===tLength-1?setSelected(0):setSelected((prev)=> prev+1)
    }






    return(<>
    <div className="Testimonials" id="testi">
        <div className="left-t">
            <span> Testimonials</span>
            <span className="stroke-text">What they</span>
            <span>Say about us</span>
            <motion.span
        
        key={getSelected}
        transition={{transition}}   
        initial={{opacity:0,x:-100}}
        animate={{opacity:1,x:0}}
        exit={{opacity:0,x:100}}
       
            >{testimonialsData[0].review}</motion.span>
            <span>
                <span style={{color:"var(--orange)"}}>{testimonialsData[getSelected].name}</span>
                {"  "} - {testimonialsData[getSelected].status}
            </span>
        </div>
        <div className="right-t">
            <motion.div  transition={{...transition,duration:2}}   
     initial={{opacity:0,x:-100}}
     whileInView={{opacity:1,x:0}}></motion.div>
            <motion.div  transition={{...transition,duration:2}}   
     initial={{opacity:0,x:100}}
     whileInView={{opacity:1,x:0}}></motion.div>
           
            
<motion.img

key={getSelected}
transition={{transition}}   
initial={{opacity:0,x:100}}
animate={{opacity:1,x:0}}
exit={{opacity:0,x:-100}}


 src={testimonialsData[getSelected].image} alt=" "/> 
<div className="arrows">
    <img onClick={onLeftHandler} src={leftArrow} alt=" "/>
    <img onClick={onRightHandler} src={rightArrow} alt=" "/>
</div>
        </div>
        
    </div>
    </>)
}
export default Testimonials;