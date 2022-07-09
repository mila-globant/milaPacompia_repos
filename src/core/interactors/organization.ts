export interface IOrganizationInput {
  name: string
  status: number
}

export interface IOrganizationDTO {
  id: number
  name: string
  status: number
}

export interface IOrganizationInteractor {
  create: (data: IOrganizationInput) => Promise<number>
  getById: (id: number) => Promise<IOrganizationDTO>
  getAll: () => Promise<IOrganizationDTO[]>
  update: (data: IOrganizationDTO) => Promise<IOrganizationDTO>
  delete: (id: number) => Promise<boolean>
}
