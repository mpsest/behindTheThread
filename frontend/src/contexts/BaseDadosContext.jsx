import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext.jsx";

export const BaseDadosContext = createContext();

const INITIAL_BASE_DADOS = {
  Espacos: {
    Confeção: [],
    Tecidos: [],
    Malhas: [],
    Acessórios: [],
    Transformações: [],
    Armazéns: [],
    Feiras: [],
    Museus: [],
    Lojas: [],
  },

  Ferramentas: {
    Tipografia: [],
    Cor: [],
    Ilustração: [],
    Imagens: [],
    Mockups: [],
    "3D": [],
    Vídeos: [],
    Texturas: [],
    Softwares: [],
    Organização: [],
    Escrita: [],
    Som: [],
  },

  Conteudos: {
    Livros: [],
    Filmes: [],
    Séries: [],
    Blogs: [],
    Revistas: [],
    Inspiração: [],
    Podcasts: [],
    Teatro: [],
    Youtube: [],
  },
};

const RESOURCES = [
  ["Espacos", "api/espacos"],
  ["Ferramentas", "api/ferramentas"],
  ["Conteudos", "api/conteudos"],
];

function groupByCategoria(items, initialCategories) {
  const groups = Object.fromEntries(
    Object.keys(initialCategories).map((categoria) => [
      categoria,
      [],
    ]),
  );

  items.forEach((item) => {
    const categoria = item.categoria?.trim();

    if (!categoria) {
      return;
    }

    if (!groups[categoria]) {
      groups[categoria] = [];
    }

    groups[categoria].push(item);
  });

  return groups;
}

export const BaseDadosProvider = ({ children }) => {
  const { makeRequest } = useContext(AuthContext);

  const [baseDados, setBaseDados] = useState(INITIAL_BASE_DADOS);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBaseDados = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const responses = await Promise.all(
        RESOURCES.map(async ([key, endpoint]) => {
          const response = await makeRequest(endpoint);

          if (!response.ok) {
            throw new Error(`Erro ao carregar ${endpoint}`);
          }

          const data = await response.json();

          return [
            key,
            groupByCategoria(
              Array.isArray(data) ? data : [],
              INITIAL_BASE_DADOS[key],
            ),
          ];
        }),
      );

      setBaseDados(
        Object.fromEntries(responses),
      );
    } catch (err) {
      console.error("Erro ao carregar Base de Dados:", err);

      setError(err.message);
      setBaseDados(INITIAL_BASE_DADOS);
    } finally {
      setLoading(false);
    }
  }, [makeRequest]);

  useEffect(() => {
    fetchBaseDados();
  }, [fetchBaseDados]);

  return (
    <BaseDadosContext.Provider
      value={{
        ...baseDados,
        loading,
        error,
        refetch: fetchBaseDados,
      }}
    >
      {children}
    </BaseDadosContext.Provider>
  );
};