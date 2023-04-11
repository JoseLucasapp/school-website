import React, { useState, useEffect } from "react";
import './index.css'
import TopBar from "../../components/topbar";
import { schools } from "../../data/data";
import List from "../../components/list";

const Home = ({ user = 'ADMIN' }) => {
    const [listData, setListData] = useState("")
    const [listType, setListType] = useState("")

    useEffect(() => {
        if (user === 'ADMIN') {
            setListData(schools)
            setListType('Schools')
        }
    }, [user])

    const listItems = listData.map((list) =>
        <li>
            <div className="list-div1"><p id="list-name">{list.name}</p><p>{list.email}</p><p>{list.phone}</p></div><div className="list-div2"><button id="del">Apagar</button><button>Editar</button></div>
        </li>
    );

    console.log(listItems)

    return (
        <div className="home-main">
            <TopBar />
            <div className="home-body">
                <div className="home-list">
                    <h2>{listType}</h2>
                    <List list={listItems} />
                </div>
            </div>
        </div>
    )
}

export default Home