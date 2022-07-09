export interface IRepositoryDTO {
  id: number
  state: number
}

export interface IRepositoryInteractor {
  check: () => Promise<IRepositoryDTO[]>
}
