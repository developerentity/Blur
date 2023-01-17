import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../components/About";
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
                    { index: true, element: <App /> },
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