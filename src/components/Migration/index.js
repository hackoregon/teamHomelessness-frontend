import React from 'react';
import styles from './styles.css';
import ArrivalPieChart from './ArrivalPieChart';
import MigrationBarChart from './MigrationBarChart';
import OriginTreemap from './OriginTreemap';

const Migration = () => {
  return (
    <div className="Migration">
      <div className="migration-container">
        <h1>Homeless Migration</h1>
        <h4>Where is the homeless population from?</h4>
        <h2>Place of Origin</h2>
        <h4>Respondents of the 2015 PIT Survey were asked where they 
        lived before moving to Portland</h4>
      </div>
      <OriginTreemap />
      <div className="migration-container" >
        <h3>Migration to Portland</h3>
        <p>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. 
          De carne lumbering animata corpora quaeritis. 
          Summus brains sit​​, morbo vel maleficia? 
          De apocalypsi gorger omero undead survivor dictum mauris.
          Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus.
          resi dentevil vultus comedat cerebella viventium. 
          Qui animated corpse, cricket bat max brucks terribilem incessu zomby. 
          The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus.
        </p>
        <h2>Were They Homeless on arrival?</h2>
        <h4>Respondents who had lived in Portland for less than 
        two years were asked where they lived before moving to Portland.</h4>
      </div>
      <ArrivalPieChart />
      <div className="migration-container" >
        <h3>Zombie Ipsum</h3>
        <p>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. 
          De carne lumbering animata corpora quaeritis. 
          Summus brains sit​​, morbo vel maleficia? 
          De apocalypsi gorger omero undead survivor dictum mauris.
          Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus.
          resi dentevil vultus comedat cerebella viventium. 
          Qui animated corpse, cricket bat max brucks terribilem incessu zomby. 
          The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus.
        </p>
        <h2>How Long Have They Lived in Portland?</h2>
      </div>
      <MigrationBarChart />
      <div className="migration-container">
        <h3>Zombie Ipsum</h3>
        <p>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. 
          De carne lumbering animata corpora quaeritis. 
          Summus brains sit​​, morbo vel maleficia? 
          De apocalypsi gorger omero undead survivor dictum mauris.
          Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus.
          resi dentevil vultus comedat cerebella viventium. 
          Qui animated corpse, cricket bat max brucks terribilem incessu zomby. 
          The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus.
        </p>
      </div>
    </div>
  );
};

export default Migration;
