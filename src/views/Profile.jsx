import {useEffect, useState} from 'react';
import {useUser} from '../hooks/apiHooks';

const Profile = () => {
  const [user, setUser] = useState(null);

  const {getUserByToken} = useUser();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        const userResult = await getUserByToken(token);
        setUser(userResult.user);
      }
    };

    fetchUser();
  }, [getUserByToken]);

  console.log('user', user);
  return (
    <>
      <h2 className="my-4 text-2xl font-bold">Profile</h2>
      {user && (
        <>
          <p className="my-2">Username: {user.username}</p>
          <p className="my-2">Email: {user.email}</p>
          <p className="my-2">
            Register Date: {new Date(user.created_at).toLocaleString('fi-FI')}
          </p>
        </>
      )}
    </>
  );
};

export default Profile;