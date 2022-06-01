module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('BASE_URL', `http://localhost:${env.int('PORT', 1337)}`),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'e7f28531fe899f80e2d4b07b134e80ec'),
    },
  },
});