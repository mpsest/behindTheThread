import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext.jsx";

export const BaseDadosContext = createContext();

const EMPTY_BASE_DADOS = {
  Espacos: {},
  Ferramentas: {},
  Conteudos: {},
};

const RESOURCES = [
  ["Espacos", "api/espacos"],
  ["Ferramentas", "api/ferramentas"],
  ["Conteudos", "api/conteudos"],
];

function groupByCategoria(items) {
  return items.reduce((groups, item) => {
    const categoria = item.categoria?.trim() || "Sem categoria";
    return {
      ...groups,
      [categoria]: [...(groups[categoria] ?? []), item],
    };
  }, {});
}

export const BaseDadosProvider = ({ children }) => {
  const { makeRequest } = useContext(AuthContext);
  const [baseDados, setBaseDados] = useState(EMPTY_BASE_DADOS);
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
          return [key, groupByCategoria(Array.isArray(data) ? data : [])];
        }),
      );

      setBaseDados({
        ...EMPTY_BASE_DADOS,
        ...Object.fromEntries(responses),
      });
    } catch (err) {
      setError(err.message);
      setBaseDados(EMPTY_BASE_DADOS);
    } finally {
      setLoading(false);
    }
  }, [makeRequest]);

  useEffect(() => {
    fetchBaseDados();
  }, [fetchBaseDados]);

  return (
    <BaseDadosContext.Provider
      value={{ ...baseDados, loading, error, refetch: fetchBaseDados }}
    >
      {children}
    </BaseDadosContext.Provider>
  );
};
