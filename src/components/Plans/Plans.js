import React from "react";
import "./Plans.css";
import {plansData} from "../../data/plansData";
import whitetick from "../../assets/whiteTick.png";
import RightArrow from "../../assets/rightArrow.png";
import { Link } from "react-scroll";

const Plans=()=>{
    return(<>
    <div className="plans-container" id="plan" >
        <div className="blur plans-blur-1"></div>
        <div className="blur plans-blur-2"></div>
        <div className="Programs-header" style={{
            gap:"2rem",
        }}>
            <span className="stroke-text"> READY TO START</span>
            <span>YOUR JOUNREY</span>
            <span className="stroke-text">NOW WITHUS</span>
        </div>
{/* plans card */}
<div className="plans">
    {plansData.map((plan,i)=>{
        return(
            <div className="plan" key={i}>
                {plan.icon}
                <span>{plan.name}</span>
                <span>Rs {plan.price}</span>
                <div className="features">{plan.features.map((feature,i)=>{
                    return(
                        <div className="feature">
                            <img src={whitetick} alt=" "/>
                            <span key={i}>{feature}</span>

                        </div>
                    )
                })}</div>
                <div className="join-now" >
                    <span>See more benefits</span><img src={RightArrow} alt=""/>
                </div>
        
                <button className="btn">        <Link to="testi">Join Now</Link></button>
            </div>
        )
    })}
</div>

    </div>
    </>)
}
export default Plans;