import axios from "axios";

const Api = axios.create({
  baseURL: "https://api.pokemontcg.io/v1"
});

export default Api;
