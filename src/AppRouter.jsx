import { createBrowserRouter, RouterProvider } from "react-router"
import HomePage from "./features/pages/Home"

const router = createBrowserRouter([
    { path: '/', element: <HomePage /> },
   
])

export const RouterProviderApp = () => {
    return <RouterProvider router={router} />
}