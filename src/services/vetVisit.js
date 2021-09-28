import api from "./api";

class VetVisitService {
  constructor() {}

  async createVisit({
    pet_id,
    vet_clinic,
    description = null,
    visit_date,
    next_visit_date = null,
  }) {
    const data = { vet_clinic, description, visit_date, next_visit_date };

    console.log(data);

    const response = await api.post(`/pets/${pet_id}/vet_visits/`, data);
    return response;
  }
}

export const vetVisitService = new VetVisitService();
Object.freeze(vetVisitService);
