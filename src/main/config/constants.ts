export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  secret: process.env.JWT_SECRET ?? '',
  database: {
    DB_PASSWORD: process.env.DB_PASSWORD ?? '',
    DB_USERNAME: process.env.DB_USERNAME ?? '',
    DB_HOST: process.env.DB_HOST ?? '',
    DB_PORT: process.env.DB_PORT ?? '',
    DB_DATABASE: process.env.DB_DATABASE ?? '',
  },
});
