import AboutPageAsync from "@/pages/AboutPage/AboutPage.async";
import MainPageAsync from "@/pages/MainPage/MainPage.async";
import { Link, Route, Routes } from "react-router-dom";
import {Suspense, useState} from "react";
import useTheme from "@/hooks/useTheme";
import {Theme} from "@/context/ThemeProvider.tsx";

const App = () => {
  const { mode, setMode } = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const changeMode = (mode: Theme) => {
    setMode(mode);
    setIsDropdownOpen(false);
  }

  return (
    <div className="flex flex-col h-screen">
      <nav className="bg-slate-200 dark:bg-slate-500">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex items-center justify-between">
          <img src="https://placeholder.pics/svg/150x50/888888/EEE/Logo" alt="logo" height="36" />
          <div className="flex items-center justify-between h-16">
            <div className="flex">
              <Link
                to="/"
                className="text-zinc-600 px-3 py-2 rounded-md text-md font-semibold"
              >
                Main
              </Link>
              <Link
                to="/about"
                className="text-zinc-600 px-3 py-2 rounded-md text-md font-semibold"
              >
                About
              </Link>
            </div>
          </div>
          <div className="relative">
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
              onClick={() => setIsDropdownOpen(prev => !prev)}
            >
              Change Theme ({mode.toUpperCase()})
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun-moon">
                <path d="M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4"/>
                <path d="M12 2v2"/>
                <path d="M12 20v2"/>
                <path d="m4.9 4.9 1.4 1.4"/>
                <path d="m17.7 17.7 1.4 1.4"/>
                <path d="M2 12h2"/>
                <path d="M20 12h2"/>
                <path d="m6.3 17.7-1.4 1.4"/>
                <path d="m19.1 4.9-1.4 1.4"/>
              </svg>
            </button>
            <div id="dropdown" className={`absolute z-10 ${isDropdownOpen ? '' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li onClick={() => changeMode("light")}>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Light</a>
                </li>
                <li onClick={() => changeMode("dark")}>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dark</a>
                </li>
                <li onClick={() => changeMode("system")}>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">System</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex-grow py-5">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<MainPageAsync />} />
            <Route path="/about" element={<AboutPageAsync />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
