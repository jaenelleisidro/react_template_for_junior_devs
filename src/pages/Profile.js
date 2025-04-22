import { useEffect, useState} from 'react';
import api from './../common/Api'


const Profile = () => {

  const [user,setUser] = useState({})
  useEffect(() => {
    (async ()=>{
      const res=await api.get('users/me');
      const user = res?.data;
      setUser(user);
      console.log(user)
    })();
  }, []);

    return <h1> {user?.email || ''}</h1>;
  };
  
  export default Profile;