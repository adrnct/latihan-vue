import axios from "axios";

const API_UNIVERSITIES = "https://localhost:7138/api/universities";
const API_ACCOUNT = "https://localhost:7138/api/Account"

//UNIVERSITIES
export const getUniversities = async () => {
  const response = await axios.get(API_UNIVERSITIES);
  return response.data.data;
};

export const addUniversity = async (university) => {
  const response = await axios.post(API_UNIVERSITIES, university);
  return response.data.data;
};

export const updateUniversity = async (id, updatedData) => {
  const response = await axios.put(`${API_UNIVERSITIES}/${id}`, updatedData);
  return response.data.data;
};

export const deleteUniversity = async (id) => {
  const response = await axios.delete(`${API_UNIVERSITIES}/${id}`);
  return response.data.data;
};

//ACCOUNT
export const getAccount = async () => {
  const response = await axios.get(API_ACCOUNT);
  return response.data.data;
};

export const addAccount = async (account) => {
  const response = await axios.post(`${API_ACCOUNT}/register`, account);
  return response.data.data;
};