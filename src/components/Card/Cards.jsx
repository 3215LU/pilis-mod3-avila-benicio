import './Cards.css'
import Card from "./Card"

const Cards = ({cardsM, eliminarCard}) => {
    return(
        <div className="cards">
            {cardsM.map( (card) => (
                <Card key={card.id} card={card} eliminarCard={eliminarCard}/>
            ))}
        </div>
    );
}

export default Cards

// Math.floor(Math.random()*394)+79