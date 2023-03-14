import React from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import CardsList from '../components/CardsList/CardsList';

function MainPage() {
  return (
    <div>
      <SearchBar />
      <CardsList />
    </div>
  );
}

export default MainPage;
