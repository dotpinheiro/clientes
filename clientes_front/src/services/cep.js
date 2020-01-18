import axios from "axios";

const api = axios.create({
  baseURL: "https://viacep.com.br/ws/"
});

export default {
  searchAddress: cep => {
    return api.get(`${cep}/json`);
  }
};
