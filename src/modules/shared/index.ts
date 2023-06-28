// eslint-disable-next-line import/no-extraneous-dependencies
import { AxiosResponse } from 'axios';
import createApiClient from './axiosClient';

const apiClient = createApiClient({
  baseURL: 'https://api.giphy.com/v1/gifs/',
});

// eslint-disable-next-line max-len
export const get = <T>(url:string, config = {}): Promise<AxiosResponse<T>> => apiClient.get(url, config);

export default {
  get,
};
