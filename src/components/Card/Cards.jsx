import './Cards.css'
import Card from "./Card"

const Cards = ({cardsM}) => {
    return(
        <div className="cards">
            {cardsM.map( (card) => (
                <Card key={card.id} card={card}/>
            ))}
        </div>
    );
}

export default Cards