import { createContext, useState } from "react";

export const CardsContext = createContext({
  cards: [],
  setCards: () => {}
})

export const CardsProvider = ({ children }) => {
  const [cards, setCards] = useState([]);

  const eliminarCard=(id)=>{
    const listaFiltrada =cards.filter((card)=> card.id !== id);
        setCards(listaFiltrada);
    };


  const value = { cards, setCards, eliminarCard };

  return <CardsContext.Provider value={value}>{children}</CardsContext.Provider>;
}