import { Outlet, useLocation } from "react-router-dom";
import "./RootLayout.css";
import Header from "./Header";
import Footer from "./Footer";

function getPageClasses(pathname) {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return "page-home";
  }

  return [
    `page-${segments[0]}`,
    segments.length > 1 ? `page-${segments[0]}-detail` : null,
  ]
    .filter(Boolean)
    .join(" ");
}

export default function RootLayout({ children }) {
  const location = useLocation();
  const pageClasses = getPageClasses(location.pathname);

  return (
    <div className={`root-layout ${pageClasses}`}>
      <Header />
      <main>
        <Outlet />
        {children}
      </main>
      <Footer />
    </div>
  );
}
