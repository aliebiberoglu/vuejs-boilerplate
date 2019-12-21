const configElement = document.getElementById('config');
const config = JSON.parse(configElement.innerHTML);

// -------------------------------------------------------------------------------------------------
// ## Api config.
// -------------------------------------------------------------------------------------------------
const API_URL = {};

API_URL.BASE = config.baseUrl;

API_URL.USER = 'users';

export {
  // eslint-disable-next-line import/prefer-default-export
  API_URL,
};
