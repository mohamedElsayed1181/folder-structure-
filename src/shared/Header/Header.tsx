import { Link, useLocation } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import ToggleDarkAndLightModeButton from "@/components/ToggleDarkAndLightModeButton/ToggleDarkAndLightModeButton";
import Testlanguges from "@/components/LangugeButton/LangugeButton";

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 dark:bg-gray-500">
      <div className="container mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-2xl font-bold text-gray-800 dark:text-white">
          <FaGithub className="text-blue-600 dark:text-white" />
          GitHub Users
        </div>

        <nav className="flex flex-wrap gap-4 text-base font-medium">
          <Link
            to="/"
            className={`transition px-3 py-1 rounded ${
              isActive("/")
                ? "text-blue-600 border-b-2 border-blue-600 dark:text-white"
                : "text-gray-700 hover:text-blue-600 dark:text-white"
            }`}
          >
            Home
          </Link>
          <Link
            to="/favorites"
            className={`transition px-3 py-1 rounded ${
              isActive("/favorites")
                ? "text-blue-600 border-b-2 border-blue-600 dark:text-white"
                : "text-gray-700 hover:text-blue-600 dark:text-white"
            }`}
          >
            Favorites
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <ToggleDarkAndLightModeButton />
          <div className="w-fit">
            <Testlanguges />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
