import axios from "axios";

class API {
  constructor() {
    if (!API.instance) {
      this.token = null;
      API.instance = this;
    }
    this.token = null;
    this.url = process.env.REACT_APP_API_URL
      ? process.env.REACT_APP_API_URL
      : "https://api-osmosis.imperator.co/";
    this.baseURL = this.url + "";
    this.captchaKey = "6LcibsgaAAAAAEjfNfpoSd3TRhgRDFAjAgOOgAFe";
    return API.instance;
  }

  getURL = () => this.url;

  request = ({ url, type, data, params }) => {
    let options = {
      method: type,
      url: this.baseURL + url,
    };
    if (data) options.data = data;
    if (params) options.params = params;
    return axios(options);
  };
}

const instance = new API();

export default instance;
