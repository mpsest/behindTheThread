import "./RootLayout.css";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet></Outlet>
      </main>
      <Footer />
    </div>
  );
}
