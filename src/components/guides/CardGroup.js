import React, { useEffect } from 'react';
import GuideCard from './GuideCard'
import { GroupContainer } from './StyledComponents';
import { connect } from 'react-redux';
import { mapStateToProps } from '../mapState';
import { fetchGuides } from '../../actions';
import { isArray } from 'util';

function CardGroup(props) {
  const { fetchGuides } = props;
  useEffect(() => {
    fetchGuides();
  }, []);
  const renderList = ((isArray(props.guidesData.filteredGuides) && props.guidesData.filteredGuides.length > 0) && props.guidesData.filteredGuides) || 
    props.guidesData.guides;

  return(
    <GroupContainer>
      {
        renderList.map(guide => <GuideCard key={guide.id} guide={guide} user={props.auth.user.username} />)
      }
    </GroupContainer>
  );
}

export default connect(mapStateToProps, { fetchGuides })(CardGroup);
