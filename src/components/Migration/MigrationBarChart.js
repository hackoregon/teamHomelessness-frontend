import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Text, Cell } from 'recharts';

const propsData = [
  { residence: 'Less than 1 month', time: 8 },
  { residence: '1 month - 6 months', time: 24 },
  { residence: '7 months - 1 year', time: 17 },
  { residence: '1 year - 2 years', time: 21 },
  { residence: 'Over 2 years', time: 28 },
];
const propsYears = [2011, 2013, 2015];
const propsActive = 2011;

const COLORS = ['#75568D', '#e3dde8'];


const valueLabel = options => (
  <Text {...options} fill={'#AAA4AB'} x={options.x + 10}>{`${options.value}%`}</Text>
);

const axisLabel = options => (
  <Text {...options} fill={'#726371'} width={options.width + 100}>
    {options.payload.value}
  </Text>
);

const MigrationBarChart = (props) => {
  const HIGHEST = [...propsData].sort((a, b) => b.time - a.time)[0].residence;

  return (
    <div className="dataViz-container-500">
      <div className="Migration-List">
        <ul>
          {
            propsYears.map((item) => {
              const active = item === propsActive ? 'active' : '';
              return (
                <li key={item}>
                  <a className={`${active}`}>{item}</a>
                </li>
              );
            })
          }
        </ul>
      </div>
      <ResponsiveContainer width={'100%'} height={300} >
        <BarChart 
          width={600} 
          height={400} 
          data={propsData}
          layout={'vertical'}
          margin={{ top: 5, right: 80, left: 75, bottom: 5 }} 
        >
          <XAxis 
            type="number" 
            axisLine={false} 
            tickLine={false}
            tick={false}
          />
          <YAxis 
            type="category"
            tickLine={false}
            tick={axisLabel} 
            dataKey="residence" 
            axisLine={false} 
          />
          <Bar dataKey="time" label={valueLabel} >
            {
              propsData.map((entry) => {
                const fill = entry.residence === HIGHEST ? COLORS[0] : COLORS[1]; 
                return <Cell key={entry.residence} fill={fill} />;
              }) 
            }
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MigrationBarChart;
