import React from "react";
import './index.css'

const List = ({ list }) => {
    return (
        <div className="list-main">
            <ul>{list}</ul>
        </div>
    )
}

export default List