import React from 'react';
import PropTypes from 'prop-types';
import { PieChart, Pie, ResponsiveContainer, Text, Cell, Legend } from 'recharts';

const findPercentage = (val, arr) => {
  const total = arr.reduce((acc, cur) => acc + cur.value, 0);
  return (val / total) * 100;
};

const getUniqueYears = arr => (
  arr.reduce((acc, curr) => {
    if (acc.indexOf(curr.year) === -1) {
      acc.push(curr.year);
    }
    return acc;
  }, []).sort()
);

const getKeyByValue = (obj, val) => (
  Object.keys(obj).find(key => obj[key] === val)
);

const pieLabel = (options) => {
  if (!options.payload.label) {
    return null;
  }

  return (
    <Text
      {...options}
      x={options.cx}
      y={options.cy}
      fontSize={28}
      fill={'black'}
      style={{ fontWeight: 'bold' }}
      textAnchor={'middle'}
      alignmentBaseline="middle"
      className="recharts-pie-label-text"
    >
      {`${options.payload.value.toFixed(1)}%`}
    </Text>
  );
};

class DefinitionPieChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: 2015,
    };  
  }

  render() {
    const cleanedData = this.props.data
      .filter(item => item.year === this.state.year)
      .map((item, idx, arr) => (
        { ...item,
          name: this.props.categories[item.name], 
          label: item.name === getKeyByValue(this.props.categories, this.props.activeValue) 
          || false, 
          value: findPercentage(item.value, arr), 
        }
      ));

    return (
      <div className="dataViz-container-800" style={{ marginBottom: '65px' }} >
        <div className="Definition-List">
          <ul>
            {
              getUniqueYears(this.props.data)
              .map((item) => {
                const active = item === this.state.year ? 'active' : '';
                return (
                  <li key={item} >
                    <a 
                      className={`${active}`}
                      role="button" 
                      onClick={() => this.setState({ year: item })}
                    >
                      {item}
                    </a>
                  </li>
                );
              })
            }
          </ul>
        </div>
        <ResponsiveContainer width={'100%'} height={175}>
          <PieChart 
            margin={{ top: 0, right: 5, bottom: 120, left: 5 }}
          >
            <Pie 
              startAngle={180} 
              endAngle={0} 
              data={cleanedData}
              cy={'100%'}
              labelLine={false} 
              innerRadius={'105%'} 
              outerRadius={'185%'}
              fill="#e3dde8"
              label={pieLabel} 
            >
              {
                cleanedData.map((entry) => {
                  const color = entry.name === this.props.activeValue
                    ? this.props.colors[0] 
                    : this.props.colors[1];
                  return <Cell fill={color} key={entry.value} />;
                })
              }
            </Pie>
            <Legend 
              iconType={'circle'}
              wrapperStyle={{ bottom: '-55px' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

DefinitionPieChart.propTypes = {
  colors: PropTypes.array,
  categories: PropTypes.object,
  activeValue: PropTypes.string,
  data: PropTypes.array,
};

export default DefinitionPieChart;
