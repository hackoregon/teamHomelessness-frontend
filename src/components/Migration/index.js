import React from 'react';
import styles from './styles.css';
import ArrivalPieChart from './ArrivalPieChart';
import OriginTreemap from './OriginTreemap';
import { TitleNav } from '../Reuseable';
import StoryCard from '@hackoregon/component-library/lib/StoryCard/StoryCard';
import shared from '../shared.styles';

const Migration = () => (
  <TitleNav
    title="Homeless Migration"
    prev="/homeless-population"
    next="/unaccompanied-youth"
  >
    <StoryCard>
      <div className="Migration">
        <div className="migration-container">
          <h2>In 2015, among the newly arrived unsheltered</h2>
        </div>
        <ArrivalPieChart />
        <div className="migration-container" >
          <h2>were homeless on arrival</h2>
          <p style={shared.text}>This number represents the percentage of the unsheltered population that moved to Multnomah County in the two years since the previous PIT survey (i.e. from 2013 to 2015).</p>
          <h2 style={shared.header}>And most of them came from outside the Pacific Northwest</h2>
        </div>
        <OriginTreemap />
        <div className="migration-container" >
          <p style={shared.footnote}>*Portland Metro Areas include Clackamas, Washington, and Clark Counties</p>
          <p style={shared.footnote}>*Those who responded Portland migrated from East County.</p>
          <p style={shared.footnote}>This data extrapolates demographics from the unsheltered population to all homeless.</p>
        </div>
      </div>
    </StoryCard>
  </TitleNav>
);

export default Migration;
