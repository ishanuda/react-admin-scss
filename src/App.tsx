import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import './styles/global.scss'

import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/login/Login";

import Menu from "./components/Menu/Menu";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Footer from "./components/Footer/Footer";

function App() {

  const Layout = () => {
    
    return (
      <div className="main">

        <Navbar />

        <div className="container">
          <div className="menu-container">
            <Menu />
          </div>
          <div className="content-container">
            <Outlet />
          </div>
        </div>

        <Footer />
        
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "products",
          element: <Products />,
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
