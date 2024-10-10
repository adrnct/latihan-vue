import axios from 'axios';

const API_BASE_URL = 'https://localhost:7138/api';

export const getUniversities = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/Universities`);
    return response.data.data; 
  } catch (error) {
    throw new Error('Error fetching universities: ' + error.message);
  }
};


export const addUniversities = async (university) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/Universities`, university);
      return response.data; // Tidak perlu .data.data, cukup response.data
    } catch (error) {
      throw new Error('Error adding university: ' + error.message);
    }
  };