import axios from 'axios';
import React from 'react';

const src = 'https://rickandmortyapi.com/api/character/';

const Card: React.FC = () => {
  const [rickAndMortyCards, setRickAndMortyCards] = React.useState([]);

  React.useEffect(() => {
    axios.get(src).then((data) => {
      setRickAndMortyCards(data.data.results);
    });
  }, []);

  return (
    <>
      {rickAndMortyCards.map((person) => {
        return (
          <li key={person.id}>
            <a href={person.url}>
              <img src={person.image} alt={`${person.name} Thumb`} />
              <h3>{person.name}</h3>
            </a>
          </li>
        );
      })}
    </>
  );
};

export default Card;
