import React from 'react';

const Search: React.FC = () => {
  // const [open, setOpen] = React.useState(false);

  return (
    <div className="w-3/5 h-20 m-auto flex justify-center bg-red-100 rounded-lg mt-5 shadow-lg">
      <input className="w-2/3 h-10 m-auto rounded-lg pl-5 text-red-500" placeholder="Search..." />
      <button className="w-40 h-10 mx-10 my-5 bg-slate-400 rounded-lg text-red-500 shadow-lg hover:bg-slate-500 transition-all hover:text-red-600">
        Click
      </button>
    </div>
  );
};

export default Search;
