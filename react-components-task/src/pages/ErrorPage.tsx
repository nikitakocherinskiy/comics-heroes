import React from 'react';
import Navigation from '../components/Navigation/Navigation';

type Props = {};

export default function ErrorPage({}: Props) {
  return (
    <div>
      <Navigation />
      <h1>Sorry, we couldn't find that page</h1>
    </div>
  );
}
