export interface IMetricsDTO {
  idRepository: number
  coverage: number
  bugs: number
  vulnerabilities: number
  hotspot: number
  codeSmells: number
}

export interface IMetricsInteractor {
  getByTribe: (id: number) => Promise<IMetricsDTO[]>
}
