import React from "react";
import donate from "../images/children5.jpg"
import './Mission.css'


const Mission = () => {

    return (
        <>
        <div className="main">
            <div className="donate-image">
                <img src={donate} alt="image"/>
            </div>
            <div className="mission-statement">
                <p>About us</p>
                <h2>Our Mission</h2>
                <p>Our mission is to help the needy and vulnerable in society by assisting and providing them with
                    food, shelter, clothing and other essentials. Also, we provide scloarship to brilliant but 
                    needy students. Some of our beneficiaries include street children, prisoners, sick people and widows.
                </p>
            </div>
        </div>
        </>
    )
}

export default Mission;