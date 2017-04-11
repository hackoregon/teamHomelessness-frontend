/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Text, Legend, ResponsiveContainer } from 'recharts';
import styles from './styles.css';

// TODO
const propsData = [
  { name: 'White', 'General Population': 70, Homeless: 30 },
  { name: 'Latino', 'General Population': 10, Homeless: 20 },
  { name: 'Black', 'General Population': 10, Homeless: 10 },
  { name: 'Asian', 'General Population': 9, Homeless: 20 },
  { name: 'American Indian', 'General Population': 1, Homeless: 10 },
];
const propsCateg = ['Ethnicity', 'Veteran Status', 'Disability', 'Age', 'Gender'];
const propsSelected = 'Age';


const toPercent = val => `${val}%`;

const valueLabel = options => (
  <Text {...options} fill={'#AAA4AB'}>{`${options.value}%`}</Text>
);

const axisLabel = options => (
  <Text {...options} fill={'#726371'} y={options.y - 35} width={200}>
    {options.payload.value}
  </Text>
);

const SubMenu = contents => (
  <ul className="SubMenu">
    {
      contents.categories.map((item) => {
        const active = item === contents.selected ? 'active' : '';
        return (
          <li key={item}>
            <a className={`${active} subLink`}>{item}</a>
          </li>
        );
      })
    }
  </ul>
);

const RenderLegend = options => (
  <div className="flexWrap">
    <div className="selector">
      <select name="category" value={options.selected}>
        {
          propsCateg.map(item => (
            <option key={item} value={item} >{item}</option>
          ))
        }
      </select>
    </div>
    <Legend payload={options.payload}  iconSize={18} verticalAlign={'bottom'} wrapperStyle={{ bottom: 0, right: 0, left: 0 }} />
  </div>
);


const HomelessPopulation = props => (
  <div className="HomelessPopulation">
    <h1>The Homeless Population</h1>
    <h2>Compare the population of Multnomah County in 2015 to 
    the homeless, and those in poverty</h2>
    <ResponsiveContainer width="85%" height={550} >
      <BarChart 
        data={propsData}
        layout={'vertical'}
        barCategoryGap={'25%'}
        margin={{ top: 60, right: 10, left: 10, bottom: 5 }}
      >
        <Legend 
          wrapperStyle={{ top: 0, right: 0, left: 0, margin: '2px auto 20px auto' }}
          verticalAlign={'bottom'}
          content={<RenderLegend selected={propsSelected} />}
        />
        <XAxis 
          type="number"
          orientation="top"
          axisLine={false}
          tickLine={false}
          ticks={[25, 50, 75, 100]}
          interval="preserveEnd"
          domain={[0, 100]}
          tickCount={5}
          tick={{ fill: '#AAA4AB' }}
          tickFormatter={toPercent}
        />
        <YAxis 
          type="category" 
          tickLine={false}
          dataKey="name"
          tick={axisLabel}
          padding={{ top: 10 }}  
          mirror={true}
          axisLine={false}
        />
        <CartesianGrid 
          strokeDasharray="5, 5" 
          horizontal={false}
        />
        <Bar 
          dataKey="General Population" 
          fill="#F6A623" 
          label={valueLabel}
          legendType={'circle'} 
        />
        <Bar 
          dataKey="Homeless" 
          fill="#29507D" 
          label={valueLabel}  
          legendType={'circle'} 
        />
        <Tooltip 
          formatter={toPercent}
          cursor={{ fill: 'none' }}
        />
      </BarChart>
    </ResponsiveContainer>
    <SubMenu categories={propsCateg} selected={propsSelected} />
  </div>
);

export default HomelessPopulation;
