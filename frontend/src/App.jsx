import { useState } from "react";
import "./App.css";
import RootLayout from "./components/RootLayout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import Dashboard from "./pages/auth/Dashboard.jsx";
import Signup from "./pages/auth/signup.jsx";
import Login from "./pages/auth/login.jsx";
import ForgotPassword from "./pages/auth/ForgotPassword.jsx";
import ResetPassword from "./pages/auth/ResetPassword.jsx";
import BaseDados from "./pages/BaseDados/BaseDados.jsx";
import EspacosDetail from "./pages/BaseDados/EspacosDetail.jsx";
import { BaseDadosProvider } from "./contexts/BaseDadosContext.jsx";
import Error from "./pages/Error.jsx";
import Contactos from "./pages/Contactos.jsx";
import Artigos from "./pages/Artigos/Artigos.jsx";
import ArtigosDetail from "./pages/Artigos/ArtigosDetail.jsx";
import Designers from "./pages/Designers/Designers.jsx";
import DesignersDetail from "./pages/Designers/DesignersDetail.jsx";
import DirtyTalks from "./pages/DirtyTalks/DirtyTalks.jsx";
import DirtyTalksDetail from "./pages/DirtyTalks/DirtyTalksDetail.jsx";
import Misturas from "./pages/Misturas/Misturas.jsx";
import MisturasDetail from "./pages/Misturas/MisturasDetail.jsx";
import Users from "./pages/auth/Users.jsx";
import NovoConteudo from "./pages/auth/NovoConteudo.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: (
        <RootLayout>
          <Error />
        </RootLayout>
      ),
      children: [
        { path: "/dashboard", element: <Dashboard /> },
        { path: "/misturas", element: <Misturas /> },
        { path: "/misturas/:id", element: <MisturasDetail /> },
        { path: "/signup", element: <Signup /> },
        { path: "/login", element: <Login /> },
        { path: "/recuperar-password", element: <ResetPassword /> },
        { path: "/esqueci-password", element: <ForgotPassword /> },
        { path: "/contactos", element: <Contactos /> },
        { path: "/basededados", element: <BaseDados /> },
        { path: "/artigos", element: <Artigos /> },
        { path: "/artigos/:id", element: <ArtigosDetail /> },
        { path: "/conteudo/novo", element: <NovoConteudo /> },
        { path: "/dirtytalks", element: <DirtyTalks /> },
        { path: "/dirtytalks/:id", element: <DirtyTalksDetail /> },
        { path: "/designers", element: <Designers /> },
        { path: "/designers/:id", element: <DesignersDetail /> },
        { path: "/users", element: <Users /> },
        { path: "/utilizadores", element: <Users /> },
        {
          path: "/basededados/espacos/:type",
          element: <EspacosDetail />,
        },
      ],
    },
  ]);

  return (
    <AuthProvider>
      <BaseDadosProvider>
        <RouterProvider router={router} />
      </BaseDadosProvider>
    </AuthProvider>
  );
}

export default App;
