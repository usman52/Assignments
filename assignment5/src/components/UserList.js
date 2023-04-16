import React from "react";
import UserDisplay from "./UserDisplay";

const UserList = (props) =>{
    console.log(props);

    const deleteUserHandler = (id) =>{
        props.getUserId(id);
};
const renderUserList = props.users.map((user) =>{
    return(
        <UserDisplay
        user ={user}
        clickHandler={deleteUserHandler}
        key = {user.id} />
    );
});
return <div>{renderUserList}</div>
};
export default UserList;