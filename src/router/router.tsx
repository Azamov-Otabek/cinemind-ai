import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import Movies from "../pages/Movies/Movies";
import TvShows from "../pages/TvShows/TvShows";
import MyList from "../pages/MyList/MyList";
import Collections from "../pages/Collections/Collections";
import AiFinder from "../pages/AiFinder/AiFinder";
import Profile from "../pages/Profile/Profile";
import Settings from "../pages/Settings/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "movies",
        element: <Movies />,
      },

      {
        path: "tv-shows",
        element: <TvShows />,
      },

      {
        path: "my-list",
        element: <MyList />,
      },

      {
        path: "collections",
        element: <Collections />,
      },

      {
        path: "ai-finder",
        element: <AiFinder />,
      },

      {
        path: "profile",
        element: <Profile />,
      },

      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);
