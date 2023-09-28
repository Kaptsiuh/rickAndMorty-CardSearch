// import axios, { AxiosError, AxiosResponse } from 'axios';
import React from 'react';

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
}

// interface State {
//   cards: RequestOptions[];
//   loading: boolean;
//   error: AxiosError | null;
// }

// class Card extends React.Component<object, State> {
//   constructor(props: object) {
//     super(props);
//     this.state = {
//       cards: [],
//       loading: true,
//       error: null,
//     };
//   }

//   componentDidMount(): void {
//     axios
//       .get('https://rickandmortyapi.com/api/character/')
//       .then((data: AxiosResponse) => {
//         this.setState({
//           cards: data.data.results, // покрыть ts results
//           loading: false,
//           error: null,
//         });
//         console.log(data);
//       })
//       .catch((error: AxiosError) => {
//         this.setState({
//           cards: [],
//           loading: false,
//           error: error,
//         });
//       });
//   }

//   render() {
//     const { cards, loading, error } = this.state;

//     if (loading) {
//       return <div>Loading...</div>;
//     }

//     if (error) {
//       return <div>Error: {error.message}</div>;
//     }

//     return (
//       <div>
//         {cards.map((person: RequestOptions) => (
//           <div key={person.id}>
//             <a href={person.url}>
//               <img src={person.image} alt={`${person.name} Thumb`} />
//               <h3>{person.name}</h3>
//             </a>
//           </div>
//         ))}
//       </div>
//     );
//   }

const Card: React.FC = ({ value }) => {
  // const [rickAndMortyCards, setRickAndMortyCards] = React.useState([]);

  // React.useEffect(() => {
  //   axios.get('https://rickandmortyapi.com/api/character/').then((data) => {
  //     setRickAndMortyCards(data.data.results);
  //   });
  // }, []);

  return (
    <div>
      {value.map((person: RequestOptions) => {
        return (
          <div key={person.id}>
            <a href={person.url}>
              <img src={person.image} alt={`${person.name} Thumb`} />
              <h3>{person.name}</h3>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
