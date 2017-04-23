import { NAME } from './constants'

/**
 * Direct selector to the population state
 */
const root = state => state[NAME] || {}

/**
 * Other specific selectors from substate
 */
// export const channels = state => root(state).channels || []
// export const channel = state => root(state).channel || {}


