// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

const createApiClient = (config = {}) => axios.create(config);

export default createApiClient;
