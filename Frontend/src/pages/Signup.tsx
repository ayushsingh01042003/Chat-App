import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { signup } from "../features/auth/authAPI";
import { useAppDispatch } from "../app/hooks";
import { setAuthState } from "../features/auth/authSlice";

const Signup = () => {
  const[email, setEmail] = useState<string>('');
  const[password, setPassword] = useState<string>('');
  const[confirmPassword, setConfirmPassword] = useState<string>('');
  const[username, setUsername] = useState<string>('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = await signup(username, email, password, confirmPassword);
      dispatch(setAuthState({ isAuthenticated: true, user: data.user }));
      navigate('/');
    } catch (error) {
      dispatch(setAuthState({ isAuthenticated: false, user: null }));
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>

      <p className="text-blue-300" 
      onClick={() => navigate('/signin')}
      >Already have an account?</p>
    </div>
  )
}

export default Signup