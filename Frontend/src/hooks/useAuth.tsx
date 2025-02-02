import { RootState } from "../app/store";
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { verifyUser } from "../features/auth/authAPI";
import { setAuthState, setLoading } from "../features/auth/authSlice";

const useAuth = () => {
  const dispatch = useAppDispatch();
  const { isAuthenticated, loading } = useAppSelector((state: RootState) => state.auth);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const data = await verifyUser();
        dispatch(setAuthState({ isAuthenticated: true, user: data.user }));
      } catch (error) {
        dispatch(setAuthState({ isAuthenticated: false, user: null }));
      } finally {
        dispatch(setLoading(false));
      }
    }
    checkAuth();
  }, [dispatch]);

  return [isAuthenticated, loading];
}

export default useAuth