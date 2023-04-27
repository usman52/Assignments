import react from 'react';
import './AddUser.css';
import {useState, useEffect} from 'react';
import { v4 as uuid} from 'uuid';


const getDataFromLS = () =>{
    const data = localStorage.getItem('users');
    if(data) {
        return JSON.parse(data);
    }
    else{
        return []
    }
}
function AddUser(){
    
    const [id, setId] = useState('');
    const [select, setSelect] = useState('');
    const [text, setText] = useState('');
    const [address, setAddress] = useState('');
    const [users, setUsers] = useState(getDataFromLS);
    const [edituser, setEditUser] = useState(false);
    
    
    const submitHandler = (e) =>{
        e.preventDefault();
        if (text === '' || address === '' || select === ''){
            alert('All Fields are mandatory');
        }
        else{
            let newUser = {
                id: uuid(),
                text,
                address,
                select
            };
            setUsers([...users, newUser]);
            setText('');
            setAddress('');
            setSelect('');
        
        }

    }
    const deleteUser = (id) =>{
         debugger;
        const filterUsers = users.filter((element,index)=>{
            return element.id!==id
           
        })
        setUsers(filterUsers);
    }
    const handleEdit = (user, id) =>{
        debugger;
        setEditUser(true);
        setId(id);
        setUsers(user.text,user.address,user.select);
    }
    
    useEffect(() => {
        localStorage.setItem('users',JSON.stringify(users));

    },[users])
    
    
    return(
        <>
        <div className='container'>
            <form onSubmit={submitHandler}>
            <input type = 'text' placeholder='Name' value={text} onChange={(e)=>setText(e.target.value)}></input><br></br>
            <input type = 'text' placeholder='Address' value={address} onChange={(e)=>setAddress(e.target.value)}></input><br></br>
            <select value={select} onChange={(e)=>setSelect(e.target.value)}>
                <option>Select City</option>
                <option>Islamabad</option>
                <option>Lahore</option>
                <option>Karachi</option>
                <option>Gujrat</option>
            </select><br></br>
            <button type='submit'>Add</button>
            </form>
            
           
        </div>
        <div className='box'>
            <table className='table'>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    
                
                    {users.map((user, index) =>{
                        
                        return(
                            user.id === id ?
                            
                        <tr>
                            <td><input type='text' value={user.text} onChange={(e) => setText(e.target.value)}></input></td>
                            <td><input type='text' value={user.address} onChange={(e) => setAddress(e.target.value)}></input></td>
                            <td><select value={user.select} onChange={(e) => setSelect(e.target.value)}></select>
                            <option>Select City</option>
                <option>Islamabad</option>
                <option>Lahore</option>
                <option>Karachi</option>
                <option>Gujrat</option>
                            </td>
                            <td><button>Update</button></td>
                        </tr>
                        :
                    
                            <tr key={index}>
                                <td>{user.text}</td>
                                <td>{user.address}</td>
                                <td>{user.select}</td>
                                <td><button onclick={()=>handleEdit(user.id)}>Edit</button></td>
                                <td><button onClick={()=>deleteUser(user.id)}>Delete</button></td>
                            </tr>
                        )

                    })}
                
            
        
                </tbody>
            </table>
        </div>
        </>
    );
}
export default AddUser;