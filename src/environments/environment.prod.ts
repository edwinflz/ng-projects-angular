const ASSETS = 'assets/data';
const URL = 'http://localhost:5000';
const URL_POKEMON = 'https://pokeapi.co/api/v2/pokemon';
export const environment = {
  production: true,
  defaultLocale: 'es',
  missingKey: false,
  apiKey: 'fnPqT5xQEi5Vcb9wKwbCf65c3BjVGyBB',
  urlAssets: {
    project: `${ASSETS}/projects.json`
  },
  urlApi: {
    registerUser: `${URL}/api/auth/register`,
    loginUser: `${URL}/api/auth/login`,
    fetchUser: `${URL}/api/users/{userId}`,
  },
  pokeApi: {
    paging: `${URL_POKEMON}/?offset={offset}&limit={limit}`,
    pokemon: `${URL_POKEMON}/{pokeId}`,
  }
};
