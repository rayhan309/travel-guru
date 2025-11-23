import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import HomeCards from "../components/HomeCards";
import AllSkills from "../pages/AllSkills";
import DitailesLayout from "../Layouts/DitailesLayout";
import SkillDitailes from "../components/SkillDitailes";
import Singin from "../pages/Singin";
import AuthLayout from "../Layouts/AuthLayout";
import SignUp from "../pages/SignUp";
import UserProfile from "../pages/UserProfile";
import PrivteRouts from "../Providet/PrivteRouts";
import Inrole from "../pages/Inrole";
import Loader from "../components/Loader";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomeCards />,
        hydrateFallbackElement: <Loader />,
        loader: () => fetch("/skills.json"),
      },
      {
        path: "/allskills",
        element: <AllSkills />,
        hydrateFallbackElement: <Loader />,
        loader: () => fetch("/AllSkills.json"),
      },
      {
        path: '/profile',
        element: <PrivteRouts>
          <UserProfile />
        </PrivteRouts>
      }
    ],
  },
  {
    path: "/skillsDitailes",
    element: <DitailesLayout />,
    children: [
      {
        path: "/skillsDitailes/:id",
        element: <PrivteRouts>
          <SkillDitailes />
        </PrivteRouts>,
        hydrateFallbackElement: <Loader />,
        loader: () => fetch("/AllSkills.json"),
      },
    ],
  },
  {
    path: "/authlayout",
    element: <AuthLayout />,
    children: [
        {
            index: true,
            element: <Singin />
        },
        {
            path: "signup", 
            element: <SignUp />
        },
    ]
  },
  {
    path: '/inrole',
    element: <PrivteRouts>
      <Inrole />
    </PrivteRouts>
  } 
]);
