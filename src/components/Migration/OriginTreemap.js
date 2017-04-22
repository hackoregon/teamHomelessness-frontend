import React from 'react';
import { Treemap, ResponsiveContainer, Text } from 'recharts';

const propsData = [
  { name: 'Other Part of the US', percent: 37 },
  { name: 'California or Washington', percent: 35 },
  { name: 'Portland Metro Area', percent: 14 },
  { name: 'Non-Metro Area', percent: 10 },
  { name: 'Portland', percent: 4 },
].sort((a, b) => b.percent - a.percent);

const propsYears = ['2011', '2013', '2015'];
const propsActive = '2011';

const COLORS = ['#75568D', '#e3dde8'];

const Content = (options) => {
  const { x, y, width, height, value, name, index } = options;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{
          fill: index === 0 ? COLORS[0] : COLORS[1],
          stroke: '#fff',
          strokeWidth: '3',
        }}
      />
      <foreignObject x={x + 10} y={y + 8} width={width - 10}>
        <p xmlns="http://www.w3.org/1999/xhtml" style={{ textAlign: 'left' }} >
          {name}<b>  {value}%</b>
        </p>
      </foreignObject>
      
    </g>
  );
};

const OriginTreemap = props => (
  <div className="dataViz-container-650">
    <ResponsiveContainer width={'100%'} height={390}>
      <Treemap
        data={propsData}
        dataKey="percent"
        ratio={1/1}
        stroke="#fff"
        fill="#75568D"
        content={<Content />}
      />
    </ResponsiveContainer>
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
  </div>
);

export default OriginTreemap;
