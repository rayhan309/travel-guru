import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import HomeCards from "../components/HomeCards";
import AllSkills from "../pages/AllSkills";

export const router = createBrowserRouter([
    {
        path: '/', 
        element: <HomeLayout />,
        children: [
            {
             index: true,
             element: <HomeCards />,
             loader: () => fetch('/skills.json')
            },
            {
                path: '/allskills',
                element: <AllSkills />,
                loader: () => fetch('/AllSkills.json')
            }
        ]
    }
]);