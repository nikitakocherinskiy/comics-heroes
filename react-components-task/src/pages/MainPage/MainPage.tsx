import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import CardsList from '../../components/CardsList/CardsList';
import Navigation from '../../components/Navigation/Navigation';

function MainPage() {
  return (
    <div>
      <Navigation />
      <SearchBar />
      <CardsList />
    </div>
  );
}

export default MainPage;
