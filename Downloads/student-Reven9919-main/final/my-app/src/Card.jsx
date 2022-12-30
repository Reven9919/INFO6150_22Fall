import './Card.css';
import cardData from './cardData';

function Card() {
    const cardList = cardData.map( item => {
        return (
            <div className="card">
                <h2 className="card__title">{item.title}</h2>
                <img className="card__pic" 
                    src={item.imgSrc}
                    alt={item.imgAlt}/>
                <p className = "card__text">{item.description}</p>
            </div>
        );
    });

    return(
        <div className="cards">
            {cardList}
        </div>
    );
};

  
export default Card;