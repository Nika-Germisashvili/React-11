import React from "react";

function Listitem(props) {
    return (
        <>
            {
                props.arr.map((item, index) => <li key={index}>{ item }</li>)
            }
        </>
    )
}

export default Listitem;