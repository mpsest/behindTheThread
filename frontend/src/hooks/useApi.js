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
