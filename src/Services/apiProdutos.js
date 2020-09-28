import axios from "axios";

const apiProduto = axios.create({
  baseURL: "https://rocketseat-node.herokuapp.com/api"
});

export default apiProduto;
