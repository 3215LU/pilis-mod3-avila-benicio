import './Home.css';
import Cards from '../../components/Card/Cards';
import { useContext, useEffect} from 'react';
import { CardsContext } from '../../context/CardsContext';

const Home = () => {
    const { cards, setCards, eliminarCard } = useContext( CardsContext )

    return (
        <div>
            <h1 className='text-center'>Este es el Home</h1>
            <div className='Home'>

            <Cards cardsM={cards}
                eliminarCard={eliminarCard}
            ></Cards>
            </div>
        </div>
      )
}

export default Home