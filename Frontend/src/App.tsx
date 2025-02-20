import './index.css';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Redirect from './pages/Redirect';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAppSelector } from './app/hooks';
import { RootState } from './app/store';

function App() {
  const { isAuthenticated, loading } = useAppSelector((state: RootState) => state.auth);

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