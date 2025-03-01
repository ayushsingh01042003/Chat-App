import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useAuth from './hooks/useAuth';
import routes from './utils/routes';
import Loading from './components/Loading';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const[isAuthenticated, loading] = useAuth();

  if(loading) {
    return <Loading />
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map(({path, element, public: isPublic}) => (
            <Route
              key={path}
              path={path}
              element={isPublic ? (element) : (
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  {element}
                </ProtectedRoute>
              )}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App