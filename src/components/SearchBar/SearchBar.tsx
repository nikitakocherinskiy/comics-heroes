import { useEffect, useState } from 'react';
import styles from './SearchBar.module.css';

function SearchBar() {
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

  return (
    <div className={styles.container}>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
    </div>
  );
}

export default SearchBar;
