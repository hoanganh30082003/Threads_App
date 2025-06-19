import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Profile from "../components/Profile";

const UserProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:9999/users/${id}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.error("Error fetching user:", err));
  }, [id]);

  return (
    <div>
      <h1>👤 User Profile</h1>
      <Profile user={user} />
    </div>
  );
};

export default UserProfile;
