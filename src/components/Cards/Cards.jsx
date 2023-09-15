import { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";



const Cards = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('course-data.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])


    return (
        <div className="md: w-3/4 grid grid-cols-3 gap-5">
            {
                cards.map(card => <Card
                    key={card.id}
                    card={card}
                ></Card>)

            }

        </div>
    );
};

export default Cards;