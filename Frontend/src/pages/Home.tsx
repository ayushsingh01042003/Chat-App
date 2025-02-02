import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { logout } from "../features/auth/authAPI"
import { logoutUser } from "../features/auth/authSlice";

const Home = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      dispatch(logoutUser());
      navigate('/signin');
    } catch (error) {
      console.log('logout failed', error);
    }
  }

  return (
    <div>
      <p>Login Successfull</p>
      <button onClick={handleLogout}>logout</button>
    </div>
  )
}

export default Home;