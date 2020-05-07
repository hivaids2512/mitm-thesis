module.exports = {
  db: {
    username: process.env.DB_USERNAME || '',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || '',
    host: process.env.DB_HOST || '',
    port: process.env.DB_PORT || ''
  },
  server: {
    port: process.env.PORT || 3000
  },
  secretKey: process.env.SECRET_KEY || 'my_secret_key'
}