import React from 'react';
import GuideCard from './GuideCard'

export default function CardGroup(props) {
  return(
    <div>
      {
        props.guidesData.guides.map(guide => <GuideCard key={guide.id} guide={guide} />)
      }
    </div>
  );
}
