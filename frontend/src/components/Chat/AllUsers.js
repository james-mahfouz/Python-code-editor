import { useState , useEffect } from "react";

function AllUsers() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    
        useEffect(() => {
            fetch("localhost:8000/api/v1/get_all_user") 
            .then((response) => response.json())
            .then((data) => setUsers(data.users))
            .catch((error) => console.error(error)); 
        }, []);
        
        const handleUserClick = (userId) => {
        setSelectedUser(userId);
        };
    
        return (
        <div>
            <h2>Users</h2>
            {users.length > 0 ? (
            users.map((user) => (
                <div key={user.id} onClick={() => handleUserClick(user.id)}>
                {user.name}
                </div>
            ))
            ) : (
            <div>Loading users...</div>
            )}
            {selectedUser && <div>Selected User ID: {selectedUser}</div>}
        </div>
        );
    }
    
    export default AllUsers;