export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  JWT_SECRET: process.env.JWT_SECRET ?? '',
  DATABASE: {
    DB_PASSWORD: process.env.DB_PASSWORD ?? '',
    DB_USERNAME: process.env.DB_USERNAME ?? '',
    DB_HOST: process.env.DB_HOST ?? '',
    DB_PORT: process.env.DB_PORT ?? '',
    DB_DATABASE: process.env.DB_DATABASE ?? '',
  },
});
