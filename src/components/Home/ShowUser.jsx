import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../features/users/userSlice';



let ShowUser = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user);
    console.log(user);
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    return (
        <div>
            <h2>Show User name</h2>
            {user.loading && <p>loading</p>}
            {!user.loading && user.error ? <p>Error: {user.error}</p> : null}
            {!user.loading && user.users.length ? (
                <ul>
                    {
                        user.users.map((user) => (
                            <li key={user.id}>{user.name}</li>
                        ))}
                </ul>
            ) : null}
        </div>
    );
};

export default ShowUser;