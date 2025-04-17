import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Features from "../Pages/Features";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Dashboard from "../Pages/AdminPanel";
import EmployeePage from "../Pages/AdminPanel/Employee";
import AdminSettings from "../Pages/AdminPanel/AdminSettings";
import AdminProfile from "../Pages/AdminPanel/Adminprofile";
import DiamondDepartment from "../Pages/AdminPanel/Sales";
import Employeepanel from "../Pages/EmployeePanel";
import Notfound from "../Pages/Notfound/Notfound";
import Inventory from "../Pages/AdminPanel/Inventory";
import EmployeeInventory from "../Pages/EmployeeInventory";
import EmployeeProfile from "../Pages/EmployeePanel/Employeeprofile";

export const publicRoute = [
  { path: "/", element: <Home /> },
  { path: "/About", element: <About /> },
  { path: "/Contact", element: <Contact /> },
  { path: "/Features", element: <Features /> },
  { path: "/Login", element: <Login /> },
  { path: "/Signup", element: <Signup /> },
  { path: "*", element: <Notfound /> },
];

export const adminRoutes = [
  { path: "/Adminpanel", element: <Dashboard /> },
  { path: "/Adminpanel/Employee", element: <EmployeePage /> },
  { path: "/Adminpanel/Diamond", element: <Inventory /> },
  { path: "/Adminpanel/Settings", element: <AdminSettings /> },
  { path: "/profile", element: <AdminProfile /> },
  { path: "/Adminpanel/Department", element: <DiamondDepartment /> },
  { path: "*", element: <Notfound /> },
];

// ✅ Employee routes
export const EmployeeRoutes = [
  { path: "/Employeepanel", element: <Employeepanel /> },
  { path: "/Employee/profile", element: <EmployeeProfile /> },
  { path: "/EmployeePanel/Diamond", element: <EmployeeInventory /> },

  { path: "*", element: <Notfound /> },
];
