import axios from 'axios';

const axiosAPI = axios.create();

axiosAPI.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      const {
        config,
        response: { status },
      } = error;
  
      const originalRequest = config;
  
      if (status === 401) {
        const refreshToken = localStorage.getItem('refreshToken');
        axios({
          method: 'post',
          url: `http://13.125.81.51:3003/apis/auth/refreshToken`,
          data: { refreshToken },
        }).then((response) => {
          const accessTokens = response.data.data.accessToken;
          const accessToken = `${accessTokens.header}.${accessTokens.payload}.${accessTokens.signature}`;
  
          sessionStorage.setItem('access-token', accessToken);
  
          originalRequest.headers = { 'X-AUTH-TOKEN': accessToken };
          return axios(originalRequest);
        });
      }
      return Promise.reject(error);
    },
  );