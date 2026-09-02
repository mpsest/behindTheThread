import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext.jsx";

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
