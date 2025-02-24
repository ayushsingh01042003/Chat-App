import './index.css';
import Redirect from './pages/Redirect';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useAuth from './hooks/useAuth';
import routes from './utils/routes';

function App() {
  const[isAuthenticated, loading] = useAuth();

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