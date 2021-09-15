import api from "./api";

class BreedService {
  constructor() {}

  async createBreed({ specie_id, name }) {
    const data = {
      name: name,
    };

    const response = await api.post(`/species/${specie_id}/breeds/`, data);
    return response;
  }

  async getBreedsBySpecie({ specie_id }) {
    const response = await api.get(`/species/${specie_id}/breeds/`);
    return response;
  }

  async getBreedBySpecieAndId({ specie_id, id }) {
    const response = await api.get(`/species/${specie_id}/breeds/${id}/`);
    return response;
  }

  async getAllBreeds() {
    const response = await api.get("/api/v1/species-breeds/");
    return response;
  }
}

export const breedService = new BreedService();
Object.freeze(breedService);
