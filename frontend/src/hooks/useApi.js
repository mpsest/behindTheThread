import { useState, useEffect, useContext, useCallback } from "react";
import { AuthContext } from "../contexts/AuthContext.jsx";

export function useHomeLatest() {
  const [latest, setLatest] = useState({
    dirtyTalks: [],
    artigos: [],
    designers: [],
    misturas: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { makeRequest } = useContext(AuthContext);

  useEffect(() => {
    async function fetchLatest() {
      setLoading(true);
      setError(null);

      try {
        const response = await makeRequest("api/home/latest");

        if (!response.ok) {
          throw new Error("Erro ao carregar a homepage");
        }

        const data = await response.json();
        setLatest({
          dirtyTalks: Array.isArray(data.dirtyTalks) ? data.dirtyTalks : [],
          artigos: Array.isArray(data.artigos) ? data.artigos : [],
          designers: Array.isArray(data.designers) ? data.designers : [],
          misturas: Array.isArray(data.misturas) ? data.misturas : [],
        });
      } catch (err) {
        setError(err.message);
        setLatest({ dirtyTalks: [], artigos: [], designers: [], misturas: [] });
      } finally {
        setLoading(false);
      }
    }

    fetchLatest();
  }, [makeRequest]);

  return { latest, loading, error };
}

export function useArtigos() {
  const [artigos, setArtigos] = useState([]);
  const { makeRequest } = useContext(AuthContext);

  useEffect(() => {
    async function fetchArtigos() {
      const response = await makeRequest("api/artigos");
      const data = await response.json();
      setArtigos(data);
    }

    fetchArtigos();
  }, [makeRequest]);

  return artigos;
}

export function useArtigo(artigoId) {
  const [artigo, setArtigo] = useState(null);
  const { makeRequest } = useContext(AuthContext);

  useEffect(() => {
    async function fetchArtigo() {
      const response = await makeRequest(`api/artigos/${artigoId}`);
      const data = await response.json();
      setArtigo(data);
    }

    fetchArtigo();
  }, [makeRequest, artigoId]);

  return artigo;
}

export function useDirtyTalks() {
  const [dirtyTalks, setDirtyTalks] = useState([]);
  const { makeRequest } = useContext(AuthContext);

  useEffect(() => {
    async function fetchDirtyTalks() {
      const response = await makeRequest("api/dirty-talks");
      const data = await response.json();
      setDirtyTalks(data);
    }

    fetchDirtyTalks();
  }, [makeRequest]);

  return dirtyTalks;
}

export function useDirtyTalk(dirtyTalkId) {
  const [dirtyTalk, setDirtyTalk] = useState(null);
  const { makeRequest } = useContext(AuthContext);

  useEffect(() => {
    async function fetchDirtyTalk() {
      const response = await makeRequest(`api/dirty-talks/${dirtyTalkId}`);
      const data = await response.json();
      setDirtyTalk(data);
    }

    fetchDirtyTalk();
  }, [makeRequest, dirtyTalkId]);

  return dirtyTalk;
}

export function useDesigners() {
  const [designers, setDesigners] = useState([]);
  const { makeRequest } = useContext(AuthContext);

  useEffect(() => {
    async function fetchDesigners() {
      const response = await makeRequest("api/designers");
      const data = await response.json();
      setDesigners(data);
    }

    fetchDesigners();
  }, [makeRequest]);

  return designers;
}

export function useDesigner(designerId) {
  const [designer, setDesigner] = useState(null);
  const { makeRequest } = useContext(AuthContext);

  useEffect(() => {
    async function fetchDesigner() {
      const response = await makeRequest(`api/designers/${designerId}`);
      const data = await response.json();
      setDesigner(data);
    }

    fetchDesigner();
  }, [makeRequest, designerId]);

  return designer;
}

export function useMisturas() {
  const [misturas, setMisturas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { makeRequest } = useContext(AuthContext);

  const fetchMisturas = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await makeRequest("api/misturas");

      if (!response.ok) {
        throw new Error("Erro ao carregar misturas");
      }

      const data = await response.json();
      setMisturas(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err.message);
      setMisturas([]);
    } finally {
      setLoading(false);
    }
  }, [makeRequest]);

  useEffect(() => {
    fetchMisturas();
  }, [fetchMisturas]);

  return { misturas, loading, error, refetch: fetchMisturas };
}

export function useMisturasPendentes() {
  const [pendentes, setPendentes] = useState([]);
  const { makeRequest } = useContext(AuthContext);

  const refetch = useCallback(async () => {
    const response = await makeRequest("api/misturas/pendentes");
    if (!response.ok) {
      setPendentes([]);
      return;
    }
    const data = await response.json();
    setPendentes(Array.isArray(data) ? data : []);
  }, [makeRequest]);

  useEffect(() => { refetch(); }, [refetch]);

  return { pendentes, refetch };
}

export function useMisturasNaoLidas() {
  const [total, setTotal] = useState(0);
  const { makeRequest } = useContext(AuthContext);

  useEffect(() => {
    async function fetchCount() {
      const response = await makeRequest("api/misturas/nao-lidas/count");
      const data = await response.json();
      setTotal(data.total ?? 0);
    }
    fetchCount();
  }, [makeRequest]);

  return total;
}

export function useMistura(id) {
  const [mistura, setMistura] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { makeRequest } = useContext(AuthContext);

  const fetchMistura = useCallback(async (misturaId) => {
    setLoading(true);
    setError(null);

    try {
      const response = await makeRequest(`api/misturas/${misturaId}`);

      if (!response.ok) {
        throw new Error("Erro ao carregar mistura");
      }

      const data = await response.json();
      setMistura(data);
    } catch (err) {
      setError(err.message);
      setMistura();
    } finally {
      setLoading(false);
    }
  }, [makeRequest]);

  useEffect(() => {
    fetchMistura(id);
  }, [fetchMistura, id]);

  return { mistura, loading, error };
}
