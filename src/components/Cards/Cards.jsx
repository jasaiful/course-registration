import { useState } from "react";
import { useEffect } from "react";


const Cards = () => {
    const [cards, setCards] = useState([]);

    useEffect(()=>{
        fetch('course-data.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])


    return (
        <div>
            
        </div>
    );
};

export default Cards;