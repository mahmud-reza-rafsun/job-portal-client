import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Register from "../Authentication/Register";
import SignIn from "../Authentication/SignIn";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <h2>Error pages</h2>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/sign-in',
                element: <SignIn />
            }
        ]
    }
])

export default router;