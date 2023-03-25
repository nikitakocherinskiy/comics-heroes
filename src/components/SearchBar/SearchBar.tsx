import React from 'react';
import styles from './SearchBar.module.css';

interface SearchBarProps {}

interface SearchBarState {
  query: string;
}

class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);

    this.state = {
      query: localStorage.getItem('searchQuery') || '', // Initialize with value from LocalStorage or an empty string
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillUnmount() {
    localStorage.setItem('searchQuery', this.state.query); // Save the input value to LocalStorage during unmount
  }

  handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ query: event.target.value });
  }

  render() {
    return (
      <div className={styles.container}>
        <input type="text" value={this.state.query} onChange={this.handleInputChange} />
      </div>
    );
  }
}

export default SearchBar;
