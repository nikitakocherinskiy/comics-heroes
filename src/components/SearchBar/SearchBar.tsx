import { useEffect, useState } from 'react';
import styles from './SearchBar.module.css';

type Props = {
  onSearchData: (data: string) => void;
};

function SearchBar({ onSearchData }: Props) {
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    const searchQuery = localStorage.getItem('searchQuery');
    if (searchQuery) {
      setQuery(searchQuery);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('searchQuery', query);
  }, [query]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearchData(query);
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default SearchBar;
