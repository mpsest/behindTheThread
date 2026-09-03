import { useState } from "react";
import "./App.css";
import RootLayout from "./components/RootLayout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import Dashboard from "./pages/auth/Dashboard.jsx";
import Signup from "./pages/auth/signup.jsx";
import Login from "./pages/auth/login.jsx";
import BaseDados from "./pages/BaseDados/BaseDados.jsx";
import FornecedoresDetail from "./pages/BaseDados/FornecedoresDetail.jsx";
import { BaseDadosProvider } from "./contexts/BaseDadosContext.jsx";
import Error from "./pages/Error.jsx";
import Contactos from "./pages/Contactos.jsx";
import Artigos from "./pages/Artigos/Artigos.jsx";
import ArtigosDetail from "./pages/Artigos/ArtigosDetail.jsx";
import Designers from "./pages/Designers.jsx";
import DirtyTalks from "./pages/DirtyTalks.jsx";
import Misturas from "./pages/Misturas/Misturas.jsx";
import MisturasDetail from "./pages/Misturas/MisturasDetail.jsx";
import Users from "./pages/auth/Users.jsx";
import NovoConteudo from "./pages/auth/NovoConteudo.jsx";
import EmailsNewsletter from "./pages/auth/EmailsNewsletter.jsx";
import MisturasPendentes from "./pages/auth/MisturasPendentes.jsx";

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
        { path: "/misturas/pendentes", element: <MisturasPendentes /> },
        { path: "/misturas/:id", element: <MisturasDetail /> },
        { path: "/signup", element: <Signup /> },
        { path: "/login", element: <Login /> },
        { path: "/contactos", element: <Contactos /> },
        { path: "/basededados", element: <BaseDados /> },
        { path: "/artigos", element: <Artigos /> },
        { path: "/artigos/:id", element: <ArtigosDetail /> },
        { path: "/conteudo/novo", element: <NovoConteudo /> },
        { path: "/dirtytalks", element: <DirtyTalks /> },
        { path: "/designers", element: <Designers /> },
        { path: "/users", element: <Users /> },
        { path: "/newsletter/emails", element: <EmailsNewsletter /> },
        
        {
          path: "/basededados/fornecedores/:type",
          element: <FornecedoresDetail />,
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
