import React, { useEffect } from 'react';
import GuideCard from './GuideCard'
import { GroupContainer } from './StyledComponents';
import { connect } from 'react-redux';
import { mapStateToProps } from '../mapState';
import { fetchGuides } from '../../actions';
import { isArray } from 'util';
import { Loader, Message } from 'semantic-ui-react';

function CardGroup(props) {
  const { fetchGuides } = props;
  useEffect(() => {
    fetchGuides();
  }, []);
  const renderList = ((isArray(props.guidesData.filteredGuides) && props.guidesData.filteredGuides.length > 0) && props.guidesData.filteredGuides) || 
    props.guidesData.guides;

  return(
    <GroupContainer>
      {props.guidesData.error && <Message
        error
        header='Guide Error'
        content={this.props.guidesData.error}
      />}
      {props.guidesData.fetchingGuides && 
          <Loader size='massive' active>Fetching How-to Guides</Loader>
      }
      {
        renderList.map(guide => <GuideCard key={guide.id} guide={guide} user={props.auth.user.username} />)
      }
    </GroupContainer>
  );
}

export default connect(mapStateToProps, { fetchGuides })(CardGroup);
