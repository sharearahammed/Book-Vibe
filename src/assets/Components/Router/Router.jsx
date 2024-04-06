import { createBrowserRouter } from "react-router-dom";
import Home from "../Root/Home/Home";
import Root from "../Root/Root";
import ListedBooks from "../ListedBooks/ListedBooks";
import PageToRead from "../PageToRead/PageToRead";
import About from "../About/About";
import Contact from "../Contact/Contact";
import ViewBookDetails from "../Books/ViewBookDetails";
import ErrorPage from "../404/ErrorPage";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PrivatePortes from "../PrivatePortes/PrivatePortes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:"/",
          element: <Home></Home>
        },
        {
            path:"/listedbooks",
            element: <PrivatePortes><ListedBooks></ListedBooks></PrivatePortes> 
        },
        {
            path:"/pagetoread",
            element: <PrivatePortes><PageToRead></PageToRead></PrivatePortes>
        },
        {
            path:"/about",
            element: <About></About>
        },
        {
            path:"/contact",
            element: <Contact></Contact>
        },
        {
            path:"/viewBookDetails/:id",
            element:<ViewBookDetails></ViewBookDetails>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        }
      ]
    },
  ]);

export default router;