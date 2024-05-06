import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center my-2">
    <div className="text-3xl px-2 font-mono font-semibold">Connect</div>
    <div className="flex space-x-4 px-2">
      <Button>Logout</Button>
      <ModeToggle />
    </div>
  </div>
  )
}

export default Navbar