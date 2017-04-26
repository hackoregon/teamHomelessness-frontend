import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles.css'; // eslint-disable-line no-unused-vars;

import { fetchDefinitionData } from '../../state/Definition/actions';
import DefinitionPieChart from './DefinitionPieChart';
import { shelterType } from '../../state/Definition/selectors';

const propsData2 = [
  { name: '2015PitSurvey', value: 31.7, year: 2015 },
  { name: 'doubledUp', value: 68.3, year: 2015 },
  { name: '2015PitSurvey', value: 35.7, year: 2011 },
  { name: 'doubledUp', value: 64.3, year: 2011 }, 
  { name: '2015PitSurvey', value: 41.7, year: 2013 },
  { name: 'doubledUp', value: 58.3, year: 2013 },  
];

const colors = ['#75568D', '#AAA4AB'];


class Definition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shelterCategories: {
        unsheltered: 'Unsheltered',
        emergencyShelter: 'Emergency Shelter',
        transitionalHousing: 'Transitional Housing',
      },
      shelterActiveValue: 'Transitional Housing',
      pitCategories: {
        '2015PitSurvey': '2015 PIT Survey',
        doubledUp: 'Doubled Up',
      },
      pitActiveValue: '2015 PIT Survey',
    };
  }
  componentDidMount() {
    this.props.loadData();
  }
  render() {
    return (
      <div className="Definition">
        <div className="Definition-container">
          <h2>{this.state.shelterActiveValue}</h2>
          <p>
            Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. 
            De carne lumbering animata corpora quaeritis. 
            Summus brains sit​​, morbo vel maleficia?
          </p>
        </div>
        <DefinitionPieChart
          data={this.props.shelterTypeData} 
          activeValue={this.state.shelterActiveValue}
          colors={colors}
          categories={this.state.shelterCategories}
        />
        <div className="Definition-container top-spacer" >
          <h2>{this.state.pitActiveValue}</h2>
          <p>
            De apocalypsi gorger omero undead survivor dictum mauris.
            Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus.
            resi dentevil vultus comedat cerebella viventium. 
            Qui animated corpse, cricket bat max brucks terribilem incessu zomby. 
            The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus.
          </p>
        </div>
        <DefinitionPieChart
          data={propsData2} 
          activeValue={this.state.pitActiveValue}
          colors={colors}
          categories={this.state.pitCategories}
        />
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
