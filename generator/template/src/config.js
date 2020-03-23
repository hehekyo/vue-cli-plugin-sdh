let env = process.env.APP_NS
console.log('env', env)
let _baseUrl = ''
if (env === 'dev') {
  _baseUrl = '//api-dev.foo.com'  
} else if (env === 'test') {
  _baseUrl = '//api-test.foo.com'  
} else if (env === 'sandbox') {
  _baseUrl = '//api-sandbox.foo.com'  
} else if (env === 'online') {
  _baseUrl = '//api-online.foo.com'  
}
export const baseUrl = _baseUrl
