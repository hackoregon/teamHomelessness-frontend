import React from 'react';

const DoubledUp = (props) => {
  const { year } = props;
  
  return (
    <div>
      <h2>Doubling-Up</h2>
      <p>
        The HUD definition of people experiencing homelessness does not include the majority of people who lack stable housing—people who are temporarily sheltering in basements, spare rooms, or on the couches of friends or relatives, for example. 

        {year === 2015 &&
          ` This practice is called “doubling up”  and described the status of an estimated 12,543 people in the county in ${year}—over three times the number of people experiencing homelessness documented in the PIT Count that year.`
        }

        {year === 2013 &&
          ` This practice is called “doubling up”  and described the status of an estimated  11,467 people in the county in ${year}—over twice the number of people experiencing homelessness documented in the PIT Count that year.`
        }

        {year === 2011 &&
          ` This practice is called “doubling up”  and described the status of an estimated 10,908 people in the county in ${year}—over twice the number of people experiencing homelessness documented in the PIT Count that year.`
        }

        {year === 2009 &&
          ` This practice is called “doubling up”  and described the status of an estimated 12,190 people in the county in ${year}—over twice the number of people experiencing homelessness documented in the PIT Count that year.`
        }
      </p>
    </div>
  );
};


export default DoubledUp;
