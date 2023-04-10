import React from "react";
import './index.css'

const TopBar = () => {
    return (
        <div className="topbar-main">
            <div className="topbar-logo">
                <h1>Administração escolar</h1>
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