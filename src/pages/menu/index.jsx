import React from "react";
import './index.css'
import TopBar from "../../components/topbar";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <div className="main-menu">
            <TopBar />
            <div className="body-menu">
                <div className="title-menu">
                    <p>Escolha uma opção abaixo</p>
                </div>
                <div className="options-menu">
                    <div className="option-menu">
                        <Link to={'/home/Students'} >
                            <img src={process.env.PUBLIC_URL + 'students.png'} alt="students" title="students" />
                        </Link>
                    </div>
                    <div className="option-menu">
                        <Link to={'/home/Classrooms'} >
                            <img src={process.env.PUBLIC_URL + 'classrooms.png'} alt="classrooms" title="classrooms" />
                        </Link>
                    </div>
                    <div className="option-menu">
                        <Link to={'/home/Workers'} >
                            <img src={process.env.PUBLIC_URL + 'workers.png'} alt="workers" title="workers" />
                        </Link>
                    </div>
                    <div className="option-menu">
                        <Link to={'/home/Teachers'} >
                            <img src={process.env.PUBLIC_URL + 'teachers.png'} alt="teachers" title="teachers" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu