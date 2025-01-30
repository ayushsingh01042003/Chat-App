import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const[email, setEmail] = useState<string>('');
  const[password, setPassword] = useState<string>('');
  const[confirmPassword, setConfirmPassword] = useState<string>('');
  const[username, setUsername] = useState<string>('');

  const navigate = useNavigate();
  const routeToSignin = () => {
    navigate('/signin')
  }

  return (
    <div>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="border" placeholder="email"/> <br />
      <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className="border" placeholder="password"/> <br />
      <input type="text" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="border" placeholder="confirm password"/> <br />
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="border" placeholder="username"/> <br />
      
      <button className="border">
        submit
      </button>
      <p className="text-blue-300" 
      onClick={routeToSignin}
      >Already have an account?</p>
    </div>
  )
}

export default Signup