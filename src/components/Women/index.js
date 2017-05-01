/* eslint-disable react/jsx-boolean-value, react/no-unused-prop-types */
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Text, Legend, ResponsiveContainer } from 'recharts';

import { TitleNav } from '../Reuseable';
import StoryCard from '@hackoregon/component-library/lib/StoryCard/StoryCard';
import shared from '../shared.styles';
import styles from './Women.styles.css';

const propsData2 = [
  { name: 'All women', 'General Population': 82, Homeless: 73  },
  { name: 'Rate of disability', 'General Population': 82, Homeless: 73  },
  { name: 'Rate of domestic violence', 'General Population': 82, Homeless: 73  },
];  


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
    // this.props.loadData();
  }
  render() {
    return (
      <TitleNav
        title="Women Experiencing Homelessness"
        prev="/unaccompanied-youth"
        next="/???"
      >
        <StoryCard >
          <div className="Women dataViz-container-500" style={{ marginLeft: '10px', marginRight: '10px', marginTop: '50px' }}>
            <p style={shared.footnote}>
              In 2015, homeless women experienced [higher/lower] levels of domestic violence, and were [more/less] likely to be disabled.
            </p>

            <ResponsiveContainer width="100%" height={'100%'} minHeight={480} >
              <BarChart
                data={propsData2}
                layout={'vertical'}
                barCategoryGap={'50%'}
                margin={{ top: 60, right: 10, left: 10, bottom: -5 }}
              >
                <Legend
                  verticalAlign={'bottom'}
                  align={'left'}
                  layout={'horizontal'}
                  iconSize={18}
                  wrapperStyle={{ top: 20, left: '10px' }}
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
                  dataKey="General Population"
                  fill={COLORS[1]}
                  label={valueLabel}
                  legendType={'circle'}
                  barSize={29}
                />
                <Bar
                  dataKey="Homeless"
                  fill={COLORS[0]}
                  label={valueLabel}
                  legendType={'circle'}
                  barSize={29}
                />
              </BarChart>
            </ResponsiveContainer>

            <h4 style={shared.subheader}>Footnote</h4>
            <p style={shared.footnote}>
              *Because of the way data was reported, percentages don't add up to 100%.
            </p>
          </div>
        </StoryCard>
      </TitleNav>
    );
  }
}


export default HomelessPopulation;
