import "./Sidebar.scss";
import { NavLink } from "react-router-dom";
import {
  House,
  Film,
  Tv,
  Library,
  Clapperboard,
  Sparkles,
  User,
  Settings,
  LogOut
} from "lucide-react";

const navigation = [
  {
    title: "Home",
    path: "/",
    icon: House,
    end: true,
  },
  {
    title: "Movies",
    path: "/movies",
    icon: Film,
  },
  {
    title: "Tv Shows",
    path: "/tv-shows",
    icon: Tv,
  },
  {
    title: "My List",
    path: "/my-list",
    icon: Library,
  },
  {
    title: "Collections",
    path: "/collections",
    icon: Clapperboard,
  },
  {
    title: "AI Finder",
    path: "/ai-finder",
    icon: Sparkles,
  },
];

const secondaryNavigation = [
  {
    title: "Profile",
    path: "/profile",
    icon: User,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div>
        <div className="sidebar__logo">
          <span>CineMind</span>
          <strong>AI</strong>
        </div>

        <nav className="sidebar__navigation">
          {navigation.map(({ title, path, icon: Icon, end }) => {
            return (
              <NavLink
                className={"sidebar-link"}
                to={path}
                key={path}
                end={end}
              >
                <Icon size={19} /> {title}
              </NavLink>
            );
          })}
        </nav>

        <div className="sidebar__divider"></div>

        <nav className="sidebar__navigation">
          {secondaryNavigation.map(({ title, path, icon: Icon }) => {
            return (
              <NavLink className={"sidebar-link"} to={path} key={path}>
                <Icon size={19} /> {title}
              </NavLink>
            );
          })}
        </nav>
      </div>

      <button className="logout-btn"><LogOut/> Logout</button>
    </aside>
  );
};

export default Sidebar;
