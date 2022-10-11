import './Home.css';
import Cards from '../../components/Card/Cards';
import { useContext, useEffect} from 'react';
import { CardsContext } from '../../context/CardsContext';

const Home = () => {
    const { cards, setCards } = useContext( CardsContext )

    return (
        <div>
            <h1>Este es el Home</h1>
            <div className='Home'>

            <Cards cardsM={cards}></Cards>
            </div>
        </div>
      )
}

export default Home