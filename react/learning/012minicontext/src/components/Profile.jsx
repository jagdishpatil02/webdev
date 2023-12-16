import { useContext } from "react";
import userContext from "../context/Usercontext";
function Profile() {
  const { user } = useContext(userContext);

  if (!user) return <div>please Login</div>;
  return <div>Welcome, {user.username}</div>;
}

export default Profile;
