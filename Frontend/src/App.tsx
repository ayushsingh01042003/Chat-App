import './index.css';
import Signin from './auth/Signin';
import Signup from './auth/Signup';
import Home from './home/Home';
import Redirect from './auth/Redirect';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useAuth from './hooks/useAuth';

function App() {
  const[isAuthenticated, loading] = useAuth();

  const routes = [
    { path: '/signin', element: <Signin />, public: true },
    { path: '/signup', element: <Signup />, public: true },
    { path: '/', element: <Home />, public: false },
  ]

  if(loading) {
    return (
      <div>
        LOADING....
      </div>
    )
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map(({path, element, public: isPublic}) => (
            <Route
              key={path}
              path={path}
              element={isPublic || isAuthenticated ? element : <Redirect />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App