import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import StoryCard from '@hackoregon/component-library/lib/StoryCard/StoryCard';
import ArcPieChart from '../ArcPieChart/ArcPieChart';
import { fetchServiceCallsData } from '../../state/Services211/actions';

class Services211 extends React.Component {
  componentDidMount() {
    this.props.loadData();
  }
  render() {
    const dataLoaded = !!this.props.pieData[0];
    return (
      <StoryCard v-if="loaded" title="Homelessness Services">
        { dataLoaded ? <ArcPieChart dataSets={this.props.pieData} /> : null }
      </StoryCard>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loadData: () => dispatch(fetchServiceCallsData()),
});

const mapStateToProps = state => ({
  pieData: [state.services211.serviceCallsData],
});

export default connect(
  mapStateToProps, mapDispatchToProps,
)(Services211);
