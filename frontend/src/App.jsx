import "./App.css";
import RootLayout from "./components/RootLayout.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { AuthContext, AuthProvider } from "./contexts/AuthContext.jsx";
import Dashboard from "./pages/auth/Dashboard.jsx";
import Signup from "./pages/auth/signup.jsx";
import Login from "./pages/auth/login.jsx";
import ForgotPassword from "./pages/auth/ForgotPassword.jsx";
import ResetPassword from "./pages/auth/ResetPassword.jsx";
import BaseDados from "./pages/BaseDados/BaseDados.jsx";
import BaseDadosDetail from "./pages/BaseDados/BaseDadosDetail.jsx";
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
import EditarConteudo from "./pages/auth/EditarConteudo.jsx";
import EmailsNewsletter from "./pages/auth/EmailsNewsletter.jsx";
import MisturasPendentes from "./pages/auth/MisturasPendentes.jsx";
import EditarMistura from "./pages/auth/EditarMistura.jsx";
import { useContext, useEffect } from "react";

function UserRoute({ children }) {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
  }, [user]);

  if (!user) {
    return;
  }
  return <>{children}</>;
}

function BaseDadosRoute({ children }) {
  return <BaseDadosProvider>{children}</BaseDadosProvider>;
}

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
        {
          path: "/dashboard",
          element: (
            <UserRoute>
              <Dashboard />
            </UserRoute>
          ),
        },
        { path: "/misturas", element: <Misturas /> },
        {
          path: "/misturas/pendentes",
          element: (
            <UserRoute>
              <MisturasPendentes />
            </UserRoute>
          ),
        },
        { path: "/misturas/:id", element: <MisturasDetail /> },
        {
          path: "/misturas/:id/editar",
          element: (
            <UserRoute>
              <EditarMistura />
            </UserRoute>
          ),
        },
        {
          path: "/signup",
          element: (
            <UserRoute>
              <Signup />
            </UserRoute>
          ),
        },
        { path: "/login", element: <Login /> },
        { path: "/recuperar-password", element: <ResetPassword /> },
        { path: "/esqueci-password", element: <ForgotPassword /> },
        { path: "/contactos", element: <Contactos /> },
        {
          path: "/basededados",
          element: (
            <BaseDadosRoute>
              <BaseDados />
            </BaseDadosRoute>
          ),
        },
        { path: "/artigos", element: <Artigos /> },
        { path: "/artigos/:id", element: <ArtigosDetail /> },
        {
          path: "/conteudo/novo",
          element: (
            <UserRoute>
              <NovoConteudo />
            </UserRoute>
          ),
        },
        {
          path: "/conteudo/:tipo/:id/editar",
          element: (
            <UserRoute>
              <EditarConteudo />
            </UserRoute>
          ),
        },
        { path: "/dirtytalks", element: <DirtyTalks /> },
        { path: "/dirtytalks/:id", element: <DirtyTalksDetail /> },
        { path: "/designers", element: <Designers /> },
        { path: "/designers/:id", element: <DesignersDetail /> },
        {
          path: "/users",
          element: (
            <UserRoute>
              <Users />
            </UserRoute>
          ),
        },
        {
          path: "/newsletter/emails",
          element: (
            <UserRoute>
              <EmailsNewsletter />
            </UserRoute>
          ),
        },

        {
          path: "/basededados/:resource/:type",
          element: (
            <BaseDadosRoute>
              <BaseDadosDetail />
            </BaseDadosRoute>
          ),
        },
      ],
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
