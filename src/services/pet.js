import api from "./api";

class PetService {
  constructor() {}

  async createPet({ name, sex, breed, birth_date, color }) {
    const data = {
      name: name,
      sex: sex,
      breed: breed,
      birth_date: birth_date,
      color: color,
    };

    const response = await api.post("/pets/", data);
    return response;
  }

  async getAllPet() {
    const response = await api.get("/pets/");
    return response;
  }

  async getPetByID({ id }) {
    const response = await api.get(`/pets/${id}/`);
    return response;
  }
}

export const petService = new PetService();
Object.freeze(petService);
