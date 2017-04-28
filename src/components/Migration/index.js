import React from 'react';
import styles from './styles.css';
import ArrivalPieChart from './ArrivalPieChart';
import OriginTreemap from './OriginTreemap';

const Migration = () => {
  return (
    <div className="Migration">
      <div className="migration-container">
        <h1>Homeless Migration</h1>
        <h2>In 2015, among the newly arrived unsheltered</h2>
      </div>
      <ArrivalPieChart />
      <div className="migration-container" >
        <h2>were homeless on arrival</h2>
        <p>This number represents the percentage of the unsheltered population that moved to Multnomah County in the two years since the previous PIT survey (i.e. from 2013 to 2015).</p>
        <h2>And most of them came from outside the Pacific Northwest</h2>
      </div>
      <OriginTreemap />
      <div className="migration-container" >
        <p>*Portland Metro Areas include Clackamas, Washington, and Clark Counties</p>
        <p>*Those who responded Portland migrated from East County.</p>
        <p>This data extrapolates demographics from the unsheltered population to all homeless.</p>
      </div>
      
    </div>
  );
};

export default Migration;
