import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles.css'; // eslint-disable-line no-unused-vars;

import { fetchDefinitionData } from '../../state/Definition/actions';
import DefinitionPieChart from './DefinitionPieChart';
import { shelterType } from '../../state/Definition/selectors';

import TransitionalHousing from './TransitionalHousing';
import EmergencyShelter from './EmergencyShelter';
import Unsheltered from './Unsheltered';
import PITSurvey from './PITSurvey';
import DoubledUp from './DoubledUp';


const pitSurveyStaticData = [
  { name: '2015PitSurvey', value: 3801, year: 2015 },
  { name: 'doubledUp', value: 12543, year: 2015 },
  { name: '2015PitSurvey', value: 4441, year: 2013 },
  { name: 'doubledUp', value: 11467, year: 2013 },
  { name: '2015PitSurvey', value: 4655, year: 2011 },
  { name: 'doubledUp', value: 10908, year: 2011 },   
];

const colors = ['#75568D', '#d4d5d6'];


class Definition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shelterCategories: {
        unsheltered: 'Unsheltered',
        emergencyShelter: 'Emergency Shelter',
        transitionalHousing: 'Transitional Housing',
      },
      shelterInitialValue: 'Unsheltered',
      pitCategories: {
        '2015PitSurvey': '2015 PIT Survey',
        doubledUp: 'Doubled Up',
      },
      pitInitialValue: '2015 PIT Survey',
    };
  }
  componentDidMount() {
    this.props.loadData();
  }
  render() {
    return (
      <div className="Definition">
        <DefinitionPieChart
          data={this.props.shelterTypeData} 
          initialValue={this.state.shelterInitialValue}
          colors={colors}
          categories={this.state.shelterCategories}
          content={{
            'Transitional Housing': <TransitionalHousing  />, 
            Unsheltered: <Unsheltered />,
            'Emergency Shelter': <EmergencyShelter />,
          }}
        />
        <div className="top-spacer" >
          <DefinitionPieChart
            data={pitSurveyStaticData} 
            initialValue={this.state.pitInitialValue}
            colors={colors}
            categories={this.state.pitCategories}
            content={{
              '2015 PIT Survey': <PITSurvey />,
              'Doubled Up': <DoubledUp />,
            }}
          />
        </div>
      </div>
    );
  }  
}

Definition.propTypes = {
  shelterTypeData: PropTypes.array.isRequired,
  loadData: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  loadData: () => fetchDefinitionData(dispatch),
});

const mapStateToProps = state => ({
  shelterTypeData: shelterType(state),
});

export default connect(
  mapStateToProps, mapDispatchToProps,
)(Definition);

