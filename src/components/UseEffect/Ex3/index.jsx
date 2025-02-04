import React, { useEffect, useState } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      .then(data => setUser(data));
  }, [userId]);

  if (!user) return <p>Загрузка...</p>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Телефон: {user.phone}</p>
    </div>
  );
}

export default UserProfile;