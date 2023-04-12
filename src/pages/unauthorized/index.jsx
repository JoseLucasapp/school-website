import React from "react";
import "./index.css"
import DoNotTouchIcon from '@mui/icons-material/DoNotTouch';

const Unauthorized = () => {
    return (
        <div className="unau-main">
            <div className="unau-icon">
                <img src={process.env.PUBLIC_URL + 'unauthorized.png'} alt="" />
            </div>
            <div className="unau-text">
                <p>Unauthorized Access</p>
            </div>
        </div>
    )
}

export default Unauthorized