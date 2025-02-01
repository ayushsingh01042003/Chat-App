import { useNavigate } from "react-router-dom"

const Redirect = () => {
  const navigate = useNavigate();

  return (
    <div>
      <p>You must be logged in to view this</p>
      <p className="underline text-blue-300" onClick={() => {
          navigate('/signin')
      }}>Return to signin?</p>
    </div>
  )
}

export default Redirect