/* eslint-disable react/jsx-boolean-value, react/no-unused-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, Text, Legend, ResponsiveContainer } from 'recharts';
import camelcase from 'camelcase';
import styles from './styles.css'; // eslint-disable-line no-unused-vars

import { fetchPopulationData } from '../../state/Population/actions';
import {
  ethnicity,
  veteranStatus,
  disability,
  age,
  gender,
} from '../../state/Population/selectors';

const COLORS = ['#75568D', '#e3dde8'];
const valueLabel = options => (
  <Text {...options} fill={'#201024'} >{`${options.value}%`}</Text>
);
const axisLabel = options => (
  <Text {...options} fill={'#201024'} y={options.y - 45} width={200} style={{ fontWeight: 'bold' }}>
    {options.payload.value}
  </Text>
);

class HomelessPopulation extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [
        'Ethnicity',
        'Veteran Status',
        'Disability',
        'Age',
        'Gender',
      ],
      value: 'Ethnicity',
    };
  }
  componentDidMount() {
    this.props.loadData();
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <div className="HomelessPopulation homelesspopulation-container dataViz-container-500">
        <h2>Compare the population of Multnomah County in 2015 to
    the homeless</h2>
        <div className="selector">
          <select
            name="category"
            value={this.state.value}
            onChange={event => this.handleChange(event)}
          >
            {
              this.state.categories.map(item => (
                <option key={item} value={item}>{item}</option>
              ))
            }
          </select>
        </div>
        <ResponsiveContainer width="100%" height={'100%'} minHeight={450} >
          <BarChart
            data={this.props[camelcase(this.state.value)]}
            layout={'vertical'}
            margin={{ top: 65, right: 10, left: 10, bottom: 0 }}
          >
            <Legend
              verticalAlign={'bottom'}
              align={'center'}
              layout={'vertical'}
              iconSize={18}
              wrapperStyle={{ top: 0 }}
            />
            <XAxis
              type="number"
              axisLine={false}
              tickLine={false}
              tick={false}
            />
            <YAxis
              type="category"
              tickLine={false}
              dataKey="name"
              tick={axisLabel}
              mirror
              axisLine={false}
            />
            <Bar
              dataKey="general"
              fill={COLORS[1]}
              label={valueLabel}
              legendType={'circle'}
              barSize={24}
            />
            <Bar
              dataKey="homeless"
              fill={COLORS[0]}
              label={valueLabel}
              legendType={'circle'}
              barSize={29}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

HomelessPopulation.propTypes = {
  loadData: PropTypes.function,
  ethnicity: PropTypes.array,
  veteranStatus: PropTypes.array,
  disability: PropTypes.array,
  age: PropTypes.array,
  gender: PropTypes.array,
};

const mapDispatchToProps = dispatch => ({
  loadData: () => fetchPopulationData(dispatch),
});

const mapStateToProps = state => ({
  ethnicity: ethnicity(state),
  veteranStatus: veteranStatus(state),
  disability: disability(state),
  age: age(state),
  gender: gender(state),
});

export default connect(
  mapStateToProps, mapDispatchToProps,
)(HomelessPopulation);
