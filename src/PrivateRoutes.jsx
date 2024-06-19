import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = ({ children }) => {
    const token = sessionStorage.getItem('token')
    let auth = {}    
      if(token){
        auth={'token':true}
      }
      else{
        auth={'token':false}
      }
    
  return (
      auth.token ? children  : <Navigate to='/admin/login'/>
    )
  }

  export default PrivateRoutes