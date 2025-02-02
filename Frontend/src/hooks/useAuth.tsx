import { RootState } from "../app/store";
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";

const useAuth = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, loading } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const checkAuth = () => {
      
    }
    checkAuth();
  })

  return [isAuthenticated, loading];
}

export default useAuth