import Api from '@/services/Api';
import { API_URL } from '@/config/';

export default {
  get() {
    return Api().get(`${API_URL.USER}`);
  },
  getDetail(params) {
    return Api().get(`${API_URL.USER}/${params}`);
  },
};
