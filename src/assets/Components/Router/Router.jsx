import { createBrowserRouter } from "react-router-dom";
import Home from "../Root/Home/Home";
import Root from "../Root/Root";
import ListedBooks from "../ListedBooks/ListedBooks";
import PageToRead from "../PageToRead/PageToRead";
import About from "../About/About";
import Contact from "../Contact/Contact";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
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
        }
      ]
    },
  ]);

export default router;