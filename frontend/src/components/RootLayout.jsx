import { Outlet, useLocation } from "react-router-dom";
import "./RootLayout.css";
import Header from "./Header";
import Footer from "./Footer";

export default function RootLayout({ children }) {
  const location = useLocation();

  return (
    <div className={`root-layout page-${location.pathname.slice(1)}`}>
      <Header />
      <main>
        <Outlet />
        {children}
      </main>
      <Footer />
    </div>
  );
}
