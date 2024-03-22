import axios from "axios";

const AxiosConfigure = {
  baseURL: `https://dummyjson.com/`,
};

export const customedAxios = axios.create(AxiosConfigure);
