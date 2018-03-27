import merge from 'lodash.merge'

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const env = process.env.NODE_ENV

const baseConfig = {
  port: 3001,
  secrets: {},
  db: {
    url: 'mongodb://admin:12345678@ds143778.mlab.com:43778/node-v2'
  }
}

let envConfig = {}

switch (env) {
  case 'development':
  case 'dev':
    envConfig = require('./dev').config
    break;
  case 'test':
  case 'testing':
    envConfig = require('./testing').config
    break;
  case 'prod':
  case 'production':
    envConfig = require('./prod').config
  default:
    envConfig = require('./dev').config
}


export default merge(baseConfig, envConfig)
