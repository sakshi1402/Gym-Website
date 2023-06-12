import React from "react";
import "./Programs.css";
import {programsData} from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";
import { Link } from "react-scroll";
const Programs=()=>{
    return(<>
    <div className="Programs" id="program">
        <div className="Programs-header">
            <span className="stroke-text">Exlore our</span>
            <span>Programs</span>
            <span className="stroke-text">to shape you</span>
        </div>

        <div className="program-categories">
            {programsData.map((program)=>{
                return(
                    <div className="category">
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now"><span>  <Link to="testi">Join Now </Link></span><img src={RightArrow} alt=" "/></div>
                </div>
                )
              

            })}
        </div>
    </div>
    
    </>)
}
export default Programs;