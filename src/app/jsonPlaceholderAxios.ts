import axios from 'axios';

export const jsonPlaceholderAxios = axios.create({
  baseURL: 'http://localhost:4200/api',
});
