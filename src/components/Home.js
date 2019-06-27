import React from 'react';
import { Dashboard } from './Dashboard';
import CardGroup from './guides/CardGroup';

export function Home(props) {
  return(
    <Dashboard {...props} >
      <CardGroup {...props} />
    </Dashboard>
  );
}
