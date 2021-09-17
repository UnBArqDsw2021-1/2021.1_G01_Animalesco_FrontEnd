import api from "./api";

class SpecieService {
  constructor() {}

  async createSpecie({ name }) {
    const data = {
      name: name,
    };

    const response = await api.post("/species/", data);
    return response;
  }

  async getAllSpecie() {
    const response = await api.get("/species/");
    return response;
  }

  async getSpecieByID({ id }) {
    const response = await api.get(`/species/${id}/`);
    return response;
  }
}

export const specieService = new SpecieService();
Object.freeze(specieService);
