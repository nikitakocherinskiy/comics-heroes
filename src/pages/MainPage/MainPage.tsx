import SearchBar from '../../components/SearchBar/SearchBar';
import CardsList from '../../components/CardsList/CardsList';
import Navigation from '../../components/Navigation/Navigation';
import { useState } from 'react';

function MainPage() {
  const [searchData, setSearchData] = useState('');

  const handleSearchData = (data: string) => {
    setSearchData(data);
  };

  return (
    <div>
      <Navigation />
      <SearchBar onSearchData={handleSearchData} />
      <CardsList searchData={searchData} />
    </div>
  );
}

export default MainPage;
