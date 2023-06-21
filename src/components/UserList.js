import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../redux/users/usersSlice';

const UserList = () => {
  const { users, isLoading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) {
    console.log('isLoading');
    return <p>Loading...</p>; // Display loading state while fetching users
  }

  if (error) {
    return <p>Error: {error}</p>; // Display error state if there's an error
  }

  console.log(users);
  
  return (
    <div className="userList">      
      <ul>
        {users.map((user) => (
          <li key={user.id}>{`${user.name.first} ${user.name.last}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
