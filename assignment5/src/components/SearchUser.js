import react from 'react';
import {useState} from 'react';

function SearchUser(){
    const [search, setSearch] =useState('');

    return(
        <div>
            <input type = "search" placeholder='Search' onChange={(e) => setSearch(e.target.value)}></input>
            <button>Check</button>
            <h1>{search}</h1>
        </div>
    );
}
export default SearchUser;