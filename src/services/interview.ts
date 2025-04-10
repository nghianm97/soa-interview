/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from 'axios'
import { axiosConfig } from './configApi'

export const getMultiLanguage: (lang: string) => Promise<AxiosResponse<any>> = (
  lang: string
) => {
  return axiosConfig.get(`/v1/pages?lang=${lang}`)
}
