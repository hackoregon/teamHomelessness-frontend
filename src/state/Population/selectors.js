import { NAME } from './constants';

/**
 * Direct selector to the population state
 */
const root = state => state[NAME] || {};

/**
 * Other specific selectors from substate
 */
const filterByName = (data, keys) => data.filter(
   element => keys.includes(element.name),
 );
export const ethnicityChart = state => filterByName(
  root(state).ethnicityData || [],
  ['white', 'pop_of_color'],
);
