// import axios from 'axios';
import React from 'react';
// import { useNavigate, useParams } from 'react-router-dom';

const defaultEndpoint = 'https://rickandmortyapi.com/api/character/';

export async function getServerSideProps() {
  const res = await fetch(defaultEndpoint);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

const Card: React.FC = ({ data }) => {
  //   const [card, setCard] = React.useState<{
  //     imageUrl: string;
  //     title: string;
  //     price: number;
  //   }>();
  //   // const { id } = useParams();
  //   const navigate = useNavigate();

  //   React.useEffect(() => {
  //     async function fetchCard() {
  //       try {
  //         const { data } = await axios.get(`https://rickandmortyapi.com/api/character/`);
  //         setCard(data);
  //       } catch (err) {
  //         navigate('/');
  //       }
  //     }

  //     fetchCard();
  //   }, []);

  //   if (!card) {
  //     return <>Loading...</>;
  //   }

  //   console.log(card);

  const { results } = data;

  return (
    <>
      <div>
        {results.map((result) => {
          const { id, name, image } = result;

          return (
            <li key={id}>
              <a href="">
                <img src={image} alt={`${name} Thumb`} />
                <h3>{name}</h3>
              </a>
            </li>
          );
        })}
      </div>
    </>
  );
};

export default Card;
