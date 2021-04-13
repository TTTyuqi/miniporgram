class Resquest{
  constructor(params){
    this.baseURL = params.baseURL
    this.withBaseURL = params.withBaseURL
  }
  get (url, data) {
    return this.HttpRequest('GET', url, data)
  }
  post (url, data) {
    return this.HttpRequest('POST', url, data)
  }
  put (url, data) {
    return this.HttpRequest('PUT', url, data)
  }
  HttpRequest(method, url, data) {
    return new Promise((resolve,reject) => {
      wx.request({
        url:this.withBaseURL ? this.baseURL + url : url,
        data,
        method,
        success:(res) => {
          resolve(res)
        },
        fail:(err) => {
          reject(err)
        }
      })
    })
}
}
const HttpRequest =new Resquest({
  baseURL: 'http://localhost:3033',
  withBaseURL: true
})
export default HttpRequest