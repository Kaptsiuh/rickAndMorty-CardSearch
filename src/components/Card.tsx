import axios from 'axios';
import React from 'react';

const src = 'https://rickandmortyapi.com/api/character/';

interface RequestOptions {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: {
    name: string;
    url: string;
  };
  name: string;
  origin: {
    name: string;
    url: string;
  };
  species: string;
  status: string;
  type: string;
  url: string;
} // перепроверить правильность, засунул в props конструктора и в map

class Card extends React.Component {
  constructor(props: RequestOptions) {
    super(props);
    this.state = {
      cards: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount(): void {
    axios
      .get(src)
      .then((data) => {
        this.setState({
          cards: data.data.results,
          loading: false,
          error: null,
        });
      })
      .catch((error) => {
        this.setState({
          cards: [],
          loading: false,
          error: error,
        });
      });
  }

  render() {
    const { cards, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return (
      <div>
        {cards.map((person: RequestOptions) => (
          <div key={person.id}>
            <a href={person.url}>
              <img src={person.image} alt={`${person.name} Thumb`} />
              <h3>{person.name}</h3>
            </a>
          </div>
        ))}
      </div>
    );
  }
}

// const src = 'https://rickandmortyapi.com/api/character/';

// const Card: React.FC = () => {
//   const [rickAndMortyCards, setRickAndMortyCards] = React.useState([]);

//   React.useEffect(() => {
//     axios.get(src).then((data) => {
//       setRickAndMortyCards(data.data.results);
//     });
//   }, []);

//   return (
//     <>
//       {rickAndMortyCards.map((person) => {
//         return (
//           <div key={person.id}>
//             <a href={person.url}>
//               <img src={person.image} alt={`${person.name} Thumb`} />
//               <h3>{person.name}</h3>
//             </a>
//           </div>
//         );
//       })}
//     </>
//   );
// };

export default Card;
