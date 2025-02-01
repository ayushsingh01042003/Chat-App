import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const[email, setEmail] = useState<string>('');
  const[password, setPassword] = useState<string>('');
  
  const navigate = useNavigate();
  const handleSubmit = async () => {
    const response = await fetch('http://localhost:3000/api/auth/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-type": "application/json"
      },
      credentials: 'include',
    }) 
    
    if(response.ok) {
      navigate('/');
    } else {
      alert('Could not login');
    }
  }

  return (
    <div>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="border" placeholder="email"/> <br />
      <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className="border" placeholder="password"/> <br />

      <button onClick={handleSubmit} className="border">
        Submit
      </button>
    </div>
  )
}

export default Signin;