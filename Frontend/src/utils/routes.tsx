import Signin from "../pages/Signin"
import Signup from "../pages/Signup"
import Home from "../pages/Home"

const routes = [
  { path: '/signin', element: <Signin />, public: true },
  { path: '/signup', element: <Signup />, public: true },
  { path: '/', element: <Home />, public: false },
]

export default routes;