import axios from 'axios'
import { useAuthStore } from '../stores/stores'
export const BASE_URL_V2 = process.env.NEXT_PUBLIC_API_PREFIX
console.log('BASE_URL_V2', BASE_URL_V2)
axios.defaults.withCredentials = true
export const axiosConfig = axios.create({
  baseURL: BASE_URL_V2,
  timeout: 60000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    ...(localStorage.getItem('schoolManagement')
      ? { 'x-enterprise-uuid': localStorage.getItem('schoolManagement') }
      : {})
  }
})

axiosConfig.interceptors.request.use(
  (config) => {
    const accessToken = useAuthStore.getState().accessToken
    if (!config.headers['Authorization'] || accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`
    }
    const enterpriseUuid = localStorage.getItem('schoolManagement')
    if (enterpriseUuid) {
      config.headers['x-enterprise-uuid'] = enterpriseUuid
    }
    return config
  },
  (error) => Promise.reject(error)
)

axiosConfig.interceptors.response.use(
  async (response) => {
    return response
  },
  async (error) => {
    const prevRequest = error?.config
    if (!prevRequest?.sent) {
      prevRequest.sent = true
      try {
        const refreshToken = useAuthStore.getState().refreshToken
        const accessToken = useAuthStore.getState().accessToken
        if (refreshToken && accessToken) {
          prevRequest.headers['Authorization'] = `Bearer ${accessToken}`
          return axiosConfig(prevRequest)
        }
      } catch (error) {
        console.log('Err', error)
        location.replace('/login')
      }
    } else if (
      error?.response?.status === 401 ||
      error?.response?.status === 503
    ) {
      //logout funtion here
      // const logout = useAuthStore.getState().logout;
      // logout();
    } else if (error?.response?.status === 502) {
      //maintain function here
      // if (currentUrl.pathname !== "/" + routesConfig.maintenance) {
      //   currentUrl.pathname = "/maintenance";
      //   window.location.href = currentUrl.href;
      // }
    } else {
      console.log('Error', error)
    }
    return Promise.reject(error)
  }
)
