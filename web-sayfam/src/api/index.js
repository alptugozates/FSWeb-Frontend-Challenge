import axios from "axios";

export const instance = axios.create({
  baseURL: "https://reqres.in/api/workintech",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
