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

const percentage = (sum, num) => Math.round((num / sum) * 100);

export const compareServiceCallsApi = () => homelessGet('/service211')
  .then((data) => {
    let housing = 0;
    let other = 0;
    data.forEach((datum) => {
      const name = datum.service_name;
      if (name === 'Housing') {
        housing = datum.freq;
      } else {
        other += datum.freq;
      }
    });
    const sum = housing + other;
    return {
      name: '2016',
      data: [
        { name: 'Housing assistance', value: percentage(sum, housing) },
        { name: 'Other services', value: percentage(sum, other) },
      ],
    };
  });
