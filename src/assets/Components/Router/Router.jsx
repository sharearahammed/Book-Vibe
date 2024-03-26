import { createBrowserRouter } from "react-router-dom";
import Home from "../Root/Home/Home";
import Root from "../Root/Root";
import ListedBooks from "../ListedBooks/ListedBooks";
import PageToRead from "../PageToRead/PageToRead";
import About from "../About/About";
import Contact from "../Contact/Contact";
import ViewBookDetails from "../Books/ViewBookDetails";
import ErrorPage from "../404/ErrorPage";

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
            element: <ListedBooks></ListedBooks>
        },
        {
            path:"/pagetoread",
            element: <PageToRead></PageToRead>
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
        }
      ]
    },
  ]);

export default router;