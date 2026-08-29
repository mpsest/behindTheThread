import { createContext, useEffect, useState } from "react";

export const BaseDadosContext = createContext();

const BASE_DADOS = {
  Fornecedores: {
    Confeção: [
      {
        name: "Petratex",
        url: "https://www.petratex.com/",
        email: "petratex@petratex.com",
        location: "Paços de Ferreira, Portugal",
      },
      {
        name: "Bla bla",
        url: "https://www.blabla.com/",
        email: "blabla@bla.com",
        location: "Algures, Portugal",
      },
    ],
    Tecidos: [
      {
        name: "Petratex",
        url: "https://www.petratex.com/",
        email: "petratex@petratex.com",
        location: "Paços de Ferreira, Portugal",
      },
    ],
    Malhas: [
      {
        name: "Petratex",
        url: "https://www.petratex.com/",
        email: "petratex@petratex.com",
        location: "Paços de Ferreira, Portugal",
      },
    ],
    Acessórios: [
      {
        name: "Petratex",
        url: "https://www.petratex.com/",
        email: "petratex@petratex.com",
        location: "Paços de Ferreira, Portugal",
      },
    ],
    Transformações: [
      {
        name: "Petratex",
        url: "https://www.petratex.com/",
        email: "petratex@petratex.com",
        location: "Paços de Ferreira, Portugal",
      },
    ],
    Armazéns: [
      {
        name: "Petratex",
        url: "https://www.petratex.com/",
        email: "petratex@petratex.com",
        location: "Paços de Ferreira, Portugal",
      },
    ],
    Feiras: [
      {
        name: "Petratex",
        url: "https://www.petratex.com/",
        email: "petratex@petratex.com",
        location: "Paços de Ferreira, Portugal",
      },
    ],
    Museus: [
      {
        name: "Petratex",
        url: "https://www.petratex.com/",
        email: "petratex@petratex.com",
        location: "Paços de Ferreira, Portugal",
      },
    ],
    Museus2: [
      {
        name: "Petratex",
        url: "https://www.petratex.com/",
        email: "petratex@petratex.com",
        location: "Paços de Ferreira, Portugal",
      },
    ],
  },
};

export const BaseDadosProvider = ({ children }) => {
  return (
    <BaseDadosContext.Provider value={BASE_DADOS}>
      {children}
    </BaseDadosContext.Provider>
  );
};
