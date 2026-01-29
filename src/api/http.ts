import axios from "axios";

export const http = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character",
  timeout: 15000,
});