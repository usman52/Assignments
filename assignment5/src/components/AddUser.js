import React from 'react';

import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';


const getDataFromLS = () => {
    const data = localStorage.getItem('users');
     if (data) {
         return JSON.parse(data);
    }
   else {
         return []     }
 }
function AddUser() {

    const [field, setField] = useState({
        id: '',
        name: '',
        address: '',
        select: ''
    });

    // const [users, setUsers] = useState(getDataFromLS);
    const [form, setForm] = useState(getDataFromLS);
    // const [editid, setEditId] = useState(null);
    const [update, setUpdate] = useState(null);


    const handleChange = (e) => {
        setField({ ...field, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(update){
            const user = {...field};
            const updatedData=  form.map((data)=>(
                data.id===update.id?user:data
            )
            )
            setForm(updatedData)
            setUpdate(null)
            setField({
                id: uuid(),
                name: '',
                address: '',
                select: ''
            });

        }
        else{

            const Data={id:uuid(),name: field.name, address: field.address, select: field.select}
           setForm([...form, Data ])
           setField({
               id: uuid(),
               name: '',
               address: '',
               select: ''
           });
        }
    }
    const handleDelete=(id)=>{
        const DeleteData=form.filter((data)=>(data.id!==id))
        setForm(DeleteData)
    }
    const handleEdit=(id)=>{
        const EditData=form.filter((data)=>(data.id===id))
        setUpdate(EditData[0])
    }
    useEffect(()=>{
        localStorage.setItem('users',JSON.stringify(form));
    },[form])
    useEffect(() => {
        
        if (update) {
            setField({
                id: update.id,
                name : update.name,
                address : update.address,
                select: update.select,
            })
        }
        
    }, [update])
    console.log(update, form)



    return (
        <>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='Name' value={field.name} name='name' onChange={handleChange} required></input><br></br>
                    <input type='text' placeholder='Address' value={field.address} name='address' onChange={handleChange} required></input><br></br>
                    <select value={field.select} name='select' onChange={handleChange}>
                        <option>Select City</option>
                        <option>Islamabad</option>
                        <option>Lahore</option>
                        <option>Karachi</option>
                        <option>Gujrat</option>
                    </select><br></br>
                    <button type='submit'>{update?"Update":"Add"}</button>
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
                    {form.map((user, index) =>{
                        return(
                           
                                
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.address}</td>
                                <td>{user.select}</td>
                                <td></td>
                                <td><button onClick={()=>handleEdit(user.id)}>Edit</button></td> 
                                <td><button onClick={()=>handleDelete(user.id)}>Delete</button></td>  
                            </tr>
                        );

                    })}
                
            
                    
                </tbody>
                </table>
            </div>
        </>
    );
}
export default AddUser;