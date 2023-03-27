import { useState , useEffect } from "react";
import axios from 'axios';
import './index.css'


function AllUsers() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);


    const token = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    };

    useEffect(()=>{
        const fetchData = async () => {
            try{
                const response = await axios.get('http://localhost:8000/api/v1/get_all_user', token);
                setUsers(response.data.users);

            }catch (e) {
                console.log(e);
            }
        }
        fetchData();
    },[]);
    
    const handleUserClick = (userId) => {
        setSelectedUser(userId);
        };


        useEffect(() => {
            localStorage.setItem("selectedUserId", selectedUser);
        }, [selectedUser]);
        
    return(
        <div>
            <h2>Select Developer to Message</h2>
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