import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const res = await fetch('http://localhost:3000/api/auth/LogOut')
    if (res.ok) {
      localStorage.removeItem('token'); // Remove token from localStorage
      navigate('/login'); // Client-side navigation
      console.log('Logged out');
    } else {
      console.log('An error occurred');
    }
  };

  return (
    <div className="flex justify-between items-center my-2">
      <div className="text-3xl px-2 font-mono font-semibold">Connect</div>
      <div className="flex space-x-4 px-2">
        <Button onClick={handleLogout}>Logout</Button>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;