import React from 'react';

import Todos from '../Todos/Todos';
import ListsContainer from '../Lists/ListsContainer';

const Home = () => {
  return (
    <div>
      <Todos />
      <ListsContainer />
    </div>
  );
};

export default Home;
