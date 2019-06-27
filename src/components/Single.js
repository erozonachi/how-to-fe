import React from 'react';
import { Dashboard } from './Dashboard';
import SingleGuideView from './guides/SingleGuideView';

export function Single(props) {
  return(
    <Dashboard {...props} >
      <SingleGuideView {...props} />
    </Dashboard>
  );
}
