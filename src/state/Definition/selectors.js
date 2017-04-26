import { NAME } from './constants';

/**
 * Direct selector to the definition state
 */
const root = state => state[NAME] || {};

/**
 * Other specific selectors from substate
 */
const filterByName = (data, keys) => data.filter(
   element => keys.includes(element.name),
 );
export const shelterType = state => filterByName(
  root(state).shelterTypeData || [],
  ['unsheltered', 'emergencyShelter', 'transitionalHousing'],
).filter(item => item.age === 'adult');

