import React from "react";

const UserDisplay = (props) =>{
    const{id, name, address, city} = props.user;
    return(
        <>
        <div className="container">
            <div>{name}</div>
            <div>{address}</div>
            <div>{city}</div>

        </div>
        <button onClick={()=> props.clickHandler(id)}>Delete</button>
        </>
    )
}
export default UserDisplay;