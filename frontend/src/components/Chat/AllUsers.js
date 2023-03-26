import { useState , useEffect } from "react";

function UserList(){
    const [users, setUsers] = useState([]);
    const [selectedUserID, setSelectedUserId]= useEffect(null);

    useEffect(() => {
        fetch('/get_developers')
        .then(response => response.json())
        .then(data => setUsers(data.users));
    }, []);

    
    const handleUserClick = (userId) => {
        setSelectedUserId(userId);
    }

    return(
        <div>
            <h2>USERS</h2>
            {users.map(user => (
        <div key={user.id} onClick={() => handleUserClick(user.id)}>
        {user.name}
        </div>
    ))}
    {selectedUserId && (
        <div>
        Selected User ID: {selectedUserId}
        </div>
    )}
        </div>
    );

}