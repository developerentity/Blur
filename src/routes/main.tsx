import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import Products, { loader as productsLoader } from "../components/Products";
import ErrorPage from "../components/ErrorPage";
import Projects from "../components/Projects";
import Root, { loader as rootLoader } from './root'

export const rootRouter = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        loader: rootLoader,
        errorElement: <ErrorPage />,
        children: [
            {
                errorElement: <ErrorPage />,
                children: [
                    {
                        index: true,
                        element: <Products />,
                        loader: productsLoader,
                    },
                    {
                        path: "projects",
                        element: <Projects />,
                        //   loader: projectLoader,
                        //   action: projectAction,
                    },
                    {
                        path: "about",
                        element: <About />,
                        //   loader: aboutLoader,
                        //   action: aboutAction,
                    },
                ],
            },
        ],
    }
]);