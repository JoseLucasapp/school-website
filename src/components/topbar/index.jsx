import React from "react";
import './index.css'

const TopBar = ({ responsive, responsiveTitle }) => {
    return (
        <div className="topbar-main">
            <div className="topbar-logo">
                <p>{responsive ? `${responsiveTitle} List` : 'Administração escolar'}</p>
            </div>
            <div className="topbar-options">
                <div className="topbar-logout">
                    Log out
                </div>
            </div>
        </div>
    )
}

export default TopBar