import React, { Component } from 'react';
import data from '../../data/data';
import CardItem from '../CardItem/CardItem';
import styles from './CardsList.module.css';

// type Props = {};

// type State = {};

//https://gateway.marvel.com:443/v1/public/characters?limit=8&apikey=910a76a074aeea58306892ac355119f0

class CardsList extends Component {
  state = {
    heros: data.data,
  };

  render() {
    return (
      <div className={styles.container}>
        {this.state.heros.results.map((el) => {
          return (
            <CardItem
              key={el.id}
              name={el.name}
              description={el.description || 'No description yet'}
              image={el.thumbnail.path + '.jpg'}
            />
          );
        })}
      </div>
    );
  }
}

export default CardsList;
