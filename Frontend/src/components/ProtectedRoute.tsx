import Redirect from "./Redirect"

type ProtectedRouteType = {
    children: React.ReactNode,
    isAuthenticated: boolean,
}

const ProtectedRoute = ({ children, isAuthenticated }: ProtectedRouteType) => {
  if(!isAuthenticated) {
    return <Redirect />;
  }

  return (
    <>{children}</>
  )
}

export default ProtectedRoute