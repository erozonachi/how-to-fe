import React from 'react';
import GuideCard from './GuideCard'
import { GroupContainer } from './StyledComponents';
import { connect } from 'react-redux';
import { mapStateToProps } from '../mapState';

function CardGroup(props) {
  return(
    <GroupContainer>
      {
        props.guidesData.guides.map(guide => <GuideCard key={guide.id} guide={guide} />)
      }
    </GroupContainer>
  );
}

export default connect(mapStateToProps, {})(CardGroup);
