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

const percentage = (sum, num) => Number(((num / sum) * 100).toFixed(2));

export const compareServiceCallsApi = () => homelessGet('/service211')
  .then((data) => {
    let housing = 0;
    let other = 0;
    const otherData = [];
    data.forEach((datum) => {
      const name = datum.service_name;
      if (name === 'Housing') {
        housing = datum.freq;
      } else {
        other += datum.freq;
        otherData.push(datum);
      }
    });
    const sum = housing + other;
    const unsortedChart = otherData.map((datum) => {
      if (datum.service_name !== 'Housing') {
        return {
          name: datum.service_name,
          value: percentage(sum, datum.freq),
        };
      }
    });
    const otherChart = unsortedChart.sort((a, b) => b.value - a.value);
    return {
      name: '2016',
      otherChart,
      data: [
        { name: 'Housing assistance', value: Math.round(percentage(sum, housing)) },
        { name: 'Other services', value: Math.round(percentage(sum, other))  },
      ],
    };
  });
