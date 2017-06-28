import React from 'react';
import { PieChart, Pie, ResponsiveContainer, Text, Cell, Curve, Legend } from 'recharts';
import styles from '../Reuseable/HalfDonutChart/HalfDonutChart.styles.css';

const propsData = [
  { name: 'Homeless on arrival', value: 12 },
];

const COLORS = ['#75568D', '#AAA4AB'];


const pieLabel = (options) => {
  if (options.payload.name === 'DontLabelMe') {
    return null;
  }

  return (
    <Text
      {...options}
      x={options.cx}
      y={options.cy - 20}
      fontSize={34}
      fill={'black'}
      style={{ fontWeight: 'bold' }}
      textAnchor={'middle'}
      alignmentBaseline="middle"
      className="recharts-pie-label-text"
    >
      {`${options.payload.value}%`}
    </Text>
  );
};

const ArrivalPieChart = props => (
  <div className={styles.container}>
    <ResponsiveContainer width={'100%'} height={225}>
      <PieChart
        margin={{ top: 0, right: 5, bottom: 100, left: 5 }}
      >

        <Pie
          startAngle={180}
          endAngle={0}
          data={[...propsData, { name: 'DontLabelMe', value: 100 - propsData[0].value }]}
          cy={'100%'}
          labelLine={false}
          innerRadius={'105%'}
          outerRadius={'185%'}
          fill="#e3dde8"
          label={pieLabel}
        >
          {
            propsData.map((entry, idx) =>
              <Cell key={entry.name} fill={COLORS[idx % COLORS.length]} />)
          }
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  </div>
);

export default ArrivalPieChart;
