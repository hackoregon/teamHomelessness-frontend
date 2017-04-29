import axios from 'axios';

const BASE_URL = 'http://service.civicpdx.org/homeless';

export const homelessGet = endpoint => axios.get(`${BASE_URL}${endpoint}`)
  .then(response => response.data)
  .catch(error => error);

export const compareEthnicityApi = () => homelessGet('/pitacseth')
  .then(data => (
    data.map(element => ({
      name: element.ethnicity,
      homeless: element.hud_homeless,
      general: element.mult_general,
    }))
  ));

export const compareAgeGenderApi = () => homelessGet('/pitacs')
  .then(data => (
    data.map(element => ({
      name: element.comp_name,
      homeless: element.pit_percent,
      general: element.acs_percent,
    }))
  ));

export const typesOfSheltersApi = () => homelessGet('/individuals')
  .then(data => data);

