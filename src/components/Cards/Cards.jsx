import { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";
import PropTypes from 'prop-types';




const Cards = ({handleToSelectCourse}) => {
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
                    handleToSelectCourse={handleToSelectCourse}
                ></Card>)

            }

        </div>
    );
};

Cards.propTypes = {
    handleToSelectCourse: PropTypes.func
}

export default Cards;