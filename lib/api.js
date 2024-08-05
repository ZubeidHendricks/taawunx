
export const getProjects = async () => {
  const response = await axios.get(`${API_URL}/projects`);
  return response.data;
};

export const createProject = async (projectData) => {
  const response = await axios.post(`${API_URL}/projects`, projectData);
  return response.data;
};

export const getUsers = async () => {
  const response = await axios.get(`${API_URL}/users`);
  return response.data;
};

export const makePayment = async (paymentData) => {
  const response = await axios.post(`${API_URL}/payments`, paymentData);
  return response.data;
};
import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000';

export const getProjects = async () => {
  const response = await axios.get(`${API_URL}/projects`);
  return response.data;
};

export const createProject = async (projectData) => {
  const response = await axios.post(`${API_URL}/projects`, projectData);
  return response.data;
};

export const getUsers = async () => {
  const response = await axios.get(`${API_URL}/users`);
  return response.data;
};

export const makePayment = async (paymentData) => {
  const response = await axios.post(`${API_URL}/payments`, paymentData);
  return response.data;
}
