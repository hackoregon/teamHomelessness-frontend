/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import { connect } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, Text, Legend, ResponsiveContainer } from 'recharts';
import styles from './styles.css';
import { fetchPopulationData } from '../../state/Population/actions';
import {
  ethnicity,
  veteranStatus,
  disability,
  age,
  gender,
} from '../../state/Population/selectors';

// TODO - Wire-up w/ redux

const propsCateg = ['Ethnicity', 'Veteran Status', 'Disability', 'Age', 'Gender'];
const propsSelected = 'Veteran Status';


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
  componentDidMount() {
    this.props.loadData();
  }
  render() {
    return (
      <div className="HomelessPopulation homelesspopulation-container dataViz-container-500">
        <h2>Compare the population of Multnomah County in 2015 to
    the homeless</h2>
        <div className="selector">
          <select name="category" value={propsSelected}>
            {
          propsCateg.map(item => (
            <option key={item} value={item} >{item}</option>
          ))
        }
          </select>
        </div>
        <ResponsiveContainer width="100%" height={'100%'} minHeight={450} >
          <BarChart
            data={this.props.age}
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
              mirror={true}
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

// HomelessPopulation.propTypes = {
//   ethnicityData
// }

const mapDispatchToProps = dispatch => ({
  loadData: () => fetchPopulationData(dispatch),
});
//
// const filterData = (data, keys) => data.filter(
//   element => keys.includes(element.name),
// );

const mapStateToProps = state => ({
  ethnicity: ethnicity(state),
  veteranStatus: veteranStatus(state),
  disability: disability(state),
  age: age(state),
  gender: gender(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomelessPopulation);
