import axios, { AxiosInstance } from "axios";
import axiosRetry from "axios-retry";

import { getLogger } from '../../logging'

const logger = getLogger('api-client');

interface GetFlakeyRequest {
  apiDelay: number;
  clientTimeout: number;
  responseCode: number;
}

interface GetFlakeyResponse {
  message: string;
}

const API_BASE_URL = "http://localhost:3000/api";
const DEFAULT_TIMEOUT_MS = 5000;

export class ApiClient {
  private http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL: API_BASE_URL,
      timeout: DEFAULT_TIMEOUT_MS,
    });
    axiosRetry(this.http, {
      retries: 3,
      retryDelay: axiosRetry.exponentialDelay,
      shouldResetTimeout: true,
      onRetry: (retryCount) => {
        logger.debug('REQUEST-RETRY', { retryCount })
      }
    });
  }

  async getFlakey(req: GetFlakeyRequest): Promise<GetFlakeyResponse> {
    const { clientTimeout: timeout, ...params } = req;
    const res = await this.http.get('flakey', {
      timeout,
      params,
    });
    return res.data;
  }
}
