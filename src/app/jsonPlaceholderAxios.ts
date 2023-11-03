import axios from 'axios';
import { BASE_URL, MEMBER_URL } from './services/axiosClient';

export const jsonPlaceholderAxios = axios.create({
  baseURL: 'http://localhost:4200/api',
});

export const BaseUrlAxios = axios.create({
  baseURL: BASE_URL,
});

export const MemberUrlAxios = axios.create({
  baseURL: MEMBER_URL,
});

export const jsonFakeDateAxios = axios.create({
  baseURL: 'http://localhost:8000',
});