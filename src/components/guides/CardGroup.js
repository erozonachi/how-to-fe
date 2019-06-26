import React, { useEffect } from 'react';
import GuideCard from './GuideCard'
import { GroupContainer } from './StyledComponents';
import { connect } from 'react-redux';
import { mapStateToProps } from '../mapState';
import { fetchGuides } from '../../actions';

function CardGroup(props) {
  const { fetchGuides } = props;
  useEffect(() => {
    fetchGuides();
  }, []);

  return(
    <GroupContainer>
      {
        props.guidesData.guides.map(guide => <GuideCard key={guide.id} guide={guide} />)
      }
    </GroupContainer>
  );
}

export default connect(mapStateToProps, { fetchGuides })(CardGroup);
