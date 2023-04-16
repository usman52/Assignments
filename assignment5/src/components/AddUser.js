import React from "react";

class AddUser extends React.Component{
    state = {
        name: '',
        address: '',
        city: ''
    };
    add = (e) =>{
        e.preventDefault();
        if(this.state.name === '' || this.state.address === '' || this.state.city === ''){
            alert("All the fields are mandatory!");
            return;
        }
        else{
            this.props.addUserHandler(this.state);
            this.setState({name: '', address: '', city: ''});
        }
    };

    render(){
        return(
        <div className="container">
            <h2>Add User</h2>
            <form on onSubmit={this.add}>
                <div className="field">
                    <input type="text" name="name" 
                    placeholder="Name" value={this.state.name}
                    onChange={(e)=> this.setState({name: e.target.value})}></input>
                </div>
                <div className="field">
                    <input type="text" name="address" 
                    placeholder="Address" value={this.state.address}
                    onChange={(e)=> this.setState({address: e.target.value})}></input>
                </div>
                <div className="field">
                    <select value={this.state.city}
                    onChange={(e) => this.setState({city: e.target.value})}>
                        <option>--Select City--</option>
                        <option>Islamabad</option>
                        <option>Lahore</option>
                        <option>Karachi</option>
                        <option>Multan</option>
                        <option>Gujrat</option>
                    </select>
                </div>
                <button className="btn">Add</button>
            </form>
        </div>
        );
    }
}
export default AddUser;