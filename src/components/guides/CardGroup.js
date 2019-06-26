import React from 'react';
import GuideCard from './GuideCard'
import { GroupContainer } from './StyledComponents';

export default function CardGroup(props) {
  return(
    <GroupContainer>
      {
        props.guidesData.guides.map(guide => <GuideCard key={guide.id} guide={guide} />)
      }
    </GroupContainer>
  );
}
