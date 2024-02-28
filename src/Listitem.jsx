import React from "react";

function Listitem(props) {
    return (
        <ul>
            {
                props.arr.map((item, index) => <li key={index}>{ item }</li>)
            }
        </ul>
    )
}

export default Listitem;
