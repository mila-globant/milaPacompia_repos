import request from 'supertest'
import app from '../../../../src/infraestructure/http/app'

describe('Metrics routes', () => {
  test('Returns metrics of repositories of a registered tribe', async () => {
    const res = await request(await app)
      .get('/api/metrics?tribe=1')
    
    expect(res.statusCode).toEqual(200)
    expect(res.body.repositories.length).toBeGreaterThanOrEqual(1)
    expect(parseInt(res.body.repositories[0].coverage)).toBeGreaterThan(75)
  })
  test('Returns error for an ungeristered tribe', async () => {
    const res = await request(await app)
      .get('/api/metrics?tribe=200')
    
    expect(res.statusCode).toEqual(404)
    expect(res.body.message).toBe('La Tribu no se encuentra registrada')
  })
})