import React from 'react';
import Search from '../components/Search';
import Card from '../components/Card';

const MainLayout: React.FC = () => {
  return (
    <div>
      <Search />
      <div className="w-3/5 h-auto m-auto flex justify-center bg-red-100 rounded-lg mt-5 shadow-lg">
        <Card />
      </div>
    </div>
  );
};

export default MainLayout;
