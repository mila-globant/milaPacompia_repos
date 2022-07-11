export interface ITribeDTO {
  id: number
  name: string
  status: number
  idOrganization: number
}

export interface ITribeInteractor {
  getById: (id: number) => Promise<ITribeDTO>
}
