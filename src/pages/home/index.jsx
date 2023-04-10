import React from "react";
import './index.css'
import TopBar from "../../components/topbar";

const Home = () => {
    return (
        <div className="home-main">
            <TopBar />
            <div className="home-body">
                <div> Home</div>
            </div>
        </div>
    )
}

export default Home