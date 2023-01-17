import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Root, { loader as rootLoader } from './root'

export const rootRouter = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        loader: rootLoader,
        errorElement: <div>error</div>,
        children: [
            {
                errorElement: <div>error</div>,
                children: [
                    { index: true, element: <App /> },
                    // {
                    //   path: "project/:projectId",
                    //   element: <Projects />,
                    //   loader: projectLoader,
                    //   action: projectAction,
                    // },
                    // {
                    //   path: "about",
                    //   element: <About />,
                    //   loader: aboutLoader,
                    //   action: aboutAction,
                    // },
                ],
            },
        ],
    }
]);