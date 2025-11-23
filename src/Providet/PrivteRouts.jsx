import { use } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivteRouts = ({children}) => {

    const {user, loading} = use(AuthContext);
    const location = useLocation();
    // console.log(location)

    if(loading) {
      return  <p>Loading.....</p>
    }

    else if(user) {
        return children
    }

    return <Navigate state={location?.pathname} to={'/authlayout'}></Navigate>
};

export default PrivteRouts;