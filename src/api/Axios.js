// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

export const Axios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
