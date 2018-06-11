// server/config.js
module.exports = {
    AUTH0_DOMAIN: 'alphadever.auth0.com', // e.g., kmaida.auth0.com
    AUTH0_API_AUDIENCE: 'http://localhost:8083/api/', // e.g., 'http://localhost:8083/api/'
    MONGO_URI: process.env.MONGO_URI || 'mongodb://alphadever:P3)babazy@ds255320.mlab.com:55320/mean-auth0-demo'
  };