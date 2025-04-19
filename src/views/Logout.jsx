import { useEffect } from "react";
import { useUserContext } from "../hooks/contextHooks";

const Logout = () => {
    const { handleLogout } = useUserContext();
    
    useEffect(() => {
        handleLogout();
    }, []);

    return <p>Logout page here</p>;
};
  
export default Logout;