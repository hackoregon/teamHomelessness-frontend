import axios from 'axios';

const BASE_URL = 'http://service.civicpdx.org/homeless';

export const promiseToGet = endpoint => axios.get(`${BASE_URL}${endpoint}`)
  .then((response) => {
    console.log(response.data);
    return response.data;
  })
  .catch((error) => {
    console.log(error);
    return error;
  });

export const compareEthnicityApi = () => promiseToGet('/pitacseth');
export const compareAgeGenderApi = () => promiseToGet('/pitacs');
