import React from 'react';
import Card from './components/Card';
import Search from './components/Search';
import axios from 'axios';

const App: React.FC = () => {
  const [rickAndMortyCards, setRickAndMortyCards] = React.useState([]);

  React.useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/').then((data) => {
      setRickAndMortyCards(data.data.results);
    });
  }, []);

  return (
    <div>
      <Search />
      <div className="w-3/5 h-auto m-auto flex justify-center bg-red-100 rounded-lg mt-5 shadow-lg">
        <Card value={rickAndMortyCards} />
      </div>
    </div>
  );
};

export default App;
