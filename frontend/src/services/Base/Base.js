import axios from "axios";


axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'http://localhost:3000/api' : 'http://localhost:3000/api';
class BaseService {

  get(url, config) {
    return axios.get(url, config);
  }

  post(url, data, config) {
    return axios.post(url, data, config);
  };

  put(url, data, config) {
    return axios.put(url, data, config);
  };

  delete(url, config) {
    return axios.delete(url, config);
  };

  getOptions() {
    return {
      headers: { Authorization: localStorage.getItem("token") }
    };
  };
}

export default new BaseService();