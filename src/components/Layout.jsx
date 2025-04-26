import { Link, Outlet } from "react-router";
import { useUserContext } from "../hooks/contextHooks";
import { useEffect } from "react";

const Layout = () => {
  const { user, handleAutoLogin } = useUserContext();
  
  useEffect(() => {
    handleAutoLogin();
  }, []);
  
  return (
   <div>
      <nav>
        <ul className="flex overflow-hidden items-center rounded-sm w-fit">
          <li>
            <Link className="block text-white p-4 hover:[background-color:#111738] duration-250 font-bold" to="/">Home</Link>
          </li>
          {user ? (
              <>
                <li>
                  <Link className="block text-white p-4 hover:[background-color:#111738] duration-250 font-bold" to="/profile">Profile</Link>
                </li>
                <li>
                  <Link className="block text-white p-4 hover:[background-color:#111738] duration-250 font-bold" to="/upload">Upload</Link>
                </li>
                <li>
                  <Link className="block text-white p-4 hover:[background-color:#111738] duration-250 font-bold" to="/logout">Logout</Link>
                </li>
              </>
            ) : (
              <li>
                <Link className="block text-white p-4 hover:[background-color:#111738] duration-250 font-bold" to="/login">Login</Link>
              </li>
            )}
        </ul>
      </nav>
      <main>
         <Outlet />
      </main>
   </div>
  );
}

export default Layout;