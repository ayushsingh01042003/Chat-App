import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signin } from "../features/auth/authAPI";
import { useAppDispatch } from "../app/hooks";
import { setAuthState, setLoading } from "../features/auth/authSlice";

const Signin = () => {
  const[email, setEmail] = useState<string>('');
  const[password, setPassword] = useState<string>('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await signin(email, password);
      dispatch(setAuthState({ isAuthenticated: true, user: data.user }));
      navigate('/');
    } catch (error) {
      alert(`signin fail`);
      console.log('Failed', error);
    } finally {
      dispatch(setLoading(false));
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
       type="email"
       placeholder="email"
       value={email}
       onChange={(e) => setEmail(e.target.value)}
      />
      <input
       type="password"
       placeholder="password"
       value={password}
       onChange={(e) => setPassword(e.target.value)
       }
      />
      <button type="submit">Sign In</button>
    </form>
  )
}

export default Signin;