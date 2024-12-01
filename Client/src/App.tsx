import HomePage from "./pages/home/HomePage"
import "./App.css"
import { useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import type { ReactNode } from "react";
import ErrorPage from './pages/error/Error.tsx';
import AboutFullPage from './pages/aboutFull/AboutFullPage.tsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react"

const ScrollToTop = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return <>{children}</>;
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <ScrollToTop><HomePage /></ScrollToTop>,
    errorElement: <ErrorPage />,
  },
  {
    path: "about",
    element: <ScrollToTop><AboutFullPage /></ScrollToTop>,
  },
  {
    path: "/*",
    element: <h1 style={{ color: 'black' }}>Nothing here, go back!</h1>,
    errorElement: <ErrorPage />,
  },
]);


const App: React.FC = () => {
  return (
    <>
      <SpeedInsights />
      <RouterProvider router={router} />
    </>
  )
}

export default App
