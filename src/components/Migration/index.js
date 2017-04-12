import React from 'react';
import { BarChart, Bar, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import styles from './styles.css';

const propsData = [
  { name: 'Less than 1 month', amt: 136 },
  { name: '1 month - 6 months', amt: 378 },
  { name: '7 months - 1 year', amt: 265 },
  { name: '1 year - 2 years', amt: 332 },
  { name: 'Over 2 years', amt: 434 },
];
const propsYears = [2011, 2013, 2015];
const propsActive = 2011;

function Migration() {
  return (
    <div className="Migration">
      <h1>How Long Have They Lived in Portland?</h1>
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
}

export default Migration;
