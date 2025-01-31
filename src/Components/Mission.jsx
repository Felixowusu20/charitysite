import React from "react";
import donate from "../images/children2.jpg"
import './Mission.css'


const Mission = () => {

    return (
        <>
        <h1 className="text-center" style={{marginTop:'50px'}}>Mission statement</h1>
        <div className="main">
            <div className="donate-image">
                <img src={donate} alt="image"/>
            </div>
            <div className="mission-statement">
                <p style={{fontSize:'20px'}}>About us</p>
                <h2>Our Mission</h2>
                <p>Our mission is to help the needy and vulnerable in society by assisting and providing them with
                    food, shelter, clothing and other essentials. Also, we provide scloarship to brilliant but 
                    needy students. Some of our beneficiaries include street children, prisoners, sick people, widows
                    and victims of natural disaster.
                </p>
            </div>
        </div>
        </>
    )
}

export default Mission;