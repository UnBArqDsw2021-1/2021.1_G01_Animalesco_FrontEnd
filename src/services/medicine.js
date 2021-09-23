import api from "./api";

class MedicineService {
  constructor() {}

  async createMedicine({ pet_id, name, start_date, finish_date }) {
    const data = {
      name: name,
      start_date: start_date,
      finish_date: finish_date,
    };

    const response = await api.post(`/pets/${pet_id}/medicines/`, data);
    return response;
  }

  async getAllMedicine({ pet_id }) {
    const response = await api.get(`/pets/${pet_id}/medicines/`);
    return response;
  }

  async getMedicineByID({ pet_id, id }) {
    const response = await api.get(`/pets/${pet_id}/medicines/${id}`);
    return response;
  }
}

export const medicineService = new MedicineService();
Object.freeze(medicineService);
