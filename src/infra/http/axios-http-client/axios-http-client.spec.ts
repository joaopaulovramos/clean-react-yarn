import { HttpPostParams } from './../../../data/protocols/http/http-post.client'
import { AxiosHttpClient } from './axios-http-client'
import axios from 'axios'
import faker from '@faker-js/faker'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>
const mockedAxiosResult = {
  data: faker.internet.userAgent(),
  status: faker.datatype.number()
}

mockedAxios.post.mockResolvedValue(mockedAxiosResult)

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}

const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: {
    email: faker.internet.email(),
    password: faker.internet.password()
  }
})

describe('AxiosHttpClient', () => {
  test('Should call axios with correct URL and Verb', async () => {
    const request = mockPostRequest()
    const sut = makeSut()
    sut.post(request)
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })

  test('Should call axios with correct URL and Verb', async () => {
    const sut = makeSut()
    const httpResponse = await sut.post(mockPostRequest())
    expect(httpResponse).toEqual({
      statusCode: mockedAxiosResult.status,
      body: mockedAxiosResult.data
    })
  })
})
