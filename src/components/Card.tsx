import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// const defaultEndpoint = 'https://rickandmortyapi.com/api/character/';

// eslint-disable-next-line react-refresh/only-export-components
// export async function getServerSideProps() {
//   const res = await fetch(defaultEndpoint);
//   const data = await res.json();
//   return {
//     props: {
//       data,
//     },
//   };
// }

const Card: React.FC = () => {
  const [card, setCard] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchCard() {
      try {
        const { data } = await axios.get(`https://rickandmortyapi.com/api/character/` + id);
        setCard(data);
      } catch (err) {
        alert('Error to get pizza!');
        navigate('/');
      }
    }

    fetchCard();
  }, []);

  if (!card) {
    return <>Loading...</>;
  }

  return (
    <>
      <div>dwdwd</div>
    </>
  );
};

export default Card;
