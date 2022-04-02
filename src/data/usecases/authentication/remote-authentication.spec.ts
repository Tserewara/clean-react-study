import { HttpPostClient } from 'data/protocols/http/http-post-client'
import { RemoteAuthentication } from './remote-authentication'

describe('RemoteAuthentication', () => {
  test('Should call HttpClient with correct URL', async () => {
    class HttpPostClientSpy implements HttpPostClient {
      url?: string
      async post (url: string): Promise<void> {
        this.url = url
      }
    }
    const url = 'any_url'
    const httpClient = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httpClient)
    await sut.auth()
    expect(httpClient.url).toBe(url)
  })
})
