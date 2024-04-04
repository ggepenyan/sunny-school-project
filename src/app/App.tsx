import AboutPageAsync from "@/pages/AboutPage/AboutPage.async";
import MainPageAsync from "@/pages/MainPage/MainPage.async";
import { Link, Route, Routes } from "react-router-dom";
import { Suspense } from "react";

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <nav className="bg-slate-200">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
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
