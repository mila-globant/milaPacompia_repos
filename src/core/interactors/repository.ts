export interface IRepositoryCodesDTO {
  id: number
  state: number
}

export interface IRepositoryDTO {
  id: number
  state: string
  name: string
  idTribe: number
}

export interface IRepositoryInteractor {
  check: () => Promise<IRepositoryCodesDTO[]>
  getById: (id: number) => Promise<IRepositoryDTO>
}
