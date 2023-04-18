import React from "react";
import './index.css'
import { Link } from "react-router-dom";

const TopBar = ({ responsive, responsiveTitle }) => {
    return (
        <div className="topbar-main">
            <Link style={{ textDecoration: 'none', color: 'black' }} to={'/menu'}>
                <div className="topbar-logo">
                    <p>{responsive ? `${responsiveTitle} List` : 'Administração escolar'}</p>
                </div>
            </Link>
            <div className="topbar-options">
                <Link style={{ textDecoration: 'none', color: 'black' }} to={'/'}>
                    <div className="topbar-logout">
                        Log out
                    </div>
                </Link>

            </div>
        </div >
    )
}

export default TopBar