import { useNavigate } from "react-router-dom"

const Redirect = () => {
  const navigate = useNavigate();

  return (
    <div>
      <p>You must be logged in to view this</p>
      <a href="" className="underline text-blue-300" onClick={() => {
        navigate('/signin')
      }}>Return to signin?</a>
    </div>
  )
}

export default Redirect