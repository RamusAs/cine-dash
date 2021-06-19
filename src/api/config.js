const configDev = {
  BASE_URL: 'http://localhost:1347/', // 'https://cine-api-back.herokuapp.com/'
}
const configStaging = {
  BASE_URL: 'https://cine-api-back.herokuapp.com/',
}
const configProd = {
  BASE_URL: 'https://cine-api-back.herokuapp.com/',
}

let config = configDev
if (process.env.NODE_ENV === 'production') {
  if (process.env.VUE_APP_BACK === 'staging') {
    config = configStaging
  } else {
    config = configProd
  }
} else {
  config = configDev
}
export default config
