const BASEURL = "https://www.easy-mock.com/mock/5b3c959e1f38430dca0af820/SmileVue/"
const LOCALURL = "http://localhost:3000/"

const URL = {
  getShoppingMallInfo: BASEURL + '',
  getGoodsInfo: BASEURL + 'getGoodsInfo',
  registerUser: LOCALURL + 'user/register',
  login: LOCALURL + 'user/login',
}

module.exports = URL
