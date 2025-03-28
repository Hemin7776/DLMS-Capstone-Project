import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
import { publicRoute, adminRoutes, EmployeeRoutes } from "./routes";
import Notfound from "../Pages/Notfound/Notfound";

const RoleBasedRouter = () => {
  const role = useSelector((state) => state.user?.data?.Role);
  const [router, setRouter] = useState(null);

  useEffect(() => {
    let routes = publicRoute;

    if (role === "Admin") {
      routes = adminRoutes;
    } else if (role === "Employee") {
      routes = EmployeeRoutes;
    }

    setRouter(
      createBrowserRouter([...routes, { path: "*", element: <Notfound /> }])
    );
  }, [role]);

  if (!router) return <div>Loading...</div>;

  return <RouterProvider router={router} />;
};

export default RoleBasedRouter;
