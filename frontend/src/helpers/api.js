import axios from "axios";

export const getApiUrl = (path) => {
  return `http://localhost:3333${path}`;
};
