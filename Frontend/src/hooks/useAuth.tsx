import { useEffect, useState } from "react"

const useAuth = () => {
  const[isAuthenticated, setIsAuthenticated] = useState(false);
  const[loading, setLoading] = useState(true);
  
  useEffect(() => {
    const verify = async () => {
        try {
          const res = await fetch('http://localhost:3000/api/auth/verify-user', {
            credentials: 'include',
          });

          if(res.ok) {
            setIsAuthenticated(true)
          } else {
            setIsAuthenticated(false)
          }
        } catch (error) {
            setIsAuthenticated(false);
        } finally {
            setLoading(false)
        }
    }
    verify();
  }, [])

  return [isAuthenticated, loading];
}

export default useAuth