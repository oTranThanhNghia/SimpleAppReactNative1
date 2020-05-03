// class ApiModule.js => get, post, ... basic class
import axios, { AxiosInstance, AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios';
import { getConfigs } from '../config';
import { BaseResponse, BaseErrorResponse } from '../types/ResponseTypes';

const TAG = 'ApiModule';
const TIME_OUT = 30000;

const Config = getConfigs();
const BaseParam = {
  apiKey: Config.API_KEY,
};

export const NETWORK_ERROR = 'NETWORK_ERROR';
export const TIMEOUT_ERROR = 'TIMEOUT_ERROR'; // not working for Android https://github.com/axios/axios/issues/2073

export default class ApiModule {
  instance: AxiosInstance;

  constructor(info = {}) {
    console.log(TAG + 'RN version= ' + Config.REACT_NATIVE_VERSION);
    this.instance = axios.create({
      baseURL: Config.BASE_URL,
      timeout: TIME_OUT, // not working for Android https://github.com/axios/axios/issues/2073
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': Config.API_KEY,
      },
    });
    // this.instance.defaults.timeout = TIME_OUT;

    // -------- more options
    // this.instance = axios.create({
    //   baseURL: config.BASE_URL,
    //   timeout: TIME_OUT,
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'CLIENT-OS': info.clientOS || 'android',
    //     'CLIENT-NAME': info.clientName || 'name',
    //     'CLIENT-ID': info.clientId || 'id',
    //     'APP-VERSION': info.appVersion || '1.0.0',
    //     'APP-REACT-NATIVE-VERSION': config.REACT_NATIVE_VERSION || '1.0.0',
    //   },
    // });
  }

  /**
   * @returns BaseResponse
   */
  handleResponse(response: AxiosResponse<BaseResponse>): BaseResponse {
    // console.log(TAG + 'handleResponse' + ' response= ' + JSON.stringify(response));
    if (response.status === 200) {
      return response.data;
    } else {
      return {
        status: 'error',
      };
    }
  }

  handleError(error: AxiosError<BaseErrorResponse>): BaseErrorResponse {
    // console.log(
    //   TAG + 'handleError error= ' + JSON.stringify(error) + '\n\n error.response= ' + error.response
    // );
    if (error.response != null) {
      return error.response.data;
    } else {
      // Error
      switch (error.message) {
        case 'Network Error':
          return {
            status: NETWORK_ERROR,
            code: null,
            message: error.message,
          };

        default:
          return {
            status: error.name,
            code: null,
            message: error.message,
          };
      }
    }
  }

  get(url: string, config: AxiosRequestConfig = null) {
    return this.instance
      .get(url, config)
      .then(this.handleResponse)
      .catch(this.handleError);
  }

  post(url: string, data: any, config: AxiosRequestConfig) {
    return this.instance
      .post(url, data, config)
      .then(this.handleResponse)
      .catch(this.handleError);
  }
}
