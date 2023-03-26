import { useState , useEffect } from "react";
import axios from 'axios';


function AllUsers() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);


    useEffect(()=>{
        const token = localStorage.getItem("token");
        axios
    .post("http://localhost:8000/api/v1/get_all_user", {
        headers: {
            Authorization: `Bearer ${token}`, 
        },
    })
    .then((response) => {
        setUsers(response.data.users);
    })
    .catch((error) => {
        console.error(error);
    });
    }, []);
    
    return(
        <div>
            <h2>Select Developer to Chat</h2>
            {
                users.length > 0 ? ( users.map((user) => (
                    <div key={user.id} onClick={() => handleUserClick(user.id)} > {user.name} </div>
                )))  : (
                    <div>Loading users...</div>
                    )}
                    {selectedUser && <div>Selected User ID: {selectedUser}</div>}
            

        </div>
    );


}
export default AllUsers;