import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";


const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
    { path: "/Signup", element: <Signup /> },
    { path: "/Login", element: <Login/> },
      
    ],
  },
];

export default routes;
