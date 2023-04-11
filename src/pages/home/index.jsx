import React, { useState, useEffect } from "react";
import './index.css'
import TopBar from "../../components/topbar";
import { schools } from "../../data/data";
import List from "../../components/list";

import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Home = ({ user = 'ADMIN' }) => {
    const [listData, setListData] = useState([])
    const [listType, setListType] = useState("")

    useEffect(() => {
        if (user === 'ADMIN') {
            setListData(schools)
            setListType('Schools')
        }
    }, [user])

    const listItems = listData.map((list) =>
        <li>
            <div className="list-div1">
                <p id="list-name">{list.name}</p>
                <p id="list-email">{list.email}</p>
                <p>{list.phone}</p>
            </div>
            <div className="list-div2">
                <button id="del">Apagar</button>
                <button>Editar</button>
            </div>
        </li>
    );

    return (
        <div className="home-main">
            <TopBar responsive={true} responsiveTitle={listType} />
            <div className="home-body">
                <div className="home-list">
                    <p id="title">{listType}</p>
                    <List list={listItems} />
                    <div className="list-buttons">
                        <KeyboardDoubleArrowLeftIcon className="key" />
                        <KeyboardArrowLeftIcon className="key" />
                        <button>+</button>
                        <KeyboardArrowRightIcon className="key" />
                        <KeyboardDoubleArrowRightIcon className="key" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home