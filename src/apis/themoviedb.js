import axios from 'axios';

export default axios.create({
  baseURL: `https://api.themoviedb.org/3`
});

/*
ROOT_URL.interceptors.request.use(
  (config) => {
    config.params = {
      api_key: '6625deddd4ccf0e5c36110f7e6b9274e',
      ...config
    };
    return config;
  },
  (err) => console.log(err)
);
*/
// export default ROOT_URL;
