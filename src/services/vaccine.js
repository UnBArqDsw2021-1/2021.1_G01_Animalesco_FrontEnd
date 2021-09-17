import api from "./api";

class VaccineService {
  constructor() {}

  async createVaccine({
    pet_id,
    name,
    application_date,
    next_application_date = "",
    is_finished = false,
  }) {
    const data = {
      name: name,
      application_date: application_date,
      next_application_date: next_application_date,
      is_finished: is_finished,
    };

    const response = await api.post(`/pets/${pet_id}/vaccines/`, data);
    return response;
  }

  async getAllVaccine({ pet_id }) {
    const response = await api.get(`/pets/${pet_id}/vaccines/`);
    return response;
  }

  async getVaccineByID({ pet_id, id }) {
    const response = await api.get(`/pets/${pet_id}/vaccines/${id}`);
    return response;
  }
}

export const vaccineService = new VaccineService();
Object.freeze(vaccineService);
