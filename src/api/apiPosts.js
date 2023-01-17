import apiHandler from './apiHandler';
// import { environment } from '../utils/config';

const { tenantRequest } = apiHandler;

function getByCharacters({ signal, page }) {

  const method = 'GET';
  return tenantRequest(`/api/location?page=${page}`, {
    signal,
    method,
  });

}

export default {
  getByCharacters,
};
