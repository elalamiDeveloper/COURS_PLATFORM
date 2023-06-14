import axios from 'axios';
import { apiUrl } from '../assets/constants';

const fetchData = async (url, method, jwt = '') => {
  if (method === 'GET') {
    const {
      data: { data },
    } = await axios.get(`${apiUrl}${url}`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    return data;
  }
};

export default fetchData;
